/* ===== LingoGo 分级读物模块（列表 + 详情） =====
 * 路由：#/reading 列表；#/reading/:id 详情
 * 数据：LL.reading.en / LL.reading.ja / LL.reading.ko
 * 进度持久化：records.readingRecords[id] = { completedAt }
 */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.readingList = function() {
  'use strict';
  var user = LL.auth.requireAuth();
  if (!user) return '';

  var records = LL.store.getRecords(user.id);
  var readingRecords = records.readingRecords || {};

  var filterLang = 'all';
  var filterLevel = 'all';

  function getAllBooks() {
    var arr = [];
    var allLangs = LL.langList || ['en', 'ja', 'ko'];
    allLangs.forEach(function(lang) {
      if (LL.reading && LL.reading[lang]) {
        LL.reading[lang].forEach(function(b) { arr.push(b); });
      }
    });
    return arr;
  }

  function getFiltered() {
    return getAllBooks().filter(function(b) {
      if (filterLang !== 'all' && b.lang !== filterLang) return false;
      if (filterLevel !== 'all' && b.level !== filterLevel) return false;
      return true;
    });
  }

  function render() {
    var books = getFiltered();
    var totalRead = Object.keys(readingRecords).length;
    var totalBooks = getAllBooks().length;

    // 语言筛选 chips 从 LL.langs 动态生成
    var langChips = [{ k: 'all', label: '全部' }];
    (LL.langList || ['en','ja','ko']).forEach(function(lang) {
      if (LL.langs && LL.langs[lang]) {
        langChips.push({ k: lang, label: LL.langs[lang].flag + ' ' + LL.langs[lang].name.charAt(0) });
      }
    });
    // 兼容兜底
    if (langChips.length < 4) {
      langChips = [{ k: 'all', label: '全部' }, { k: 'en', label: '🇬🇧 英' }, { k: 'ja', label: '🇯🇵 日' }, { k: 'ko', label: '🇰🇷 韩' }];
    }
    var levelChips = [{ k: 'all', label: '全部' }, { k: 'A1', label: 'A1' }, { k: 'A2', label: 'A2' }, { k: 'B1', label: 'B1' }, { k: 'B2', label: 'B2' }, { k: 'C1', label: 'C1' }];

    var html = '<div class="page reading-page">' +
      '<div class="page-header">' +
        '<h1 class="fs-2xl fw-extrabold">📖 分级读物</h1>' +
        '<p class="c-soft mt-1">按难度挑选，读完标记已读获 25 XP</p>' +
        '<div class="flex gap-4 mt-3">' +
          '<div class="t-center"><div class="fs-xl fw-extrabold c-primary">' + totalRead + '</div><div class="c-faint" style="font-size:11px">已读</div></div>' +
          '<div class="t-center"><div class="fs-xl fw-extrabold">' + totalBooks + '</div><div class="c-faint" style="font-size:11px">可选</div></div>' +
        '</div>' +
      '</div>' +

      // 语言筛选
      '<div class="chips-row mb-3" id="lang-chips">' +
        langChips.map(function(c) {
          return '<button class="chip' + (filterLang === c.k ? ' active' : '') + '" data-lang="' + c.k + '">' + c.label + '</button>';
        }).join('') +
      '</div>' +

      // 难度筛选
      '<div class="chips-row mb-4" id="level-chips">' +
        levelChips.map(function(c) {
          return '<button class="chip' + (filterLevel === c.k ? ' active' : '') + '" data-level="' + c.k + '">' + c.label + '</button>';
        }).join('') +
      '</div>';

    if (books.length === 0) {
      html += '<div class="card t-center py-8"><p class="c-soft">暂无符合条件的读物</p></div>';
    } else {
      html += '<div class="reading-grid">';
      books.forEach(function(b) {
        var read = !!readingRecords[b.id];
        html += '<a class="reading-card" href="#/reading/' + b.id + '">' +
          '<div class="reading-cover" style="background-image:url(\'' + b.cover.replace(/'/g, "\\'") + '\')">' +
            (read ? '<span class="read-badge">✓ 已读</span>' : '') +
          '</div>' +
          '<div class="reading-info">' +
            '<div class="flex items-center gap-2 mb-1">' +
              '<span class="tag" style="background:#fff3e0;color:#FF9600">' + (b.levelRaw || b.level) + '</span>' +
              '<span class="c-faint" style="font-size:11px">⏱ ' + b.duration + '分</span>' +
            '</div>' +
            '<h3 class="reading-title">' + LL.utils.escapeHtml(b.title) + '</h3>' +
            '<p class="reading-title-zh c-soft">' + LL.utils.escapeHtml(b.titleZh || '') + '</p>' +
            '<p class="c-faint" style="font-size:11px">' + LL.utils.escapeHtml(b.author || '') + '</p>' +
          '</div>' +
        '</a>';
      });
      html += '</div>';
    }

    html += '</div>';

    // 注入样式（首次）
    injectStyles();

    var app = document.getElementById('app');
    app.innerHTML = html;

    // 绑定筛选
    document.querySelectorAll('#lang-chips .chip').forEach(function(btn) {
      btn.addEventListener('click', function() {
        filterLang = this.getAttribute('data-lang');
        render();
      });
    });
    document.querySelectorAll('#level-chips .chip').forEach(function(btn) {
      btn.addEventListener('click', function() {
        filterLevel = this.getAttribute('data-level');
        render();
      });
    });
  }

  function injectStyles() {
    if (document.getElementById('reading-style')) return;
    var css = '' +
      '.reading-page { padding:16px; }' +
      '.chips-row { display:flex; gap:8px; flex-wrap:wrap; }' +
      '.chip { padding:6px 14px; border-radius:16px; border:1px solid var(--c-border); background:#fff; color:var(--c-text-soft); font-size:13px; cursor:pointer; }' +
      '.chip.active { background:var(--c-primary); color:#fff; border-color:var(--c-primary); }' +
      '.reading-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:14px; }' +
      '.reading-card { display:block; background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,.06); text-decoration:none; color:inherit; transition:transform .2s; }' +
      '.reading-card:active { transform:scale(.98); }' +
      '.reading-cover { position:relative; aspect-ratio:1; background-size:cover; background-position:center; background-color:#f5f5f5; }' +
      '.read-badge { position:absolute; top:8px; right:8px; background:#58CC02; color:#fff; font-size:10px; padding:3px 8px; border-radius:10px; }' +
      '.reading-info { padding:10px 12px; }' +
      '.reading-title { font-size:13px; font-weight:700; line-height:1.3; margin-bottom:2px; }' +
      '.reading-title-zh { font-size:12px; }' +
      '.reading-detail { padding:16px; }' +
      '.reading-detail-cover { width:200px; height:200px; background-size:cover; background-position:center; border-radius:14px; margin:0 auto; }' +
      '.reading-keywords { display:flex; gap:6px; flex-wrap:wrap; }' +
      '.reading-keyword { font-size:11px; padding:3px 8px; background:#f0f0f0; border-radius:8px; color:var(--c-text-soft); }';
    var s = document.createElement('style');
    s.id = 'reading-style';
    s.textContent = css;
    document.head.appendChild(s);
  }

  render();
  return null;
};

LL.modules.readingDetail = function(id) {
  'use strict';
  var user = LL.auth.requireAuth();
  if (!user) return '';

  // 查找读物（遍历所有支持的语言）
  var book = null;
  var allLangs = LL.langList || ['en', 'ja', 'ko'];
  allLangs.forEach(function(lang) {
    if (!book && LL.reading && LL.reading[lang]) {
      var found = LL.reading[lang].filter(function(b) { return b.id === id; })[0];
      if (found) book = found;
    }
  });
  if (!book) {
    LL.router.go('/reading');
    return '';
  }

  var records = LL.store.getRecords(user.id);
  if (!records.readingRecords) records.readingRecords = {};
  var isRead = !!records.readingRecords[id];

  function render() {
    isRead = !!(records.readingRecords && records.readingRecords[id]);
    var html = '<div class="page reading-detail">' +
      '<div class="flex items-center mb-4">' +
        '<a href="#/reading" class="back-link">← 返回</a>' +
      '</div>' +

      '<div class="reading-detail-cover" style="background-image:url(\'' + book.cover.replace(/'/g, "\\'") + '\')"></div>' +

      '<div class="t-center mt-4">' +
        '<h1 class="fs-xl fw-extrabold">' + LL.utils.escapeHtml(book.title) + '</h1>' +
        (book.titleZh ? '<p class="c-soft mt-1">' + LL.utils.escapeHtml(book.titleZh) + '</p>' : '') +
        '<p class="c-faint mt-1" style="font-size:12px">' + LL.utils.escapeHtml(book.author || '') + '</p>' +
        '<div class="flex gap-2 justify-center mt-3">' +
          '<span class="tag" style="background:#fff3e0;color:#FF9600">' + (book.levelRaw || book.level) + ' · ' + book.level + '</span>' +
          '<span class="c-faint" style="align-self:center;font-size:12px">⏱ ' + book.duration + ' 分钟</span>' +
        '</div>' +
      '</div>' +

      '<div class="card mt-6">' +
        '<h3 class="fw-bold mb-2">内容简介</h3>' +
        '<p class="c-soft" style="line-height:1.6">' + LL.utils.escapeHtml(book.summary) + '</p>' +
      '</div>';

    if (book.keywords && book.keywords.length) {
      html += '<div class="reading-keywords mt-4">' +
        '<span class="c-faint" style="font-size:12px;align-self:center">关键词：</span>' +
        book.keywords.map(function(k) {
          return '<span class="reading-keyword">' + LL.utils.escapeHtml(k) + '</span>';
        }).join('') +
      '</div>';
    }

    html += '<div class="flex flex-col gap-3 mt-6">' +
      '<a href="' + book.url + '" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-block">📖 在线阅读</a>';

    if (book.relatedLessonId) {
      html += '<a href="#/lesson/' + book.relatedLessonId + '" class="btn btn-block" style="background:#fff3e0;color:#FF9600">🔗 关联课时</a>';
    }

    html += '<button class="btn btn-block btn-lg" id="mark-read" ' + (isRead ? 'disabled style="background:#e8f5e0;color:#58CC02"' : '') + '>' +
        (isRead ? '✓ 已读' : '标记已读（+25 XP）') +
      '</button>' +
    '</div>';

    html += '</div>';

    var app = document.getElementById('app');
    app.innerHTML = html;

    var markBtn = document.getElementById('mark-read');
    if (markBtn && !isRead) {
      markBtn.addEventListener('click', function() {
        records.readingRecords[id] = { completedAt: Date.now() };
        LL.store.saveRecords(user.id, records);
        LL.gamification.record('reading_complete');
        LL.ui.toast('已标记为已读 +25 XP', 'success');
        LL.ui.confetti(20);
        render();
      });
    }
  }

  render();
  return null;
};
