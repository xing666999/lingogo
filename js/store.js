/* ===== LingoGo 数据访问层 · localStorage 唯一入口 ===== */
window.LL = window.LL || {};

LL.store = (function() {
  'use strict';

  const KEY = 'll_data';
  const SCHEMA_VERSION = 1;

  let data = null;

  function defaultData() {
    return {
      schemaVersion: SCHEMA_VERSION,
      users: {},
      usernames: {},
      session: null,
      records: {},
      community: { posts: [], nextPostId: 1 },
      preferences: { lastLang: 'en' }
    };
  }

  function migrate(d) {
    if (!d.schemaVersion || d.schemaVersion < 1) {
      d.schemaVersion = 1;
    }
    if (!d.community) d.community = { posts: [], nextPostId: 1 };
    if (!d.records) d.records = {};
    if (!d.users) d.users = {};
    if (!d.usernames) d.usernames = {};
    return d;
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) {
        data = defaultData();
        save();
      } else {
        data = JSON.parse(raw);
        data = migrate(data);
      }
    } catch (e) {
      console.error('[store] load failed, reset:', e);
      data = defaultData();
    }
    return data;
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        console.warn('[store] 配额超限');
        LL.ui && LL.ui.toast('存储空间已满，请清理部分数据', 'warn');
      } else {
        console.error('[store] save failed:', e);
      }
      return false;
    }
  }

  function get() {
    if (!data) load();
    return data;
  }

  function getData() { return get(); }

  function reset() {
    data = defaultData();
    save();
  }

  /* ===== 用户 ===== */
  function getUser(userId) {
    return get().users[userId] || null;
  }

  function getUserByUsername(username) {
    const d = get();
    const uid = d.usernames[username.toLowerCase()];
    return uid ? d.users[uid] : null;
  }

  function saveUser(user) {
    const d = get();
    d.users[user.id] = user;
    d.usernames[user.username.toLowerCase()] = user.id;
    save();
    // 云端同步（debounced，不阻塞 UI）
    if (typeof LL !== 'undefined' && LL.supa && LL.supa.isReady()) {
      LL.supa.upsertUserDebounced(user);
    }
  }

  /* ===== 会话 ===== */
  function getSession() { return get().session; }

  function setSession(userId) {
    const d = get();
    d.session = { userId: userId, token: LL.utils.uuid(), ts: Date.now() };
    save();
  }

  function clearSession() {
    get().session = null;
    save();
  }

  function getCurrentUser() {
    const s = getSession();
    return s ? getUser(s.userId) : null;
  }

  /* ===== 学习记录 ===== */
  function getRecords(userId) {
    const d = get();
    if (!d.records[userId]) {
      d.records[userId] = {
        lessonRecords: {},
        srs: {},
        skillStats: {},
        dailyActivity: {},
        unlockedBadges: [],
        totalStats: { totalXp: 0, totalMinutes: 0, totalLessons: 0 },
        readingRecords: {},
        mediaRecords: {}
      };
      save();
    }
    return d.records[userId];
  }

  function saveRecords(userId, records) {
    get().records[userId] = records;
    save();
    // 云端同步（debounced，不阻塞 UI）
    if (typeof LL !== 'undefined' && LL.supa && LL.supa.isReady()) {
      LL.supa.upsertRecordsDebounced(userId, records);
    }
  }

  /* ===== 社区 ===== */
  function getCommunity() { return get().community; }

  function saveCommunity() { save(); }

  /* ===== 偏好 ===== */
  function getPreferences() { return get().preferences; }

  function setPreference(key, value) {
    const d = get();
    d.preferences[key] = value;
    save();
  }

  return {
    load: load,
    save: save,
    get: get,
    getData: getData,
    reset: reset,
    getUser: getUser,
    getUserByUsername: getUserByUsername,
    saveUser: saveUser,
    getSession: getSession,
    setSession: setSession,
    clearSession: clearSession,
    getCurrentUser: getCurrentUser,
    getRecords: getRecords,
    saveRecords: saveRecords,
    getCommunity: getCommunity,
    saveCommunity: saveCommunity,
    getPreferences: getPreferences,
    setPreference: setPreference,
    SCHEMA_VERSION: SCHEMA_VERSION
  };
})();
