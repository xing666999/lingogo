/* ===== LingoGo 个人中心 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.profile = function() {
  const user = LL.auth.requireAuth();
  if (!user) return '';

  const avatar = LL.auth.getAvatarEmoji(user.avatar);
  const levelInfo = LL.gamification.getLevelByXp(user.xp);

  const html = '<div class="page">' +
    '<div class="topbar"><span class="topbar-title">👤 我的</span></div>' +
    '<div class="mt-4">' +
      // 头部
      '<div class="profile-header">' +
        '<div class="avatar avatar-lg" style="background:rgba(255,255,255,.2)">' + avatar + '</div>' +
        '<h2 class="fs-2xl fw-extrabold">' + LL.utils.escapeHtml(user.username) + '</h2>' +
        '<p style="opacity:.9">Lv.' + levelInfo.level + ' ' + levelInfo.title + '</p>' +
        '<div class="flex gap-4 mt-2">' +
          '<span style="font-weight:800">⭐ ' + user.xp + ' XP</span>' +
          '<span style="font-weight:800">🪙 ' + user.coins + '</span>' +
          '<span style="font-weight:800">🔥 ' + (user.streak ? user.streak.current : 0) + '天</span>' +
        '</div>' +
      '</div>' +

      // 快捷入口
      '<div class="card mb-4">' +
        '<a href="#/progress" class="list-item list-item-tap"><span style="font-size:24px">📊</span><div class="flex-1"><div class="fw-bold">学习进度</div><div class="c-soft" style="font-size:13px">查看详细学习数据</div></div><span class="c-faint">›</span></a>' +
        '<a href="#/achievements" class="list-item list-item-tap"><span style="font-size:24px">🏆</span><div class="flex-1"><div class="fw-bold">成就墙</div><div class="c-soft" style="font-size:13px">' + (user.unlockedBadges ? user.unlockedBadges.length : 0) + ' / ' + LL.achievements.length + ' 徽章</div></div><span class="c-faint">›</span></a>' +
      '</div>' +

      // 设置
      '<h2 class="section-title">设置</h2>' +
      '<div class="card">' +
        '<div class="setting-row">' +
          '<span class="setting-label">🔊 音效</span>' +
          '<label style="position:relative;display:inline-block;width:44px;height:24px">' +
            '<input type="checkbox" id="set-sound" ' + (user.settings.sound ? 'checked' : '') + ' style="opacity:0;width:0;height:0">' +
            '<span style="position:absolute;inset:0;background:' + (user.settings.sound ? 'var(--c-primary)' : '#ccc') + ';border-radius:12px;transition:background .2s;cursor:pointer"></span>' +
            '<span style="position:absolute;top:2px;left:' + (user.settings.sound ? '22px' : '2px') + ';width:20px;height:20px;background:#fff;border-radius:50%;transition:left .2s;cursor:pointer" class="toggle-dot"></span>' +
          '</label>' +
        '</div>' +
        '<div class="setting-row">' +
          '<span class="setting-label">🐌 语速</span>' +
          '<input type="range" id="set-rate" min="0.7" max="1.3" step="0.1" value="' + (user.settings.ttsRate || 1) + '" style="width:120px">' +
          '<span class="c-soft" id="rate-val" style="font-size:13px">' + (user.settings.ttsRate || 1).toFixed(1) + 'x</span>' +
        '</div>' +
        '<div class="setting-row">' +
          '<span class="setting-label">🎯 每日目标</span>' +
          '<select id="set-goal" class="select" style="width:100px">' +
            [10, 15, 20, 30, 45, 60].map(function(m) {
              return '<option value="' + m + '"' + ((user.settings.dailyGoalMinutes || 30) === m ? ' selected' : '') + '>' + m + '分钟</option>';
            }).join('') +
          '</select>' +
        '</div>' +
        '<div class="setting-row">' +
          '<span class="setting-label">📝 个人简介</span>' +
          '<button class="btn btn-ghost btn-sm" id="edit-bio">' + (user.bio ? '编辑' : '添加') + '</button>' +
        '</div>' +
      '</div>' +

      // 语音能力检测
      '<h2 class="section-title">语音能力</h2>' +
      '<div class="card">' +
        '<div class="setting-row"><span>🔊 语音合成 (TTS)</span><span style="font-weight:700;color:' + (LL.speech.isSynthesisSupported() ? 'var(--c-primary)' : 'var(--c-accent)') + '">' + (LL.speech.isSynthesisSupported() ? '✓ 支持' : '✗ 不支持') + '</span></div>' +
        '<div class="setting-row"><span>🎤 语音识别 (STT)</span><span style="font-weight:700;color:' + (LL.speech.isRecognitionSupported() ? 'var(--c-primary)' : 'var(--c-warn)') + '">' + (LL.speech.isRecognitionSupported() ? '✓ 支持' : '⚠ 不支持（口语自评模式）') + '</span></div>' +
        (LL.speech.isSynthesisSupported() ? '<button class="btn btn-secondary btn-block mt-2" id="test-tts">测试语音</button>' : '') +
      '</div>' +

      // 登出
      '<button class="btn btn-danger btn-block btn-lg mt-6" id="logout-btn">退出登录</button>' +
      '<p class="t-center c-faint mt-4" style="font-size:12px">LingoGo v1.0 · 数据存储于浏览器本地</p>' +
    '</div>' +
  '</div>';

  return {
    html: html,
    onMount: function() {
      // 音效开关
      document.getElementById('set-sound').addEventListener('change', function() {
        user.settings.sound = this.checked;
        LL.store.saveUser(user);
        // 更新开关样式
        const toggle = this.nextElementSibling;
        toggle.style.background = this.checked ? 'var(--c-primary)' : '#ccc';
        const dot = toggle.nextElementSibling;
        dot.style.left = this.checked ? '22px' : '2px';
      });

      // 语速
      const rateInput = document.getElementById('set-rate');
      const rateVal = document.getElementById('rate-val');
      rateInput.addEventListener('input', function() {
        rateVal.textContent = parseFloat(this.value).toFixed(1) + 'x';
      });
      rateInput.addEventListener('change', function() {
        user.settings.ttsRate = parseFloat(this.value);
        LL.store.saveUser(user);
        LL.ui.toast('语速已更新', 'success');
      });

      // 每日目标
      document.getElementById('set-goal').addEventListener('change', function() {
        user.settings.dailyGoalMinutes = parseInt(this.value, 10);
        LL.store.saveUser(user);
        LL.ui.toast('每日目标已更新', 'success');
      });

      // 简介编辑
      document.getElementById('edit-bio').addEventListener('click', function() {
        const box = LL.ui.modal('<h3 class="fw-bold mb-4">编辑简介</h3><textarea class="textarea" id="bio-input" placeholder="介绍一下自己..." maxlength="100">' + LL.utils.escapeHtml(user.bio || '') + '</textarea><div class="flex gap-3 mt-4"><button class="btn btn-ghost btn-block" onclick="LL.ui.hideModal()">取消</button><button class="btn btn-primary btn-block" id="save-bio">保存</button></div>');
        document.getElementById('save-bio').addEventListener('click', function() {
          user.bio = document.getElementById('bio-input').value.trim();
          LL.store.saveUser(user);
          LL.ui.hideModal();
          LL.ui.toast('简介已更新', 'success');
        });
      });

      // 测试 TTS
      const testBtn = document.getElementById('test-tts');
      if (testBtn) {
        testBtn.addEventListener('click', function() {
          LL.speech.speak('Hello, welcome to LingoGo!', 'en', { rate: user.settings.ttsRate });
        });
      }

      // 登出
      document.getElementById('logout-btn').addEventListener('click', function() {
        if (confirm('确定退出登录？')) {
          LL.auth.logout();
          LL.ui.toast('已退出登录', 'info');
          LL.router.go('/login');
        }
      });
    }
  };
};
