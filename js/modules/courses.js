/* ===== LingoGo 课程体系 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.coursesLang = function() {
  const user = LL.auth.requireAuth();
  if (!user) return '';

  // 语言元数据统一从 LL.langs 读取，未加载时回退到旧硬编码
  const langNames = {};
  const langEmojis = {};
  const langSubs = {};
  const langs = LL.langList || ['en', 'ja', 'ko'];
  langs.forEach(function(lang) {
    if (LL.langs && LL.langs[lang]) {
      langNames[lang] = LL.langs[lang].name;
      langEmojis[lang] = LL.langs[lang].flag;
      langSubs[lang] = LL.langs[lang].sub;
    }
  });
  // 兼容兜底（langs.js 未加载时）
  if (!langNames.en) { langNames.en = '英语'; langEmojis.en = '🇬🇧'; langSubs.en = 'English'; }
  if (!langNames.ja) { langNames.ja = '日语'; langEmojis.ja = '🇯🇵'; langSubs.ja = '日本語'; }
  if (!langNames.ko) { langNames.ko = '韩语'; langEmojis.ko = '🇰🇷'; langSubs.ko = '한국어'; }

  const records = LL.store.getRecords(user.id);

  const html = '<div class="page">' +
    '<div class="topbar"><span class="topbar-title">📚 选择语言</span></div>' +
    '<div class="grid grid-1 gap-4 mt-4" style="display:flex;flex-direction:column;gap:16px">' +
      langs.map(function(lang) {
        const course = LL.courses[lang];
        if (!course) return '';
        const total = LL.courses.countLessons(lang);
        let done = 0;
        course.levels.forEach(function(l) { l.units.forEach(function(u) { u.lessons.forEach(function(ls) { if (records.lessonRecords[ls.id] && records.lessonRecords[ls.id].status === 'completed') done++; }); }); });
        const pct = total ? Math.round(done / total * 100) : 0;
        return '<a href="#/courses/' + lang + '" class="lang-card ' + lang + '">' +
          '<div class="flex items-center gap-3">' +
            '<div class="lang-flag">' + langEmojis[lang] + '</div>' +
            '<div><div class="lang-name">' + langNames[lang] + '</div><div class="lang-sub">' + langSubs[lang] + '</div></div>' +
          '</div>' +
          '<div style="text-align:right"><div style="font-size:24px;font-weight:900">' + done + '/' + total + '</div><div style="font-size:12px;opacity:.9">' + pct + '%</div></div>' +
        '</a>';
      }).join('') +
    '</div>' +
  '</div>';

  return { html: html };
};

LL.modules.coursesLevel = function(lang) {
  const user = LL.auth.requireAuth();
  if (!user) return '';
  const course = LL.courses[lang];
  if (!course) { LL.router.go('/courses'); return ''; }

  const records = LL.store.getRecords(user.id);

  const html = '<div class="page">' +
    '<div class="topbar">' +
      '<a href="#/courses" class="topbar-left"><span class="topbar-title" style="font-size:24px">←</span></a>' +
      '<span class="topbar-title">' + course.flag + ' ' + course.label + '</span>' +
      '<span></span>' +
    '</div>' +
    '<div class="mt-4" style="display:flex;flex-direction:column;gap:16px">' +
      course.levels.map(function(level) {
        let total = 0, done = 0;
        level.units.forEach(function(u) { u.lessons.forEach(function(ls) { total++; if (records.lessonRecords[ls.id] && records.lessonRecords[ls.id].status === 'completed') done++; }); });
        const pct = total ? Math.round(done / total * 100) : 0;
        // 级别解锁：首级别默认解锁，其他级别需上一级别有完成课时
        let prevDone = 0;
        if (course.levels.indexOf(level) > 0) {
          const prev = course.levels[course.levels.indexOf(level) - 1];
          prev.units.forEach(function(u) { u.lessons.forEach(function(ls) { if (records.lessonRecords[ls.id] && records.lessonRecords[ls.id].status === 'completed') prevDone++; }); });
        }
        const unlocked = level.id === course.levels[0].id || done > 0 || prevDone > 0;
        return '<a href="#/courses/' + lang + '/' + level.id + '" class="level-card' + (unlocked ? '' : ' locked') + '">' +
          '<div class="level-code" style="background:' + (unlocked ? course.themeColor : '#ccc') + '">' + level.code + '</div>' +
          '<h3 class="fw-bold fs-xl">' + level.name + '</h3>' +
          '<p class="c-soft" style="font-size:13px">' + level.description + '</p>' +
          '<div class="flex items-center justify-between mt-4">' +
            '<span class="c-soft" style="font-size:13px">' + done + '/' + total + ' 课时</span>' +
            '<div class="progress-bar" style="flex:1;margin:0 16px"><div class="progress-bar-fill" style="width:' + pct + '%;background:' + course.themeColor + '"></div></div>' +
            '<span class="fw-bold" style="color:' + course.themeColor + '">' + pct + '%</span>' +
          '</div>' +
        '</a>';
      }).join('') +
    '</div>' +
  '</div>';

  return { html: html };
};

LL.modules.coursesUnit = function(lang, levelId) {
  const user = LL.auth.requireAuth();
  if (!user) return '';
  const course = LL.courses[lang];
  if (!course) { LL.router.go('/courses'); return ''; }
  const level = course.levels.find(function(l) { return l.id === levelId; });
  if (!level) { LL.router.go('/courses/' + lang); return ''; }

  const records = LL.store.getRecords(user.id);

  const html = '<div class="page">' +
    '<div class="topbar">' +
      '<a href="#/courses/' + lang + '" class="topbar-left"><span class="topbar-title" style="font-size:24px">←</span></a>' +
      '<span class="topbar-title">' + course.flag + ' ' + level.name + '</span>' +
      '<span></span>' +
    '</div>' +
    '<div class="mt-4">' +
      level.units.map(function(unit, unitIdx) {
        let unitDone = 0;
        unit.lessons.forEach(function(ls) { if (records.lessonRecords[ls.id] && records.lessonRecords[ls.id].status === 'completed') unitDone++; });
        return '<div class="mb-6">' +
          '<div class="flex items-center gap-3 mb-4">' +
            '<div class="unit-icon" style="background:' + (unit.color || course.themeColor) + '">' + (unit.icon === 'wave' ? '👋' : unit.icon === 'number' ? '🔢' : unit.icon === 'family' ? '👨‍👩‍👧' : unit.icon === 'cart' ? '🛒' : unit.icon === 'plane' ? '✈️' : unit.icon === 'kana' ? 'あ' : unit.icon === 'intro' ? '🙋' : unit.icon === 'korean' ? 'ㅏ' : '📖') + '</div>' +
            '<div><h3 class="fw-bold fs-xl">' + unit.title + '</h3><p class="c-soft" style="font-size:13px">' + unit.subtitle + ' · ' + unitDone + '/' + unit.lessons.length + '</p></div>' +
          '</div>' +
          unit.lessons.map(function(ls, lsIdx) {
            const rec = records.lessonRecords[ls.id];
            const completed = rec && rec.status === 'completed';
            const inProgress = rec && rec.status === 'in-progress';
            const locked = ls.requires && ls.requires.length > 0 && !ls.requires.every(function(r) { return records.lessonRecords[r] && records.lessonRecords[r].status === 'completed'; });
            const stars = completed && rec.bestScore ? (rec.bestScore >= 90 ? 3 : rec.bestScore >= 60 ? 2 : 1) : 0;
            return '<a href="' + (locked ? 'javascript:void(0)' : '#/lesson/' + ls.id) + '" class="lesson-item' + (completed ? ' completed' : '') + (locked ? ' locked' : '') + '">' +
              '<div class="lesson-num">' + (locked ? '🔒' : completed ? '✓' : (lsIdx + 1)) + '</div>' +
              '<div class="flex-1">' +
                '<div class="fw-bold">' + ls.title + '</div>' +
                '<div class="c-soft" style="font-size:12px">' + ls.description + '</div>' +
              '</div>' +
              (completed ? '<div class="stars">' +
                '<span class="star' + (stars >= 1 ? ' filled' : '') + '">★</span>' +
                '<span class="star' + (stars >= 2 ? ' filled' : '') + '">★</span>' +
                '<span class="star' + (stars >= 3 ? ' filled' : '') + '">★</span>' +
              '</div>' : '<span class="c-faint">›</span>') +
            '</a>';
          }).join('') +
        '</div>';
      }).join('') +
    '</div>' +
  '</div>';

  return { html: html };
};
