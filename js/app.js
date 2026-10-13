/* ===== LingoGo 主入口 · UI 工具 + 路由注册 + tabbar ===== */
window.LL = window.LL || {};

/* ===== LL.ui · UI 工具集 ===== */
LL.ui = (function() {
  'use strict';

  /* Toast */
  function toast(msg, type) {
    type = type || 'info';
    const root = document.querySelector('.toast-root');
    if (!root) return;
    const el = document.createElement('div');
    el.className = 'toast ' + type;
    el.textContent = msg;
    root.appendChild(el);
    setTimeout(function() {
      el.style.opacity = '0';
      el.style.transform = 'translateY(-10px)';
      el.style.transition = 'all .3s';
      setTimeout(function() { el.remove(); }, 300);
    }, 2500);
  }

  /* 模态框 */
  function modal(html) {
    const root = document.querySelector('.modal-root');
    if (!root) return;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    const box = document.createElement('div');
    box.className = 'modal-box';
    box.innerHTML = html;
    root.innerHTML = '';
    root.appendChild(overlay);
    root.appendChild(box);
    root.classList.add('show');
    overlay.addEventListener('click', hideModal);
    return box;
  }

  function hideModal() {
    const root = document.querySelector('.modal-root');
    if (root) {
      root.classList.remove('show');
      root.innerHTML = '';
    }
  }

  /* 撒花 */
  function confetti(count) {
    count = count || 30;
    const root = document.querySelector('.confetti-root');
    if (!root) return;
    const colors = ['#58CC02', '#1CB0F6', '#FF4B4B', '#FFC800', '#FF9600', '#8B5CF6'];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (1 + Math.random() * 1.5) + 's';
      piece.style.animationDelay = (Math.random() * 0.3) + 's';
      piece.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
      root.appendChild(piece);
      setTimeout(function() { piece.remove(); }, 3000);
    }
  }

  /* 音效 */
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (e) { return null; }
    }
    return audioCtx;
  }

  function beep(freq, dur, type) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const user = LL.store.getCurrentUser();
    if (user && user.settings && !user.settings.sound) return;
    freq = freq || 880;
    dur = dur || 0.1;
    type = type || 'sine';
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    o.connect(g);
    g.connect(ctx.destination);
    g.gain.setValueAtTime(0.2, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.start();
    o.stop(ctx.currentTime + dur);
  }

  function correctSound() { beep(880, 0.1, 'sine'); setTimeout(function(){ beep(1320, 0.12, 'sine'); }, 80); }
  function wrongSound() { beep(220, 0.2, 'sawtooth'); }
  function levelUpSound() {
    beep(523, 0.1);
    setTimeout(function(){ beep(659, 0.1); }, 100);
    setTimeout(function(){ beep(784, 0.1); }, 200);
    setTimeout(function(){ beep(1047, 0.2); }, 300);
  }

  /* XP 飘字 */
  function flyXp(amount) {
    if (amount <= 0) return;
    const el = document.createElement('div');
    el.className = 'xp-fly';
    el.textContent = '+' + amount + ' XP';
    const x = window.innerWidth / 2 + (Math.random() * 60 - 30);
    const y = 100;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(function() { el.remove(); }, 1000);
  }

  /* 庆祝徽章 */
  function celebrateBadge(badge) {
    confetti(40);
    const html = '<div class="t-center">' +
      '<div style="font-size:64px;animation:bounceIn .5s var(--ease-bounce)">' + badge.icon + '</div>' +
      '<h2 class="fs-2xl fw-extrabold mt-4">' + LL.utils.escapeHtml(badge.name) + '</h2>' +
      '<p class="c-soft mt-2">' + LL.utils.escapeHtml(badge.desc) + '</p>' +
      '<p class="xp-display mt-4">+' + badge.xpReward + ' XP · +' + badge.coinsReward + ' 金币</p>' +
      '<button class="btn btn-primary btn-block mt-6" onclick="LL.ui.hideModal()">太棒了！</button>' +
      '</div>';
    modal(html);
    levelUpSound();
  }

  /* 庆祝升级 */
  function celebrateLevel(oldLevel, newLevel) {
    confetti(60);
    const html = '<div class="t-center">' +
      '<div style="font-size:64px">🎉</div>' +
      '<h2 class="fs-2xl fw-extrabold mt-4">升级了！</h2>' +
      '<p class="c-soft mt-2">等级 ' + oldLevel + ' → ' + newLevel + '</p>' +
      '<button class="btn btn-primary btn-block mt-6" onclick="LL.ui.hideModal()">继续加油</button>' +
      '</div>';
    setTimeout(function() { modal(html); levelUpSound(); }, 500);
  }

  /* 渲染 tabbar */
  function renderTabbar() {
    const tabbar = document.querySelector('#tabbar');
    if (!tabbar) return;
    const items = [
      { route: '/dashboard', icon: '🏠', label: '首页' },
      { route: '/courses', icon: '📚', label: '课程' },
      { route: '/community', icon: '💬', label: '社区' },
      { route: '/achievements', icon: '🏆', label: '成就' },
      { route: '/profile', icon: '👤', label: '我的' }
    ];
    tabbar.innerHTML = items.map(function(it) {
      return '<a class="tabbar-item" data-route="' + it.route + '" href="#' + it.route + '">' +
        '<span class="tab-icon">' + it.icon + '</span>' +
        '<span>' + it.label + '</span>' +
        '</a>';
    }).join('');
    tabbar.classList.remove('hidden');
  }

  function hideTabbar() {
    const tabbar = document.querySelector('#tabbar');
    if (tabbar) tabbar.classList.add('hidden');
  }

  return {
    toast: toast,
    modal: modal,
    hideModal: hideModal,
    confetti: confetti,
    beep: beep,
    correctSound: correctSound,
    wrongSound: wrongSound,
    levelUpSound: levelUpSound,
    flyXp: flyXp,
    celebrateBadge: celebrateBadge,
    celebrateLevel: celebrateLevel,
    renderTabbar: renderTabbar,
    hideTabbar: hideTabbar
  };
})();

