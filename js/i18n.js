/* ===== LingoGo 界面文案字典 ===== */
window.LL = window.LL || {};

LL.i18n = (function() {
  'use strict';

  const dict = {
    appName: 'LingoGo',
    tagline: '多语种沉浸学习',

    // 导航
    navDashboard: '首页',
    navCourses: '课程',
    navCommunity: '社区',
    navAchievements: '成就',
    navProfile: '我的',

    // 认证
    login: '登录',
    register: '注册',
    logout: '登出',
    username: '用户名',
    password: '密码',
    confirmPassword: '确认密码',
    avatar: '选择头像',
    welcomeBack: '欢迎回来',
    createAccount: '创建账号',
    noAccount: '还没有账号？',
    hasAccount: '已有账号？',
    goLogin: '去登录',
    goRegister: '去注册',

    // 课程
    selectLanguage: '选择语言',
    level: '级别',
    unit: '单元',
    lesson: '课时',
    locked: '已锁定',
    completed: '已完成',
    inProgress: '学习中',
    startLesson: '开始上课',
    continueLesson: '继续学习',
    reviewLesson: '复习',

    // 学习
    vocab: '单词记忆',
    grammar: '语法练习',
    listening: '听力训练',
    speaking: '口语跟读',
    showAnswer: '显示答案',
    next: '下一题',
    check: '检查',
    correct: '回答正确',
    wrong: '回答错误',
    skip: '跳过',
    finish: '完成',
    lessonComplete: '课时完成',
    yourScore: '你的得分',
    perfectScore: '满分通关',

    // 口语
    tapToSpeak: '点击麦克风跟读',
    listening_: '聆听中',
    speaking_: '请跟读',
    recognizeResult: '识别结果',
    similarity: '相似度',
    sayItAgain: '再来一次',
    iWasRight: '我读对了',
    micUnsupported: '当前浏览器不支持语音识别，已切换自评模式',

    // 进度
    streak: '连续天数',
    todayMinutes: '今日学习',
    dailyGoal: '每日目标',
    totalXp: '总经验',
    totalLessons: '完成课时',
    skillRadar: '技能雷达',
    heatmap: '学习热力',
    level: '等级',

    // 社区
    community: '社区',
    newPost: '发帖',
    postTitle: '标题',
    postContent: '说点什么...',
    category: '分类',
    catAll: '全部',
    catQuestion: '提问',
    catShare: '分享',
    catCheckin: '打卡',
    catTips: '经验',
    publish: '发布',
    like: '赞',
    comment: '评论',
    reply: '回复',
    noPosts: '还没有帖子，来发第一条吧',

    // 成就
    achievements: '成就墙',
    badge: '徽章',
    unlocked: '已解锁',
    locked: '未解锁',
    progress: '进度',
    level: '等级',
    rank: '排行',

    // 个人
    profile: '个人中心',
    editProfile: '编辑资料',
    settings: '设置',
    sound: '音效',
    ttsRate: '语速',
    dailyGoalMinutes: '每日目标(分钟)',
    save: '保存',
    cancel: '取消',

    // 通用
    confirm: '确认',
    delete: '删除',
    edit: '编辑',
    back: '返回',
    loading: '加载中',
    empty: '暂无内容',
    saveSuccess: '保存成功',
    saveFailed: '保存失败',
    deleteConfirm: '确认删除？'
  };

  function t(key) {
    return dict[key] || key;
  }

  return { t: t, dict: dict };
})();
