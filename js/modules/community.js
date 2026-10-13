/* ===== LingoGo 社区 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.communityList = function() {
  const user = LL.auth.requireAuth();
  if (!user) return '';

  const community = LL.store.getCommunity();
  const posts = (community.posts || []).slice().sort(function(a, b) { return b.createdAt - a.createdAt; });

  const catLabels = { all: '全部', question: '提问', share: '分享', checkin: '打卡', tips: '经验' };
  const langLabels = { en: '英语', ja: '日语', ko: '韩语', '': '综合' };

  const html = '<div class="page">' +
    '<div class="topbar">' +
      '<span class="topbar-title">💬 社区</span>' +
      '<a href="#/community/new" class="btn btn-primary btn-sm">发帖</a>' +
    '</div>' +
    '<div class="tabs mt-4" id="cat-tabs">' +
      Object.keys(catLabels).map(function(c) {
        return '<span class="tab-item' + (c === 'all' ? ' active' : '') + '" data-cat="' + c + '">' + catLabels[c] + '</span>';
      }).join('') +
    '</div>' +
    '<div id="post-list" class="mt-4">' +
      renderPosts(posts, 'all') +
    '</div>' +
  '</div>';

  return {
    html: html,
    onMount: function() {
      let currentCat = 'all';
      document.getElementById('cat-tabs').addEventListener('click', function(e) {
        const tab = e.target.closest('.tab-item');
        if (!tab) return;
        currentCat = tab.getAttribute('data-cat');
        document.querySelectorAll('#cat-tabs .tab-item').forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        document.getElementById('post-list').innerHTML = renderPosts(posts, currentCat);
        bindPostClicks();
      });
      bindPostClicks();
    }
  };

  function bindPostClicks() {
    document.querySelectorAll('.post-card').forEach(function(card) {
      card.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        LL.router.go('/community/' + id);
      });
    });
  }
};

function renderPosts(posts, cat) {
  const filtered = cat === 'all' ? posts : posts.filter(function(p) { return p.category === cat; });
  if (filtered.length === 0) {
    return '<div class="empty-state"><div class="empty-icon">📝</div><p>还没有帖子</p><a href="#/community/new" class="btn btn-primary btn-sm mt-4">来发第一条</a></div>';
  }
  return filtered.map(function(p) {
    const avatar = p.avatar === 'parrot' ? '🦜' : LL.auth.getAvatarEmoji(p.avatar);
    const langBadge = p.lang ? '<span class="lang-badge ' + p.lang + '">' + (p.lang === 'en' ? 'EN' : p.lang === 'ja' ? 'JA' : 'KO') + '</span>' : '';
    return '<div class="post-card" data-id="' + p.id + '">' +
      '<div class="post-header">' +
        '<div class="avatar avatar-sm">' + avatar + '</div>' +
        '<div><div class="fw-bold">' + LL.utils.escapeHtml(p.username) + '</div><div class="c-faint" style="font-size:12px">' + LL.utils.formatTime(p.createdAt) + '</div></div>' +
        (langBadge ? '<span style="margin-left:auto">' + langBadge + '</span>' : '') +
      '</div>' +
      '<div class="post-title">' + LL.utils.escapeHtml(p.title) + '</div>' +
      '<div class="post-content">' + LL.utils.escapeHtml(p.content.length > 80 ? p.content.slice(0, 80) + '...' : p.content) + '</div>' +
      '<div class="post-footer">' +
        '<span>👍 ' + (p.likes ? p.likes.length : 0) + '</span>' +
        '<span>💬 ' + (p.comments ? p.comments.length : 0) + '</span>' +
      '</div>' +
    '</div>';
  }).join('');
}

LL.modules.communityDetail = function(postId) {
  const user = LL.auth.requireAuth();
  if (!user) return '';

  const community = LL.store.getCommunity();
  const post = (community.posts || []).find(function(p) { return p.id === postId; });
  if (!post) { LL.router.go('/community'); return ''; }

  function render() {
    const avatar = post.avatar === 'parrot' ? '🦜' : LL.auth.getAvatarEmoji(post.avatar);
    const liked = post.likes && post.likes.indexOf(user.id) >= 0;

    const html = '<div class="page">' +
      '<div class="topbar">' +
        '<a href="#/community" class="topbar-left"><span style="font-size:24px">←</span></a>' +
        '<span class="topbar-title">帖子详情</span>' +
        '<span></span>' +
      '</div>' +
      '<div class="mt-4">' +
        '<div class="card mb-4">' +
          '<div class="post-header">' +
            '<div class="avatar avatar-sm">' + avatar + '</div>' +
            '<div><div class="fw-bold">' + LL.utils.escapeHtml(post.username) + '</div><div class="c-faint" style="font-size:12px">' + LL.utils.formatTime(post.createdAt) + '</div></div>' +
          '</div>' +
          '<h2 class="post-title mt-3">' + LL.utils.escapeHtml(post.title) + '</h2>' +
          '<div class="post-content">' + LL.utils.escapeHtml(post.content).replace(/\n/g, '<br>') + '</div>' +
          '<div class="post-footer mt-4">' +
            '<button class="btn ' + (liked ? 'btn-danger' : 'btn-ghost') + ' btn-sm" id="like-btn">👍 ' + (post.likes ? post.likes.length : 0) + '</button>' +
          '</div>' +
        '</div>' +

        '<h3 class="fw-bold mb-4">评论 (' + (post.comments ? post.comments.length : 0) + ')</h3>' +
        '<div id="comment-list">' +
          (post.comments && post.comments.length > 0 ?
            post.comments.map(function(c) {
              const cAvatar = c.avatar === 'parrot' ? '🦜' : LL.auth.getAvatarEmoji(c.avatar);
              return '<div class="comment-item">' +
                '<div class="comment-header">' +
                  '<div class="avatar avatar-sm">' + cAvatar + '</div>' +
                  '<span class="fw-bold" style="font-size:14px">' + LL.utils.escapeHtml(c.username) + '</span>' +
                  '<span class="c-faint" style="font-size:12px">' + LL.utils.formatTime(c.ts) + '</span>' +
                '</div>' +
                '<p style="font-size:14px;margin-left:36px">' + LL.utils.escapeHtml(c.content) + '</p>' +
              '</div>';
            }).join('')
            : '<p class="c-soft t-center">还没有评论</p>'
          ) +
        '</div>' +
        '<div class="mt-4">' +
          '<textarea class="textarea" id="comment-input" placeholder="写下你的评论..." rows="3"></textarea>' +
          '<button class="btn btn-primary btn-block mt-2" id="comment-submit">发表评论</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    document.getElementById('app').innerHTML = html;

    document.getElementById('like-btn').addEventListener('click', function() {
      if (!post.likes) post.likes = [];
      const idx = post.likes.indexOf(user.id);
      if (idx >= 0) {
        post.likes.splice(idx, 1);
      } else {
        post.likes.push(user.id);
        if (post.userId !== user.id) {
          LL.gamification.record('receive_like');
        }
      }
      LL.store.saveCommunity();
      render();
    });

    document.getElementById('comment-submit').addEventListener('click', function() {
      const content = document.getElementById('comment-input').value.trim();
      if (!content) { LL.ui.toast('请输入评论内容', 'warn'); return; }
      if (content.length > 500) { LL.ui.toast('评论最多 500 字', 'warn'); return; }
      if (!post.comments) post.comments = [];
      if (post.comments.length >= 50) { LL.ui.toast('该帖子评论已达上限', 'warn'); return; }
      post.comments.push({
        id: (post.comments.length + 1),
        userId: user.id,
        username: user.username,
        avatar: user.avatar,
        content: content,
        ts: Date.now()
      });
      LL.store.saveCommunity();
      LL.gamification.record('comment_create');
      LL.ui.toast('评论成功', 'success');
      render();
    });
  }

  render();
  return null; // 已直接渲染到 #app，返回 null 避免路由清空
};

LL.modules.communityNew = function() {
  const user = LL.auth.requireAuth();
  if (!user) return '';

  const html = '<div class="page">' +
    '<div class="topbar">' +
      '<a href="#/community" class="topbar-left"><span style="font-size:24px">←</span></a>' +
      '<span class="topbar-title">发帖</span>' +
      '<span></span>' +
    '</div>' +
    '<div class="mt-4 page-narrow">' +
      '<div class="field">' +
        '<label class="field-label">标题</label>' +
        '<input class="input" id="post-title-input" placeholder="输入标题" maxlength="50">' +
      '</div>' +
      '<div class="field">' +
        '<label class="field-label">语种</label>' +
        '<div class="tabs" id="lang-tabs">' +
          '<span class="tab-item active" data-lang="">综合</span>' +
          '<span class="tab-item" data-lang="en">英语</span>' +
          '<span class="tab-item" data-lang="ja">日语</span>' +
          '<span class="tab-item" data-lang="ko">韩语</span>' +
        '</div>' +
      '</div>' +
      '<div class="field">' +
        '<label class="field-label">分类</label>' +
        '<div class="tabs" id="cat-tabs2">' +
          '<span class="tab-item active" data-cat="share">分享</span>' +
          '<span class="tab-item" data-cat="question">提问</span>' +
          '<span class="tab-item" data-cat="checkin">打卡</span>' +
          '<span class="tab-item" data-cat="tips">经验</span>' +
        '</div>' +
      '</div>' +
      '<div class="field">' +
        '<label class="field-label">内容</label>' +
        '<textarea class="textarea" id="post-content-input" placeholder="说点什么..." rows="6" maxlength="2000"></textarea>' +
      '</div>' +
      '<button class="btn btn-primary btn-block btn-lg" id="post-submit">发布</button>' +
    '</div>' +
  '</div>';

  let selectedLang = '';
  let selectedCat = 'share';

  return {
    html: html,
    onMount: function() {
      document.getElementById('lang-tabs').addEventListener('click', function(e) {
        const tab = e.target.closest('.tab-item');
        if (!tab) return;
        selectedLang = tab.getAttribute('data-lang');
        document.querySelectorAll('#lang-tabs .tab-item').forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
      });
      document.getElementById('cat-tabs2').addEventListener('click', function(e) {
        const tab = e.target.closest('.tab-item');
        if (!tab) return;
        selectedCat = tab.getAttribute('data-cat');
        document.querySelectorAll('#cat-tabs2 .tab-item').forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
      });
      document.getElementById('post-submit').addEventListener('click', function() {
        const title = document.getElementById('post-title-input').value.trim();
        const content = document.getElementById('post-content-input').value.trim();
        if (!title) { LL.ui.toast('请输入标题', 'warn'); return; }
        if (!content) { LL.ui.toast('请输入内容', 'warn'); return; }

        // 防滥用：每日发帖限制
        const community = LL.store.getCommunity();
        const today = LL.utils.todayStr();
        const todayCount = (community.posts || []).filter(function(p) {
          return p.userId === user.id && LL.utils.dateStr(p.createdAt) === today;
        }).length;
        if (todayCount >= 5) { LL.ui.toast('今日发帖已达上限（5条）', 'warn'); return; }

        const post = {
          id: community.nextPostId++,
          userId: user.id,
          username: user.username,
          avatar: user.avatar,
          lang: selectedLang,
          category: selectedCat,
          title: title,
          content: content,
          tags: [],
          likes: [],
          comments: [],
          createdAt: Date.now(),
          updatedAt: Date.now()
        };
        community.posts.push(post);
        LL.store.saveCommunity();
        LL.gamification.record('post_create');
        LL.ui.toast('发布成功！', 'success');
        LL.router.go('/community/' + post.id);
      });
    }
  };
};
