/* ===== LingoGo 游戏化引擎 · XP/等级/连续/徽章 ===== */
window.LL = window.LL || {};

LL.gamification = (function() {
  'use strict';

  function getLevelTable() { return LL.seed.levelTable || []; }

  function getLevelByXp(xp) {
    const table = getLevelTable();
    let level = 1, title = table[0] ? table[0].title : '新手';
    for (let i = 0; i < table.length; i++) {
      if (xp >= table[i].minXp) {
        level = table[i].level;
        title = table[i].title;
      } else break;
    }
    return { level: level, title: title };
  }

  function getNextLevel(xp) {
    const table = getLevelTable();
    for (let i = 0; i < table.length; i++) {
      if (xp < table[i].minXp) return table[i];
    }
    return null;
  }

  function getLevelProgress(xp) {
    const next = getNextLevel(xp);
    const table = getLevelTable();
    const cur = table.filter(function(t) { return xp >= t.minXp; }).pop() || table[0];
    if (!next) return { current: cur, next: null, pct: 1, remain: 0 };
    const range = next.minXp - cur.minXp;
    const pct = range > 0 ? (xp - cur.minXp) / range : 0;
    return { current: cur, next: next, pct: LL.utils.clamp(pct, 0, 1), remain: next.minXp - xp };
  }

  function getXpRules() { return LL.seed.xpRules || {}; }

  function ensureTodayActivity(user) {
    const today = LL.utils.todayStr();
    if (!user.todayActivity || user.todayActivity.date !== today) {
      user.todayActivity = { date: today, xpToday: 0, minutesToday: 0 };
    }
    return user.todayActivity;
  }

  function updateStreak(user) {
    const today = LL.utils.todayStr();
    const streak = user.streak || { current: 0, longest: 0, lastStudyDate: null };

    if (streak.lastStudyDate === today) {
      // 已记录今日
    } else if (streak.lastStudyDate) {
      const diff = LL.utils.daysBetween(streak.lastStudyDate, today);
      if (diff === 1) {
        streak.current += 1;
      } else if (diff > 1) {
        streak.current = 1;
      } else if (diff === 0) {
        streak.current = Math.max(1, streak.current);
      } else {
        streak.current = 1;
      }
    } else {
      streak.current = 1;
    }
    streak.lastStudyDate = today;
    if (streak.current > streak.longest) streak.longest = streak.current;
    user.streak = streak;
  }

  function record(action, ctx) {
    const user = LL.store.getCurrentUser();
    if (!user) return null;

    const rules = getXpRules();
    const rule = rules[action];
    if (!rule) return null;

    const result = { xpGain: 0, coinsGain: 0, badges: [], levelUp: false };

    ensureTodayActivity(user);
    updateStreak(user);

    user.xp += rule.xp || 0;
    user.coins += rule.coins || 0;
    user.todayActivity.xpToday += rule.xp || 0;
    if (rule.minutes) user.todayActivity.minutesToday += rule.minutes;
    result.xpGain = rule.xp || 0;
    result.coinsGain = rule.coins || 0;

    // 更新等级
    const levelInfo = getLevelByXp(user.xp);
    const oldLevel = user.level;
    user.level = levelInfo.level;
    if (user.level > oldLevel) {
      result.levelUp = true;
      result.oldLevel = oldLevel;
      result.newLevel = user.level;
    }

    // 检查徽章解锁
    result.badges = checkBadges(user, ctx);

    LL.store.saveUser(user);

    // 触发 UI 反馈
    if (result.badges.length > 0) {
      result.badges.forEach(function(badge) {
        LL.ui && LL.ui.celebrateBadge(badge);
      });
    }
    if (result.levelUp) {
      LL.ui && LL.ui.celebrateLevel(result.oldLevel, result.newLevel);
    }
    if (result.xpGain > 0) {
      LL.ui && LL.ui.flyXp(result.xpGain);
    }

    return result;
  }

  function checkBadges(user, ctx) {
    if (!LL.achievements) return [];
    const records = LL.store.getRecords(user.id);
    const unlocked = [];
    const userBadges = new Set(user.unlockedBadges || []);

    LL.achievements.forEach(function(badge) {
      if (userBadges.has(badge.id)) return;
      if (evalCondition(badge.condition, user, records, ctx)) {
        unlocked.push(badge);
        user.unlockedBadges.push(badge.id);
        records.unlockedBadges.push(badge.id);
        user.xp += badge.xpReward || 0;
        user.coins += badge.coinsReward || 0;
      }
    });

    if (unlocked.length > 0) {
      const levelInfo = getLevelByXp(user.xp);
      user.level = levelInfo.level;
    }
    return unlocked;
  }

  function evalCondition(cond, user, records, ctx) {
    if (!cond) return false;
    ctx = ctx || {};
    const type = cond.type;

    switch (type) {
      case 'lessonsCompleted': {
        const count = Object.keys(records.lessonRecords || {}).filter(function(id) {
          return records.lessonRecords[id].status === 'completed';
        }).length;
        return compare(count, cond.op, cond.value);
      }
      case 'streakDays':
        return compare(user.streak ? user.streak.longest || user.streak.current : 0, cond.op, cond.value);
      case 'langLessons': {
        const lang = cond.lang;
        const count = Object.keys(records.lessonRecords || {}).filter(function(id) {
          return id.startsWith(lang + '-') && records.lessonRecords[id].status === 'completed';
        }).length;
        return compare(count, cond.op, cond.value);
      }
      case 'postsCreated':
        return compare(LL.store.getCommunity().posts.filter(function(p){ return p.userId === user.id; }).length, cond.op, cond.value);
      case 'likesReceived': {
        const likes = LL.store.getCommunity().posts.reduce(function(sum, p) {
          return sum + (p.userId === user.id ? (p.likes ? p.likes.length : 0) : 0);
        }, 0);
        return compare(likes, cond.op, cond.value);
      }
      case 'perfectLessons': {
        const count = Object.keys(records.lessonRecords || {}).filter(function(id) {
          return records.lessonRecords[id].bestScore >= 100;
        }).length;
        return compare(count, cond.op, cond.value);
      }
      case 'polyglot': {
        // 多语种徽章：从 LL.langList 读取支持的所有语言
        const supportedLangs = LL.langList || ['en','ja','ko'];
        const langs = supportedLangs.filter(function(l) {
          return Object.keys(records.lessonRecords || {}).some(function(id) {
            return id.startsWith(l + '-') && records.lessonRecords[id].status === 'completed';
          });
        });
        return compare(langs.length, cond.op, cond.value);
      }
      case 'dailyGoalReached': {
        const today = ensureTodayActivity(user);
        const goal = user.settings ? user.settings.dailyGoalMinutes || 30 : 30;
        return compare(today.minutesToday, '>=', goal);
      }
      case 'xp':
        return compare(user.xp, cond.op, cond.value);
      case 'mediaCompleted': {
        const c = Object.keys(records.mediaRecords || {}).length;
        return compare(c, cond.op, cond.value);
      }
      case 'readingCompleted': {
        const c = Object.keys(records.readingRecords || {}).length;
        return compare(c, cond.op, cond.value);
      }
      default:
        return false;
    }
  }

  function compare(a, op, b) {
    switch (op) {
      case '>=': return a >= b;
      case '>': return a > b;
      case '===': case '==': return a === b;
      case '<=': return a <= b;
      case '<': return a < b;
      default: return false;
    }
  }

  function updateSkillStats(userId, lang, skill, score) {
    const records = LL.store.getRecords(userId);
    if (!records.skillStats[lang]) records.skillStats[lang] = { vocab: 0, grammar: 0, listening: 0, speaking: 0 };
    const cur = records.skillStats[lang][skill] || 0;
    // 加权平均
    records.skillStats[lang][skill] = Math.round((cur * 0.6 + score * 0.4) * 100) / 100;
    LL.store.saveRecords(userId, records);
  }

  function addLessonRecord(userId, lessonId, result) {
    const records = LL.store.getRecords(userId);
    const prev = records.lessonRecords[lessonId] || { status: 'not-started', progress: 0, bestScore: 0, attemptsCount: 0, activityResults: [] };
    prev.attemptsCount += 1;
    prev.progress = result.progress || 1;
    prev.bestScore = Math.max(prev.bestScore, result.score || 0);
    prev.lastAttemptAt = Date.now();
    if (result.completed) {
      prev.status = 'completed';
      prev.completedAt = Date.now();
    } else {
      prev.status = 'in-progress';
    }
    prev.xpEarned = result.xpEarned || 0;
    prev.activityResults = result.activityResults || [];
    records.lessonRecords[lessonId] = prev;

    if (result.completed) {
      const stats = records.totalStats || { totalXp: 0, totalMinutes: 0, totalLessons: 0 };
      stats.totalLessons = (stats.totalLessons || 0) + 1;
      records.totalStats = stats;
    }

    // 更新每日活动
    const today = LL.utils.todayStr();
    if (!records.dailyActivity) records.dailyActivity = {};
    if (!records.dailyActivity[today]) records.dailyActivity[today] = { xp: 0, minutes: 0, lessonsCompleted: 0, cardsReviewed: 0 };
    if (result.completed) records.dailyActivity[today].lessonsCompleted = (records.dailyActivity[today].lessonsCompleted || 0) + 1;
    records.dailyActivity[today].xp = (records.dailyActivity[today].xp || 0) + (result.xpEarned || 0);

    LL.store.saveRecords(userId, records);
  }

  return {
    getLevelByXp: getLevelByXp,
    getLevelProgress: getLevelProgress,
    getNextLevel: getNextLevel,
    record: record,
    updateStreak: updateStreak,
    ensureTodayActivity: ensureTodayActivity,
    updateSkillStats: updateSkillStats,
    addLessonRecord: addLessonRecord
  };
})();
