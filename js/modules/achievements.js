/* ===== LingoGo 成就墙 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.achievementsPage = function() {
  const user = LL.auth.requireAuth();
  if (!user) return '';

  const records = LL.store.getRecords(user.id);
  const unlockedSet = new Set(user.unlockedBadges || []);

  const levelInfo = LL.gamification.getLevelByXp(user.xp);
  const levelProg = LL.gamification.getLevelProgress(user.xp);

  // 按分类分组
  const categories = { learning: '学习', streak: '连续', social: '社交', skill: '技能', special: '特殊' };
  const grouped = {};
  LL.achievements.forEach(function(b) {
    if (!grouped[b.category]) grouped[b.category] = [];
    grouped[b.category].push(b);
  });

  // 计算每个徽章的进度
  function getProgress(badge) {
    const cond = badge.condition;
    if (!cond) return { current: 0, target: 1, pct: 0 };
    let current = 0, target = cond.value || 1;
    switch (cond.type) {
      case 'lessonsCompleted':
        current = Object.keys(records.lessonRecords || {}).filter(function(id) { return records.lessonRecords[id].status === 'completed'; }).length;
        break;
      case 'streakDays':
        current = user.streak ? user.streak.longest || user.streak.current : 0;
        break;
      case 'postsCreated':
        current = LL.store.getCommunity().posts.filter(function(p) { return p.userId === user.id; }).length;
        break;
      case 'likesReceived':
        current = LL.store.getCommunity().posts.reduce(function(sum, p) { return sum + (p.userId === user.id ? (p.likes ? p.likes.length : 0) : 0); }, 0);
        break;
      case 'perfectLessons':
        current = Object.keys(records.lessonRecords || {}).filter(function(id) { return records.lessonRecords[id].bestScore >= 100; }).length;
        break;
      case 'polyglot':
        current = ['en','ja','ko'].filter(function(l) {
          return Object.keys(records.lessonRecords || {}).some(function(id) { return id.startsWith(l + '-') && records.lessonRecords[id].status === 'completed'; });
        }).length;
        break;
      case 'xp':
        current = user.xp;
        break;
      case 'dailyGoalReached': {
        const today = LL.utils.todayStr();
        const todayAct = records.dailyActivity && records.dailyActivity[today] || {};
        const goal = user.settings ? user.settings.dailyGoalMinutes || 30 : 30;
        current = todayAct.minutes || 0;
        target = goal;
        break;
      }
      default:
        return { current: 0, target: 1, pct: 0 };
    }
    return { current: current, target: target, pct: target ? Math.min(1, current / target) : 0 };
  }

  const html = '<div class="page">' +
    '<div class="topbar"><span class="topbar-title">🏆 成就墙</span></div>' +
    '<div class="mt-4">' +
      // 等级卡片
      '<div class="card mb-6" style="text-align:center;background:linear-gradient(135deg,#fff8e1,#fff);border-color:var(--c-gold)">' +
        '<div style="font-size:48px">⭐</div>' +
        '<h2 class="fs-2xl fw-extrabold mt-2">Lv.' + levelInfo.level + ' ' + levelInfo.title + '</h2>' +
        '<p class="c-soft">' + user.xp + ' XP</p>' +
        '<div class="progress-bar mt-3" style="max-width:300px;margin:12px auto 0"><div class="progress-bar-fill" style="width:' + (levelProg.pct * 100) + '%;background:var(--c-gold)"></div></div>' +
        (levelProg.next ? '<p class="c-soft mt-2" style="font-size:12px">距 Lv.' + levelProg.next.level + ' 还差 ' + levelProg.remain + ' XP</p>' : '<p class="c-primary mt-2" style="font-size:12px">已满级！</p>') +
      '</div>' +

      // 统计
      '<div class="grid grid-3 mb-6">' +
        '<div class="stat-box"><div class="stat-num">' + (user.unlockedBadges ? user.unlockedBadges.length : 0) + '</div><div class="stat-label">徽章</div></div>' +
        '<div class="stat-box"><div class="stat-num">' + user.coins + '</div><div class="stat-label">金币</div></div>' +
        '<div class="stat-box"><div class="stat-num">' + LL.achievements.length + '</div><div class="stat-label">总徽章</div></div>' +
      '</div>' +

      // 徽章分组
      Object.keys(categories).map(function(cat) {
        const badges = grouped[cat] || [];
        if (badges.length === 0) return '';
        return '<h2 class="section-title">' + categories[cat] + '</h2>' +
          '<div class="achievement-grid mb-6">' +
            badges.map(function(b) {
              const unlocked = unlockedSet.has(b.id);
              const prog = getProgress(b);
              return '<div class="badge-card' + (unlocked ? '' : ' locked') + '">' +
                '<div class="badge-icon">' + (b.hidden && !unlocked ? '❓' : b.icon) + '</div>' +
                '<div class="badge-name">' + (b.hidden && !unlocked ? '隐藏' : LL.utils.escapeHtml(b.name)) + '</div>' +
                '<div class="badge-desc">' + (b.hidden && !unlocked ? '继续探索解锁' : LL.utils.escapeHtml(b.desc)) + '</div>' +
                (unlocked ? '<span class="tag tag-primary mt-1">已解锁</span>' :
                  (b.hidden ? '' : '<div class="ach-progress"><div class="ach-progress-fill" style="width:' + (prog.pct * 100) + '%"></div></div><p class="c-faint" style="font-size:11px;margin-top:4px">' + prog.current + '/' + prog.target + '</p>')) +
              '</div>';
            }).join('') +
          '</div>';
      }).join('') +
    '</div>' +
  '</div>';

  return { html: html };
};
