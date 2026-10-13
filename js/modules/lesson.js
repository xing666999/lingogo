/* ===== LingoGo 课时播放器 · 编排器 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.lesson = function(lessonId) {
  const user = LL.auth.requireAuth();
  if (!user) return '';

  // 找到课时
  let ctx = null;
  (LL.langList || ['en','ja','ko']).forEach(function(lang) {
    if (!ctx) {
      const c = LL.courses.getLessonContext(lang, lessonId);
      if (c) ctx = c;
    }
  });
  if (!ctx) { LL.router.go('/dashboard'); return ''; }

  const lang = ctx.lang;
  const lesson = ctx.lesson;
  const activities = lesson.activities || [];
  const totalActivities = activities.length;

  let currentActivity = 0;
  let activityResults = [];
  let totalScore = 0;

  function render() {
    if (currentActivity >= totalActivities) {
      // 完成结算
      showResults();
      return;
    }

    const activity = activities[currentActivity];
    let handler = null;
    if (activity.type === 'vocab') handler = LL.modules.vocabActivity(activity, lang, handleComplete);
    else if (activity.type === 'grammar') handler = LL.modules.grammarActivity(activity, lang, handleComplete);
    else if (activity.type === 'listening') handler = LL.modules.listeningActivity(activity, lang, handleComplete);
    else if (activity.type === 'speaking') handler = LL.modules.speakingActivity(activity, lang, handleComplete);
    else if (activity.type === 'media') handler = LL.modules.mediaActivity(activity, lang, handleComplete);

    if (handler && handler.render) {
      handler.render();
    } else {
      // 未知类型，跳过
      currentActivity++;
      render();
    }
  }

  function handleComplete(result) {
    activityResults.push(result);
    totalScore += result.score || 0;
    // 媒体活动额外记录到 mediaRecords
    if (result.type === 'media') {
      var records = LL.store.getRecords(user.id);
      if (!records.mediaRecords) records.mediaRecords = {};
      records.mediaRecords[lessonId] = { score: result.score, ts: Date.now() };
      LL.store.saveRecords(user.id, records);
      LL.gamification.record('media_complete');
      if (result.score >= 100) LL.gamification.record('media_perfect');
    }
    currentActivity++;
    render();
  }

  function showResults() {
    const avgScore = totalActivities > 0 ? Math.round(totalScore / totalActivities) : 0;
    const stars = avgScore >= 90 ? 3 : avgScore >= 60 ? 2 : avgScore >= 30 ? 1 : 0;
    const perfect = avgScore === 100;

    // 记录成绩
    const lessonRecord = {
      progress: 1,
      score: avgScore,
      completed: true,
      xpEarned: lesson.xpReward,
      activityResults: activityResults
    };
    LL.gamification.addLessonRecord(user.id, lessonId, lessonRecord);
    LL.gamification.record('lesson_complete');
    if (perfect) LL.gamification.record('lesson_perfect');

    // 更新每日活动时间
    const records = LL.store.getRecords(user.id);
    const today = LL.utils.todayStr();
    if (!records.dailyActivity[today]) records.dailyActivity[today] = { xp: 0, minutes: 0, lessonsCompleted: 0, cardsReviewed: 0 };
    records.dailyActivity[today].minutes = (records.dailyActivity[today].minutes || 0) + Math.max(5, totalActivities * 3);
    records.dailyActivity[today].xp = (records.dailyActivity[today].xp || 0) + lesson.xpReward;
    LL.store.saveRecords(user.id, records);

    // 检查每日目标
    LL.gamification.record('daily_goal_reached');

    const app = document.getElementById('app');
    const html = '<div class="lesson-player">' +
      '<div class="result-page">' +
        '<div class="mascot celebrate" style="font-size:64px;margin:0">🦜</div>' +
        '<h1 class="fs-2xl fw-extrabold mt-4">' + (perfect ? '满分通关！' : '课时完成') + '</h1>' +
        '<p class="c-soft mt-2">' + LL.utils.escapeHtml(lesson.title) + '</p>' +
        '<div class="result-stars">' +
          [1,2,3].map(function(i) {
            return '<span class="star' + (stars >= i ? ' filled' : '') + '">★</span>';
          }).join('') +
        '</div>' +
        '<div class="result-score">' + avgScore + ' 分</div>' +
        '<div class="xp-display" style="justify-content:center;font-size:20px">+' + lesson.xpReward + ' XP</div>' +
        '<div class="card mt-6" style="text-align:left">' +
          activityResults.map(function(r) {
            const names = { vocab: '单词', grammar: '语法', listening: '听力', speaking: '口语' };
            const icon = r.score >= 80 ? '✓' : r.score >= 50 ? '△' : '✗';
            const color = r.score >= 80 ? 'var(--c-primary)' : r.score >= 50 ? 'var(--c-warn)' : 'var(--c-accent)';
            return '<div class="flex items-center justify-between py-2" style="border-bottom:1px solid var(--c-border-soft)">' +
              '<span>' + icon + ' ' + (names[r.type] || r.type) + '</span>' +
              '<span class="fw-bold" style="color:' + color + '">' + r.score + '分</span>' +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="result-actions">' +
          '<button class="btn btn-primary btn-block btn-lg" id="result-next">继续学习</button>' +
          '<button class="btn btn-ghost btn-block" id="result-home">返回首页</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    app.innerHTML = html;
    LL.ui.confetti(stars >= 2 ? 40 : 15);
    LL.ui.beep(523, 0.15);
    setTimeout(function(){ LL.ui.beep(659, 0.15); }, 150);
    setTimeout(function(){ LL.ui.beep(784, 0.2); }, 300);

    document.getElementById('result-next').addEventListener('click', function() {
      LL.router.go('/courses/' + lang + '/' + ctx.level.id);
    });
    document.getElementById('result-home').addEventListener('click', function() {
      LL.router.go('/dashboard');
    });
  }

  // 启动
  render();
  return null; // 已直接渲染到 #app，返回 null 避免路由清空
};