/* ===== LL.app · 主应用初始化 ===== */
LL.app = (function() {
  'use strict';

  function init() {
    // 加载数据
    LL.store.load();
    // 给每个课时追加 media 活动（运行时注入，保持数据文件干净）
    enhanceLessonsWithMedia();
    // 初始化社区种子
    LL.seed.initCommunity();
    // 预热语音
    if (LL.speech.isSynthesisSupported()) LL.speech.loadVoices();

    // 路由守卫：根据登录状态和页面类型控制 tabbar
    LL.router.beforeEach(function(hash) {
      const user = LL.store.getCurrentUser();
      const publicPaths = ['/login', '/register'];
      // 课时播放器与读物详情页隐藏 tabbar
      const isLesson = hash.startsWith('/lesson/') || hash.startsWith('/reading/');
      if (user && publicPaths.indexOf(hash) < 0 && !isLesson) {
        LL.ui.renderTabbar();
      } else {
        LL.ui.hideTabbar();
      }
    });

    registerRoutes();

    // 启动
    LL.router.init();
  }

  /* 给每个课时追加一个 media 活动
   * videoId 用占位符，部署前可批量替换为真实 YouTube ID；
   * 即使占位无法加载，media.js 的 TTS 兜底仍可让用户完成跟读/默写。
   */
  function enhanceLessonsWithMedia() {
    (LL.langList || ['en','ja','ko']).forEach(function(lang) {
      var course = LL.courses && LL.courses[lang];
      if (!course || !course.levels) return;
      course.levels.forEach(function(level) {
        if (!level.units) return;
        level.units.forEach(function(unit) {
          if (!unit.lessons) return;
          unit.lessons.forEach(function(lesson) {
            if (!lesson.activities) lesson.activities = [];
            // 已有 media 活动则跳过
            var has = lesson.activities.some(function(a) { return a && a.type === 'media'; });
            if (has) return;
            // 取 speaking 第一个 target 作为跟读目标
            var sp = lesson.activities.find(function(a) { return a && a.type === 'speaking'; });
            var target = (sp && sp.prompts && sp.prompts[0]) ? sp.prompts[0].target : lesson.title;
            // 取 listening 的 audio 作为 transcript
            var li = lesson.activities.find(function(a) { return a && a.type === 'listening'; });
            var transcript = (li && li.audio) ? li.audio : (sp && sp.prompts && sp.prompts[0] ? sp.prompts[0].target : lesson.title);
            // 按句切分 segments（支持中英日韩标点）
            var sentences = transcript.split(/(?<=[.!?\u3002\uFF01\uFF1F])\s+/).filter(function(s) { return s.trim(); });
            if (sentences.length === 0) sentences = [transcript];
            var segments = [];
            var t = 0;
            sentences.forEach(function(s) {
              var dur = Math.max(2, s.length * 0.4);
              segments.push({ start: Math.round(t * 10) / 10, end: Math.round((t + dur) * 10) / 10, text: s.trim() });
              t += dur + 0.5;
            });
            lesson.activities.push({
              type: 'media',
              videoId: 'LL_' + lesson.id,
              source: 'Auto-generated · 可在 js/app.js 替换为真实 YouTube ID',
              title: lesson.title,
              level: level.code || 'A1',
              transcript: transcript,
              segments: segments,
              target: target,
              ttsFallback: true
            });
          });
        });
      });
    });
  }

  function registerRoutes() {
    const R = LL.router;

    // 认证
    R.add(/^\/login$/, function() { return LL.authView ? LL.authView.login() : LL.modules.login(); });
    R.add(/^\/register$/, function() { return LL.authView ? LL.authView.register() : LL.modules.register(); });

    // Dashboard
    R.add(/^\/dashboard$/, function() { return LL.modules.dashboard(); });

    // 课程
    R.add(/^\/courses$/, function() { return LL.modules.coursesLang(); });
    R.add(/^\/courses\/([\w-]+)$/, function(lang) { return LL.modules.coursesLevel(lang); });
    R.add(/^\/courses\/([\w-]+)\/([\w-]+)$/, function(lang, levelId) { return LL.modules.coursesUnit(lang, levelId); });

    // 课时
    R.add(/^\/lesson\/([\w-]+)$/, function(lessonId) { return LL.modules.lesson(lessonId); });

    // 进度
    R.add(/^\/progress$/, function() { return LL.modules.progress(); });

    // 社区
    R.add(/^\/community$/, function() { return LL.modules.communityList(); });
    R.add(/^\/community\/new$/, function() { return LL.modules.communityNew(); });
    R.add(/^\/community\/(\d+)$/, function(postId) { return LL.modules.communityDetail(parseInt(postId, 10)); });

    // 成就
    R.add(/^\/achievements$/, function() { return LL.modules.achievementsPage(); });

    // 个人
    R.add(/^\/profile$/, function() { return LL.modules.profile(); });

    // 分级读物
    R.add(/^\/reading$/, function() { return LL.modules.readingList(); });
    R.add(/^\/reading\/([\w-]+)$/, function(id) { return LL.modules.readingDetail(id); });
  }

  return { init: init, registerRoutes: registerRoutes };
})();

