/* ===== LingoGo 用户认证 ===== */
window.LL = window.LL || {};

LL.auth = (function() {
  'use strict';

  const AVATARS = ['fox', 'panda', 'cat', 'owl', 'rabbit', 'tiger', 'bear', 'penguin'];
  const AVATAR_EMOJI = {
    fox: '🦊', panda: '🐼', cat: '🐱', owl: '🦉',
    rabbit: '🐰', tiger: '🐯', bear: '🐻', penguin: '🐧'
  };

  async function hashPassword(salt, password) {
    try {
      const buf = await crypto.subtle.digest('SHA-256',
        new TextEncoder().encode(salt + password));
      return LL.utils.hexFromBuffer(buf);
    } catch (e) {
      // 降级：简单哈希
      let h = 0;
      const s = salt + password;
      for (let i = 0; i < s.length; i++) {
        h = ((h << 5) - h) + s.charCodeAt(i);
        h |= 0;
      }
      return 'fb' + Math.abs(h).toString(16);
    }
  }

  function validateUsername(name) {
    if (!name) return '请输入用户名';
    if (name.length < 3) return '用户名至少 3 个字符';
    if (name.length > 20) return '用户名最多 20 个字符';
    if (!/^[\u4e00-\u9fa5a-zA-Z0-9_]+$/.test(name)) return '用户名仅支持中英文、数字、下划线';
    return null;
  }

  function validatePassword(pwd) {
    if (!pwd) return '请输入密码';
    if (pwd.length < 6) return '密码至少 6 位';
    return null;
  }

  async function register(username, password, avatar) {
    const errU = validateUsername(username);
    if (errU) return { ok: false, error: errU };
    const errP = validatePassword(password);
    if (errP) return { ok: false, error: errP };

    // 先查本地
    if (LL.store.getUserByUsername(username)) {
      return { ok: false, error: '用户名已存在' };
    }
    // 再查云端（防跨设备重名）
    if (LL.supa && LL.supa.isReady()) {
      const cloudUser = await LL.supa.fetchUserByUsername(username);
      if (cloudUser) return { ok: false, error: '用户名已存在' };
    }

    const salt = LL.utils.uuid().slice(0, 16);
    const passwordHash = await hashPassword(salt, password);
    const now = Date.now();

    const user = {
      id: 'u-' + LL.utils.uuid(),
      username: username,
      passwordHash: passwordHash,
      salt: salt,
      createdAt: now,
      avatar: avatar || LL.utils.pick(AVATARS),
      bio: '学语言改变生活',
      nativeLang: 'zh',
      targetLangs: ['en'],
      settings: {
        sound: true,
        ttsRate: 1.0,
        ttsPitch: 1.0,
        dailyGoalMinutes: 30
      },
      xp: 0,
      level: 1,
      coins: 0,
      streak: { current: 0, longest: 0, lastStudyDate: null },
      unlockedBadges: [],
      todayActivity: { date: LL.utils.todayStr(), xpToday: 0, minutesToday: 0 }
    };

    LL.store.saveUser(user);          // 本地 + 云端推送
    LL.store.setSession(user.id);
    LL.store.getRecords(user.id);     // 初始化空记录（仅本地）

    return { ok: true, user: user };
  }

  async function login(username, password) {
    // 优先查云端，跨设备可用
    let user = null;
    if (LL.supa && LL.supa.isReady()) {
      user = await LL.supa.fetchUserByUsername(username);
    }
    if (!user) {
      // 云端没有则查本地（离线降级，仅支持本设备注册的账号）
      user = LL.store.getUserByUsername(username);
    }
    if (!user) return { ok: false, error: '用户不存在' };
    const hash = await hashPassword(user.salt, password);
    if (hash !== user.passwordHash) return { ok: false, error: '密码错误' };

    // 把云端 user 写入本地（确保跨设备登录后本地有最新数据）
    LL.store.saveUser(user);

    // 从云端拉取学习记录覆盖本地
    if (LL.supa && LL.supa.isReady()) {
      const cloudRecords = await LL.supa.fetchRecords(user.id);
      if (cloudRecords) {
        LL.store.saveRecords(user.id, cloudRecords);
      }
    }

    LL.store.setSession(user.id);
    return { ok: true, user: user };
  }

  function logout() {
    LL.store.clearSession();
  }

  function restoreSession() {
    const user = LL.store.getCurrentUser();
    return user;
  }

  function requireAuth() {
    const user = LL.store.getCurrentUser();
    if (!user) {
      location.hash = '#/login';
      return null;
    }
    return user;
  }

  function getAvatars() { return AVATARS; }
  function getAvatarEmoji(avatar) { return AVATAR_EMOJI[avatar] || '🦜'; }

  return {
    register: register,
    login: login,
    logout: logout,
    restoreSession: restoreSession,
    requireAuth: requireAuth,
    getAvatars: getAvatars,
    getAvatarEmoji: getAvatarEmoji,
    hashPassword: hashPassword
  };
})();
