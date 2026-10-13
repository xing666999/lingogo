/* ===== LingoGo 路由 · hash 路由分发 ===== */
window.LL = window.LL || {};

LL.router = (function() {
  'use strict';

  const routes = [];
  let beforeEachHook = null;
  let currentView = null;

  function add(pattern, handler) {
    routes.push({ pattern: pattern, handler: handler });
  }

  function parse(path) {
    for (let i = 0; i < routes.length; i++) {
      const r = routes[i];
      const m = path.match(r.pattern);
      if (m) {
        return { handler: r.handler, params: m.slice(1) };
      }
    }
    return null;
  }

  function dispatch() {
    let hash = location.hash.slice(1);
    if (!hash || hash === '/') hash = '/dashboard';

    // 登录守卫
    const publicPaths = ['/login', '/register'];
    const isPublic = publicPaths.indexOf(hash) >= 0;
    const user = LL.store.getCurrentUser();

    if (!user && !isPublic) {
      location.hash = '#/login';
      return;
    }
    if (user && isPublic) {
      location.hash = '#/dashboard';
      return;
    }

    if (beforeEachHook) beforeEachHook(hash);

    const match = parse(hash);
    if (!match) {
      location.hash = '#/dashboard';
      return;
    }

    // 清理上一个视图
    if (currentView && currentView.onLeave) currentView.onLeave();
    LL.speech.stopSpeak();

    // 渲染
    const app = document.getElementById('app');
    app.innerHTML = '';

    const view = match.handler.apply(null, match.params);
    currentView = view;
    if (view && view.html !== undefined) {
      app.innerHTML = view.html;
      if (view.onMount) view.onMount();
    } else if (typeof view === 'string') {
      app.innerHTML = view;
    } else if (view) {
      // 直接是 DOM 元素
      app.appendChild(view);
    }

    // 更新 tabbar 高亮
    updateTabbar(hash);

    // 滚动重置
    window.scrollTo(0, 0);
  }

  function updateTabbar(hash) {
    const items = document.querySelectorAll('.tabbar-item');
    items.forEach(function(item) {
      item.classList.remove('active');
      const target = item.getAttribute('data-route') || '';
      if (hash.startsWith(target)) {
        item.classList.add('active');
      }
    });
  }

  function beforeEach(fn) { beforeEachHook = fn; }

  function go(path) {
    if (path.startsWith('#')) path = path.slice(1);
    location.hash = '#' + path;
  }

  function back() { history.back(); }

  function init() {
    window.addEventListener('hashchange', dispatch);
    dispatch();
  }

  return {
    add: add,
    dispatch: dispatch,
    beforeEach: beforeEach,
    go: go,
    back: back,
    init: init
  };
})();
