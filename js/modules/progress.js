/* ===== LingoGo 进度追踪页 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.progress = function() {
  const user = LL.auth.requireAuth();
  if (!user) return '';

  const records = LL.store.getRecords(user.id);
  const totalLessons = Object.keys(records.lessonRecords || {}).filter(function(id) {
    return records.lessonRecords[id].status === 'completed';
  }).length;
  const totalMinutes = records.totalStats ? records.totalStats.totalMinutes || 0 : 0;

  // 计算实际分钟（从 dailyActivity 汇总）
  let calcMinutes = 0;
  Object.keys(records.dailyActivity || {}).forEach(function(d) {
    calcMinutes += records.dailyActivity[d].minutes || 0;
  });

  // 热力图（最近 90 天）
  const today = new Date();
  const heatCells = [];
  for (let i = 89; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dStr = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
    const act = records.dailyActivity && records.dailyActivity[dStr];
    const min = act ? (act.minutes || 0) : 0;
    let level = 0;
    if (min >= 30) level = 4;
    else if (min >= 20) level = 3;
    else if (min >= 10) level = 2;
    else if (min > 0) level = 1;
    heatCells.push('<div class="heat-cell l' + level + '" title="' + dStr + ': ' + min + '分钟"></div>');
  }

  // 技能雷达图
  const radarSvg = renderRadar(records.skillStats || {}, user.targetLangs || ['en']);

  // 分级完成环
  const langComplete = (user.targetLangs || ['en']).map(function(lang) {
    const course = LL.courses[lang];
    if (!course) return null;
    const total = LL.courses.countLessons(lang);
    let done = 0;
    course.levels.forEach(function(l) { l.units.forEach(function(u) { u.lessons.forEach(function(ls) { if (records.lessonRecords[ls.id] && records.lessonRecords[ls.id].status === 'completed') done++; }); }); });
    return { lang: lang, total: total, done: done };
  }).filter(Boolean);

  const langNames = {};
  (LL.langList || ['en','ja','ko']).forEach(function(l) {
    if (LL.langs && LL.langs[l]) langNames[l] = LL.langs[l].name;
  });
  if (!langNames.en) langNames.en = '英语';
  if (!langNames.ja) langNames.ja = '日语';
  if (!langNames.ko) langNames.ko = '韩语';

  const html = '<div class="page">' +
    '<div class="topbar"><span class="topbar-title">📊 学习进度</span></div>' +
    '<div class="mt-4">' +
      // 数字总览
      '<div class="grid grid-3 mb-6">' +
        '<div class="stat-box"><div class="stat-num" id="num-xp">' + user.xp + '</div><div class="stat-label">总经验</div></div>' +
        '<div class="stat-box"><div class="stat-num" id="num-lessons">' + totalLessons + '</div><div class="stat-label">完成课时</div></div>' +
        '<div class="stat-box"><div class="stat-num" id="num-min">' + calcMinutes + '</div><div class="stat-label">学习分钟</div></div>' +
      '</div>' +

      // 连续天数
      '<div class="card mb-4" style="text-align:center">' +
        '<div class="flex items-center justify-center gap-3">' +
          '<span style="font-size:40px">🔥</span>' +
          '<div><div style="font-size:32px;font-weight:900;color:var(--c-warn)">' + (user.streak ? user.streak.current : 0) + '</div><div class="c-soft">当前连续</div></div>' +
          '<span style="font-size:32px;color:var(--c-text-faint)">|</span>' +
          '<div><div style="font-size:32px;font-weight:900;color:var(--c-gold)">' + (user.streak ? user.streak.longest : 0) + '</div><div class="c-soft">最长连续</div></div>' +
        '</div>' +
      '</div>' +

      // 热力图
      '<h2 class="section-title">学习热力图</h2>' +
      '<div class="card mb-4">' +
        '<div class="heatmap">' + heatCells.join('') + '</div>' +
        '<div class="flex items-center justify-between mt-3" style="font-size:12px;color:var(--c-text-soft)">' +
          '<span>90天前</span>' +
          '<div class="flex items-center gap-2"><span>少</span><div class="heat-cell" style="width:12px;height:12px"></div><div class="heat-cell l1" style="width:12px;height:12px"></div><div class="heat-cell l2" style="width:12px;height:12px"></div><div class="heat-cell l3" style="width:12px;height:12px"></div><div class="heat-cell l4" style="width:12px;height:12px"></div><span>多</span></div>' +
          '<span>今天</span>' +
        '</div>' +
      '</div>' +

      // 技能雷达
      '<h2 class="section-title">技能雷达</h2>' +
      '<div class="card mb-4 radar-container">' + radarSvg + '</div>' +

      // 各语言完成
      '<h2 class="section-title">课程完成</h2>' +
      langComplete.map(function(lp) {
        const pct = lp.total ? Math.round(lp.done / lp.total * 100) : 0;
        return '<div class="card mb-3">' +
          '<div class="flex items-center justify-between mb-2">' +
            '<span class="fw-bold">' + (langNames[lp.lang] || lp.lang) + '</span>' +
            '<span class="c-soft">' + lp.done + '/' + lp.total + '</span>' +
          '</div>' +
          '<div class="progress-bar"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>' +
        '</div>';
      }).join('') +
    '</div>' +
  '</div>';

  return {
    html: html,
    onMount: function() {
      // count-up 动画
      const xpEl = document.getElementById('num-xp');
      const lessonsEl = document.getElementById('num-lessons');
      const minEl = document.getElementById('num-min');
      if (xpEl) LL.utils.countUp(xpEl, user.xp);
      if (lessonsEl) LL.utils.countUp(lessonsEl, totalLessons);
      if (minEl) LL.utils.countUp(minEl, calcMinutes);
    }
  };
};

function renderRadar(skillStats, targetLangs) {
  const skills = ['vocab', 'grammar', 'listening', 'speaking'];
  const skillNames = ['单词', '语法', '听力', '口语'];
  const colors = { en: '#1CB0F6', ja: '#FF4B4B', ko: '#00B8A9' };

  // 取第一个有数据的语言
  let lang = targetLangs[0] || 'en';
  if (!skillStats[lang]) lang = Object.keys(skillStats)[0] || lang;

  const stats = skillStats[lang] || {};
  const cx = 120, cy = 120, r = 80;
  const n = skills.length;

  let svg = '<svg width="240" height="240" viewBox="0 0 240 240">';
  // 背景网格
  for (let ring = 1; ring <= 4; ring++) {
    const rr = r * ring / 4;
    let points = '';
    for (let i = 0; i < n; i++) {
      const angle = -Math.PI / 2 + i * 2 * Math.PI / n;
      const x = cx + Math.cos(angle) * rr;
      const y = cy + Math.sin(angle) * rr;
      points += x + ',' + y + ' ';
    }
    svg += '<polygon points="' + points + '" fill="none" stroke="#e5e5e5" stroke-width="1"/>';
  }
  // 轴线
  for (let i = 0; i < n; i++) {
    const angle = -Math.PI / 2 + i * 2 * Math.PI / n;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '" stroke="#e5e5e5" stroke-width="1"/>';
  }
  // 数据多边形
  let dataPoints = '';
  for (let i = 0; i < n; i++) {
    const angle = -Math.PI / 2 + i * 2 * Math.PI / n;
    const val = stats[skills[i]] || 0;
    const x = cx + Math.cos(angle) * r * val;
    const y = cy + Math.sin(angle) * r * val;
    dataPoints += x + ',' + y + ' ';
  }
  svg += '<polygon points="' + dataPoints + '" fill="' + (colors[lang] || '#1CB0F6') + '" fill-opacity="0.2" stroke="' + (colors[lang] || '#1CB0F6') + '" stroke-width="2"/>';
  // 数据点
  for (let i = 0; i < n; i++) {
    const angle = -Math.PI / 2 + i * 2 * Math.PI / n;
    const val = stats[skills[i]] || 0;
    const x = cx + Math.cos(angle) * r * val;
    const y = cy + Math.sin(angle) * r * val;
    svg += '<circle cx="' + x + '" cy="' + y + '" r="4" fill="' + (colors[lang] || '#1CB0F6') + '"/>';
  }
  // 标签
  for (let i = 0; i < n; i++) {
    const angle = -Math.PI / 2 + i * 2 * Math.PI / n;
    const lx = cx + Math.cos(angle) * (r + 20);
    const ly = cy + Math.sin(angle) * (r + 20);
    svg += '<text x="' + lx + '" y="' + (ly + 4) + '" text-anchor="middle" font-size="14" font-weight="700" fill="#777">' + skillNames[i] + '</text>';
    const val = stats[skills[i]] || 0;
    const vx = cx + Math.cos(angle) * (r + 38);
    const vy = cy + Math.sin(angle) * (r + 38);
    svg += '<text x="' + vx + '" y="' + (vy + 4) + '" text-anchor="middle" font-size="12" fill="#999">' + Math.round(val * 100) + '%</text>';
  }
  svg += '</svg>';
  return svg;
}
