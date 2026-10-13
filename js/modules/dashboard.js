/* ===== LingoGo 首页 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.dashboard = function() {
  const user = LL.auth.requireAuth();
  if (!user) return '';

  const records = LL.store.getRecords(user.id);
  const today = LL.utils.todayStr();
  const todayAct = records.dailyActivity && records.dailyActivity[today] || { xp: 0, minutes: 0 };
  const dailyGoal = user.settings ? user.settings.dailyGoalMinutes || 30 : 30;

  const levelInfo = LL.gamification.getLevelByXp(user.xp);
  const levelProg = LL.gamification.getLevelProgress(user.xp);

  const recs = LL.recommender.getRecommendations();
  const dueCount = LL.srs.getDueCards(records.srs || {}).length;

  const langNames = { en: '英语', ja: '日语', ko: '韩语' };
  const langEmojis = { en: '🇬🇧', ja: '🇯🇵', ko: '🇰🇷' };

  // 各语言进度
  const langProgress = (user.targetLangs || ['en']).map(function(lang) {
    const course = LL.courses[lang];
    if (!course) return null;
    const total = LL.courses.countLessons(lang);
    let done = 0;
    course.levels.forEach(function(l) {
      l.units.forEach(function(u) {
        u.lessons.forEach(function(ls) {
          if (records.lessonRecords[ls.id] && records.lessonRecords[ls.id].status === 'completed') done++;
        });
      });
    });
    return { lang: lang, total: total, done: done, pct: total ? done / total : 0 };
  }).filter(Boolean);

  const html = '<div class="page">' +
    // 顶部欢迎
    '<div class="dash-hero">' +
      '<div class="mascot-abs">🦜</div>' +
      '<div style="position:relative;z-index:1">' +
        '<p style="opacity:.9;font-size:14px">欢迎回来</p>' +
        '<h1 style="font-size:24px;font-weight:900">' + LL.utils.escapeHtml(user.username) + '</h1>' +
        '<div class="flex items-center gap-3 mt-4">' +
          '<div class="streak-fire"><span class="fire-icon">🔥</span><span class="streak-num">' + (user.streak ? user.streak.current : 0) + '</span></div>' +
          '<span style="opacity:.9;font-weight:700">连续学习</span>' +
        '</div>' +
      '</div>' +
    '</div>' +

    // 等级进度
    '<div class="card mb-4">' +
      '<div class="flex items-center justify-between mb-2">' +
        '<span class="fw-bold">Lv.' + levelInfo.level + ' ' + levelInfo.title + '</span>' +
        '<span class="xp-display">⭐ ' + user.xp + ' XP</span>' +
      '</div>' +
      '<div class="progress-bar"><div class="progress-bar-fill" style="width:' + (levelProg.pct * 100) + '%;background:var(--c-gold)"></div></div>' +
      (levelProg.next ? '<p class="c-soft mt-2" style="font-size:12px">距 Lv.' + levelProg.next.level + ' 还差 ' + levelProg.remain + ' XP</p>' : '<p class="c-primary mt-2" style="font-size:12px">已达到最高等级！</p>') +
    '</div>' +

    // 统计
    '<div class="stat-grid">' +
      '<div class="stat-box"><div class="stat-num">' + todayAct.minutes + '</div><div class="stat-label">今日分钟</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + todayAct.xp + '</div><div class="stat-label">今日XP</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + dueCount + '</div><div class="stat-label">待复习</div></div>' +
    '</div>' +

    // 今日目标
    '<div class="card mb-4">' +
      '<div class="flex items-center justify-between mb-2">' +
        '<span class="fw-bold">🎯 每日目标</span>' +
        '<span class="c-soft">' + todayAct.minutes + '/' + dailyGoal + ' 分钟</span>' +
      '</div>' +
      '<div class="progress-bar"><div class="progress-bar-fill" style="width:' + Math.min(100, todayAct.minutes / dailyGoal * 100) + '%"></div></div>' +
    '</div>' +

    // 推荐
    (recs.length > 0 ?
      '<h2 class="section-title">为你推荐</h2>' +
      '<div class="flex flex-col gap-3 mb-6">' +
        recs.map(function(r) {
          return '<div class="rec-card" data-action=\'' + JSON.stringify(r.action) + '\'>' +
            '<div class="rec-icon" style="background:' + r.color + '">' + r.icon + '</div>' +
            '<div class="flex-1">' +
              '<div class="fw-bold">' + LL.utils.escapeHtml(r.title) + '</div>' +
              '<div class="c-soft" style="font-size:13px">' + LL.utils.escapeHtml(r.desc) + '</div>' +
            '</div>' +
            '<span class="c-faint">›</span>' +
          '</div>';
        }).join('') +
      '</div>'
    : '') +

    // 语言进度
    '<h2 class="section-title">学习语言</h2>' +
    '<div class="flex flex-col gap-3">' +
      langProgress.map(function(lp) {
        return '<a href="#/courses/' + lp.lang + '" class="lang-card ' + lp.lang + '">' +
          '<div class="flex items-center justify-between">' +
            '<div><div class="lang-flag">' + langEmojis[lp.lang] + '</div><div class="lang-name">' + langNames[lp.lang] + '</div></div>' +
            '<div style="text-align:right"><div style="font-size:28px;font-weight:900">' + lp.done + '/' + lp.total + '</div><div style="font-size:12px;opacity:.9">已完成</div></div>' +
          '</div>' +
          '<div class="progress-bar" style="margin-top:8px;background:rgba(255,255,255,.3)"><div class="progress-bar-fill" style="width:' + (lp.pct * 100) + '%;background:#fff"></div></div>' +
        '</a>';
      }).join('') +
      // 添加新语言
      (user.targetLangs && user.targetLangs.length < 3 ?
        '<a href="#/courses" class="lang-card" style="background:#f0f0f0;color:#999;justify-content:center;align-items:center"><span style="font-size:24px">＋</span> 探索更多语言</a>'
      : '') +
    '</div>' +
    // 分级读物入口
    '<a href="#/reading" class="lang-card" style="background:linear-gradient(135deg,#7B61FF,#9B59B6);color:#fff">' +
      '<div class="flex items-center justify-between">' +
        '<div><div class="lang-flag">📖</div><div class="lang-name">分级读物</div></div>' +
        '<div style="font-size:12px;opacity:.9">按难度筛选 →</div>' +
      '</div>' +
    '</a>' +
  '</div>';

  return {
    html: html,
    onMount: function() {
      // 推荐卡点击
      document.querySelectorAll('.rec-card').forEach(function(card) {
        card.addEventListener('click', function() {
          const action = JSON.parse(this.getAttribute('data-action'));
          if (!action || !action.type) return;
          if (action.type === 'lesson' && action.target) {
            LL.router.go('/lesson/' + action.target);
          } else if (action.type === 'review') {
            LL.router.go('/courses/' + (action.target || 'en'));
          } else if (action.type === 'skill') {
            // 找对应语言的第一课
            LL.router.go('/courses/' + action.lang);
          } else if (action.type === 'courses-lang') {
            LL.router.go('/courses/' + action.target);
          } else {
            LL.router.go('/courses');
          }
        });
      });
    }
  };
};