/* ===== LL.authView · 认证视图 ===== */
LL.authView = (function() {
  'use strict';

  function login() {
    const html = '<div class="auth-page">' +
      '<div class="mascot-large">🦜</div>' +
      '<h1 class="auth-title">LingoGo</h1>' +
      '<p class="auth-subtitle">多语种沉浸学习 · 从这里开始</p>' +
      '<div class="auth-form">' +
        '<div class="field">' +
          '<label class="field-label">用户名</label>' +
          '<input class="input" id="login-username" placeholder="输入用户名" autocomplete="off">' +
        '</div>' +
        '<div class="field">' +
          '<label class="field-label">密码</label>' +
          '<input class="input" id="login-password" type="password" placeholder="输入密码">' +
        '</div>' +
        '<button class="btn btn-primary btn-block btn-lg" id="login-btn">登录</button>' +
        '<p class="t-center mt-4 c-soft">还没有账号？<a href="#/register" style="color:var(--c-primary);font-weight:800">去注册</a></p>' +
      '</div>' +
      '<div style="margin-top:24px;color:rgba(255,255,255,.7);font-size:12px;text-align:center;max-width:400px">' +
        '提示：数据存储于浏览器本地，切换设备不会同步。<br>请使用 Chrome/Edge 获得最佳语音体验。' +
      '</div>' +
    '</div>';

    return {
      html: html,
      onMount: function() {
        document.getElementById('login-btn').addEventListener('click', async function() {
          const u = document.getElementById('login-username').value.trim();
          const p = document.getElementById('login-password').value;
          if (!u || !p) { LL.ui.toast('请填写用户名和密码', 'warn'); return; }
          const btn = this;
          btn.disabled = true; btn.textContent = '登录中...';
          const result = await LL.auth.login(u, p);
          btn.disabled = false; btn.textContent = '登录';
          if (result.ok) {
            LL.ui.toast('欢迎回来，' + result.user.username + '！', 'success');
            LL.router.go('/dashboard');
          } else {
            LL.ui.toast(result.error, 'error');
          }
        });
        document.getElementById('login-password').addEventListener('keydown', function(e) {
          if (e.key === 'Enter') document.getElementById('login-btn').click();
        });
      }
    };
  }

  function register() {
    let selectedAvatar = LL.utils.pick(LL.auth.getAvatars());
    const avatars = LL.auth.getAvatars();

    const html = '<div class="auth-page">' +
      '<div class="mascot-large">🦜</div>' +
      '<h1 class="auth-title">创建账号</h1>' +
      '<p class="auth-subtitle">开始你的语言学习之旅</p>' +
      '<div class="auth-form">' +
        '<div class="field">' +
          '<label class="field-label">选择头像</label>' +
          '<div class="avatar-picker" id="avatar-picker">' +
            avatars.map(function(a) {
              return '<div class="avatar-option' + (a === selectedAvatar ? ' selected' : '') + '" data-avatar="' + a + '">' + LL.auth.getAvatarEmoji(a) + '</div>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="field">' +
          '<label class="field-label">用户名</label>' +
          '<input class="input" id="reg-username" placeholder="3-20个字符" autocomplete="off">' +
        '</div>' +
        '<div class="field">' +
          '<label class="field-label">密码</label>' +
          '<input class="input" id="reg-password" type="password" placeholder="至少6位">' +
        '</div>' +
        '<button class="btn btn-primary btn-block btn-lg" id="reg-btn">注册并登录</button>' +
        '<p class="t-center mt-4 c-soft">已有账号？<a href="#/login" style="color:var(--c-primary);font-weight:800">去登录</a></p>' +
      '</div>' +
    '</div>';

    return {
      html: html,
      onMount: function() {
        const picker = document.getElementById('avatar-picker');
        picker.addEventListener('click', function(e) {
          const opt = e.target.closest('.avatar-option');
          if (!opt) return;
          selectedAvatar = opt.getAttribute('data-avatar');
          picker.querySelectorAll('.avatar-option').forEach(function(el) { el.classList.remove('selected'); });
          opt.classList.add('selected');
        });
        document.getElementById('reg-btn').addEventListener('click', async function() {
          const u = document.getElementById('reg-username').value.trim();
          const p = document.getElementById('reg-password').value;
          if (!u || !p) { LL.ui.toast('请填写用户名和密码', 'warn'); return; }
          const btn = this;
          btn.disabled = true; btn.textContent = '注册中...';
          const result = await LL.auth.register(u, p, selectedAvatar);
          btn.disabled = false; btn.textContent = '注册并登录';
          if (result.ok) {
            LL.ui.toast('注册成功！欢迎加入 LingoGo', 'success');
            LL.router.go('/dashboard');
          } else {
            LL.ui.toast(result.error, 'error');
          }
        });
      }
    };
  }

  return { login: login, register: register };
})();

/* ===== 启动 ===== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', LL.app.init);
} else {
  LL.app.init();
}
