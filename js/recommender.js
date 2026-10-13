/* ===== LingoGo 个性化推荐引擎 ===== */
window.LL = window.LL || {};

LL.recommender = (function() {
  'use strict';

  function getSnapshot() {
    const user = LL.store.getCurrentUser();
    if (!user) return null;
    const records = LL.store.getRecords(user.id);
    const today = LL.utils.todayStr();

    const dueCards = LL.srs.getDueCards(records.srs || {});
    const dueCardsByLang = {};
    dueCards.forEach(function(id) {
      const lang = id.split('-')[0];
      dueCardsByLang[lang] = (dueCardsByLang[lang] || 0) + 1;
    });

    const todayAct = records.dailyActivity && records.dailyActivity[today] || { xp: 0, minutes: 0 };
    const totalDue = dueCards.length;

    // 找弱点技能
    let weakSkill = null;
    Object.keys(records.skillStats || {}).forEach(function(lang) {
      const skills = records.skillStats[lang];
      Object.keys(skills).forEach(function(skill) {
        const score = skills[skill];
        if (score < 0.5 && (!weakSkill || score < weakSkill.score)) {
          weakSkill = { lang: lang, skill: skill, score: score };
        }
      });
    });

    // 找下一未学已解锁课时
    let nextLesson = null;
    const lang = user.targetLangs && user.targetLangs[0] || 'en';
    const course = LL.courses && LL.courses[lang];
    if (course) {
      outer: for (let i = 0; i < course.levels.length; i++) {
        for (let j = 0; j < course.levels[i].units.length; j++) {
          for (let k = 0; k < course.levels[i].units[j].lessons.length; k++) {
            const lesson = course.levels[i].units[j].lessons[k];
            const rec = records.lessonRecords[lesson.id];
            const completed = rec && rec.status === 'completed';
            const reqsMet = !lesson.requires || lesson.requires.every(function(req) {
              return records.lessonRecords[req] && records.lessonRecords[req].status === 'completed';
            });
            if (!completed && reqsMet) {
              nextLesson = { lang: lang, lessonId: lesson.id, title: lesson.title, unitTitle: course.levels[i].units[j].title };
              break outer;
            }
          }
        }
      }
    }

    // 未触及的语言（从 LL.langList 读取，未加载时回退到旧硬编码）
    const allLangs = LL.langList || ['en','ja','ko'];
    const untouchedLangs = allLangs.filter(function(l) {
      return !user.targetLangs.includes(l) || !Object.keys(records.lessonRecords || {}).some(function(id) { return id.startsWith(l + '-'); });
    });

    return {
      user: user,
      records: records,
      dueCards: totalDue,
      dueCardsByLang: dueCardsByLang,
      streak: user.streak || { current: 0, longest: 0, lastStudyDate: null },
      todayMinutes: todayAct.minutes || 0,
      todayXp: todayAct.xp || 0,
      dailyGoalMinutes: user.settings ? user.settings.dailyGoalMinutes || 30 : 30,
      weakSkill: weakSkill,
      nextLesson: nextLesson,
      untouchedLangs: untouchedLangs,
      today: today
    };
  }

  function getRecommendations() {
    const snap = getSnapshot();
    if (!snap) return [];

    const recs = [];

    // 1. 保连续
    if (snap.streak.current > 0 && (!snap.streak.lastStudyDate || snap.streak.lastStudyDate !== snap.today)) {
      recs.push({
        id: 'keep-streak',
        icon: '🔥',
        title: '保住连续 ' + snap.streak.current + ' 天',
        desc: '今天还没学习，连续纪录即将中断！',
        color: '#FF9600',
        action: { type: 'lesson', target: snap.nextLesson ? snap.nextLesson.lessonId : null }
      });
    }

    // 2. 待复习
    if (snap.dueCards >= 5) {
      const lang = Object.keys(snap.dueCardsByLang).sort(function(a, b) { return snap.dueCardsByLang[b] - snap.dueCardsByLang[a]; })[0];
      recs.push({
        id: 'review-cards',
        icon: '🔄',
        title: '复习 ' + snap.dueCards + ' 张卡片',
        desc: '记忆需要巩固，趁热打铁',
        color: '#1CB0F6',
        action: { type: 'review', target: lang }
      });
    }

    // 3. 补弱
    if (snap.weakSkill && snap.weakSkill.score < 0.5) {
      const skillNames = { vocab: '单词', grammar: '语法', listening: '听力', speaking: '口语' };
      recs.push({
        id: 'fix-weak',
        icon: '💪',
        title: '加强' + skillNames[snap.weakSkill.skill],
        desc: '你的' + skillNames[snap.weakSkill.skill] + '稍弱，来练习一下吧',
        color: '#FF4B4B',
        action: { type: 'skill', lang: snap.weakSkill.lang, skill: snap.weakSkill.skill }
      });
    }

    // 4. 目标未达
    if (snap.todayMinutes < snap.dailyGoalMinutes) {
      const remain = snap.dailyGoalMinutes - snap.todayMinutes;
      recs.push({
        id: 'daily-goal',
        icon: '🎯',
        title: '今日还差 ' + remain + ' 分钟',
        desc: '达成每日目标可获得额外奖励',
        color: '#58CC02',
        action: { type: 'lesson', target: snap.nextLesson ? snap.nextLesson.lessonId : null }
      });
    }

    // 5. 下一课
    if (snap.nextLesson) {
      recs.push({
        id: 'next-lesson',
        icon: '▶️',
        title: '继续：' + snap.nextLesson.title,
        desc: snap.nextLesson.unitTitle + ' · 下一课时',
        color: '#8B5CF6',
        action: { type: 'lesson', target: snap.nextLesson.lessonId }
      });
    }

    // 6. 新语种
    if (snap.untouchedLangs.length > 0) {
      // 语言元数据从 LL.langs 读取，未加载时回退到旧硬编码
      const langNames = {};
      const langEmojis = {};
      (LL.langList || ['en','ja','ko']).forEach(function(l) {
        if (LL.langs && LL.langs[l]) {
          langNames[l] = LL.langs[l].name;
          langEmojis[l] = LL.langs[l].flag;
        }
      });
      if (!langNames.en) { langNames.en = '英语'; langEmojis.en = '🇬🇧'; }
      if (!langNames.ja) { langNames.ja = '日语'; langEmojis.ja = '🇯🇵'; }
      if (!langNames.ko) { langNames.ko = '韩语'; langEmojis.ko = '🇰🇷'; }
      const lang = snap.untouchedLangs[0];
      recs.push({
        id: 'new-lang',
        icon: langEmojis[lang],
        title: '试试' + langNames[lang] + '吧',
        desc: '开启新语言，拓展视野',
        color: '#00B8A9',
        action: { type: 'courses-lang', target: lang }
      });
    }

    // 去重并限制数量
    return recs.slice(0, 4);
  }

  return {
    getSnapshot: getSnapshot,
    getRecommendations: getRecommendations
  };
})();
