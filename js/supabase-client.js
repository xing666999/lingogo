/* ===== LingoGo Supabase 客户端封装 =====
 * 依赖：window.supabase （由 https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2 提供）
 * 职责：
 *   1. 初始化 Supabase 客户端
 *   2. 提供 fetchUserByUsername / fetchUser / upsertUser / fetchRecords / upsertRecords 接口
 *   3. upsert 操作做 debounce，避免高频写
 * 离线降级：所有网络失败静默吞，仅 console.warn，不阻塞 UI
 *
 * 使用前必须填入 SUPABASE_URL 和 SUPABASE_ANON_KEY
 */
window.LL = window.LL || {};

LL.supa = (function() {
  'use strict';

  // ===== 用户配置区（必填）=====
  // 把下面两个占位换成你 Supabase 项目的 Project URL 和 anon public key
  var SUPABASE_URL = 'YOUR_SUPABASE_URL';            // 形如 https://xxxxx.supabase.co
  var SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';   // 形如 eyJhbGciOi...

  var client = null;
  var ready = false;

  // debounce 队列：userId -> timer
  var userTimers = {};
  var recordTimers = {};

  function init() {
    if (SUPABASE_URL === 'YOUR_SUPABASE_URL' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
      console.warn('[supa] 未配置 SUPABASE_URL / SUPABASE_ANON_KEY，云端同步已禁用');
      ready = false;
      return;
    }
    try {
      if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
        console.warn('[supa] supabase-js 未加载，云端同步已禁用');
        ready = false;
        return;
      }
      client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: false }
      });
      ready = true;
      console.log('[supa] Supabase 客户端已就绪');
    } catch (e) {
      console.warn('[supa] 初始化失败:', e.message);
      ready = false;
    }
  }

  function isReady() { return ready; }

  /* ===== 用户表读写 ===== */

  // 按用户名查用户（登录用）
  function fetchUserByUsername(username) {
    if (!ready) return Promise.resolve(null);
    return client.from('lingogo_users')
      .select('*')
      .eq('username', username)
      .maybeSingle()
      .then(function(res) {
        if (res.error) { console.warn('[supa] fetchUserByUsername error:', res.error.message); return null; }
        return res.data ? rowToUser(res.data) : null;
      })
      .catch(function(e) { console.warn('[supa] fetchUserByUsername failed:', e.message); return null; });
  }

  // 按 id 查用户
  function fetchUser(userId) {
    if (!ready) return Promise.resolve(null);
    return client.from('lingogo_users')
      .select('*')
      .eq('id', userId)
      .maybeSingle()
      .then(function(res) {
        if (res.error) { console.warn('[supa] fetchUser error:', res.error.message); return null; }
        return res.data ? rowToUser(res.data) : null;
      })
      .catch(function(e) { console.warn('[supa] fetchUser failed:', e.message); return null; });
  }

  // 新增/更新用户（注册和资料修改都会调）
  function upsertUser(user) {
    if (!ready) return Promise.resolve(null);
    var row = userToRow(user);
    return client.from('lingogo_users')
      .upsert(row, { onConflict: 'id' })
      .then(function(res) {
        if (res.error) console.warn('[supa] upsertUser error:', res.error.message);
        return res.error ? null : user;
      })
      .catch(function(e) { console.warn('[supa] upsertUser failed:', e.message); return null; });
  }

  // debounced 版本，500ms 内多次写只推一次
  function upsertUserDebounced(user) {
    if (!ready) return;
    if (userTimers[user.id]) clearTimeout(userTimers[user.id]);
    userTimers[user.id] = setTimeout(function() {
      userTimers[user.id] = null;
      upsertUser(user);
    }, 500);
  }

  /* ===== 学习记录表读写 ===== */

  function fetchRecords(userId) {
    if (!ready) return Promise.resolve(null);
    return client.from('lingogo_user_records')
      .select('records, updated_at')
      .eq('user_id', userId)
      .maybeSingle()
      .then(function(res) {
        if (res.error) { console.warn('[supa] fetchRecords error:', res.error.message); return null; }
        return res.data ? res.data.records : null;
      })
      .catch(function(e) { console.warn('[supa] fetchRecords failed:', e.message); return null; });
  }

  function upsertRecords(userId, records) {
    if (!ready) return Promise.resolve(null);
    return client.from('lingogo_user_records')
      .upsert({ user_id: userId, records: records, updated_at: new Date().toISOString() }, { onConflict: 'user_id' })
      .then(function(res) {
        if (res.error) console.warn('[supa] upsertRecords error:', res.error.message);
        return res.error ? null : records;
      })
      .catch(function(e) { console.warn('[supa] upsertRecords failed:', e.message); return null; });
  }

  function upsertRecordsDebounced(userId, records) {
    if (!ready) return;
    if (recordTimers[userId]) clearTimeout(recordTimers[userId]);
    recordTimers[userId] = setTimeout(function() {
      recordTimers[userId] = null;
      upsertRecords(userId, records);
    }, 500);
  }

  /* ===== 行 <-> User 对象转换 =====
   * LingoGo 的 user 对象字段名是 camelCase，数据库列是 snake_case
   */

  function rowToUser(row) {
    if (!row) return null;
    return {
      id: row.id,
      username: row.username,
      passwordHash: row.password_hash,
      salt: row.salt,
      avatar: row.avatar,
      bio: row.bio,
      nativeLang: row.native_lang,
      targetLangs: row.target_langs || ['en'],
      settings: row.settings || { sound: true, ttsRate: 1.0, ttsPitch: 1.0, dailyGoalMinutes: 30 },
      xp: row.xp || 0,
      level: row.level || 1,
      coins: row.coins || 0,
      streak: row.streak || { current: 0, longest: 0, lastStudyDate: null },
      unlockedBadges: row.unlocked_badges || [],
      todayActivity: row.today_activity || { date: LL.utils.todayStr(), xpToday: 0, minutesToday: 0 },
      createdAt: row.created_at ? Date.parse(row.created_at) : Date.now()
    };
  }

  function userToRow(user) {
    return {
      id: user.id,
      username: user.username,
      password_hash: user.passwordHash,
      salt: user.salt,
      avatar: user.avatar,
      bio: user.bio,
      native_lang: user.nativeLang,
      target_langs: user.targetLangs,
      settings: user.settings,
      xp: user.xp,
      level: user.level,
      coins: user.coins,
      streak: user.streak,
      unlocked_badges: user.unlockedBadges,
      today_activity: user.todayActivity
    };
  }

  // 启动时自动初始化
  init();

  return {
    isReady: isReady,
    init: init,
    fetchUserByUsername: fetchUserByUsername,
    fetchUser: fetchUser,
    upsertUser: upsertUser,
    upsertUserDebounced: upsertUserDebounced,
    fetchRecords: fetchRecords,
    upsertRecords: upsertRecords,
    upsertRecordsDebounced: upsertRecordsDebounced
  };
})();
