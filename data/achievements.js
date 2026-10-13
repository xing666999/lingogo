/* ===== LingoGo 成就/徽章定义 ===== */
window.LL = window.LL || {};
LL.achievements = [
  /* 学习类 */
  {
    id: 'first_lesson',
    name: '踏出第一步',
    desc: '完成第一课时',
    icon: '🌱',
    category: 'learning',
    hidden: false,
    condition: { type: 'lessonsCompleted', op: '>=', value: 1 },
    xpReward: 50, coinsReward: 20
  },
  {
    id: 'lessons_10',
    name: '勤奋学徒',
    desc: '完成 10 个课时',
    icon: '📚',
    category: 'learning',
    hidden: false,
    condition: { type: 'lessonsCompleted', op: '>=', value: 10 },
    xpReward: 100, coinsReward: 50
  },
  {
    id: 'lessons_30',
    name: '学习达人',
    desc: '完成 30 个课时',
    icon: '🎓',
    category: 'learning',
    hidden: false,
    condition: { type: 'lessonsCompleted', op: '>=', value: 30 },
    xpReward: 200, coinsReward: 100
  },
  {
    id: 'perfect_5',
    name: '完美主义者',
    desc: '获得 5 次满分',
    icon: '💯',
    category: 'learning',
    hidden: false,
    condition: { type: 'perfectLessons', op: '>=', value: 5 },
    xpReward: 150, coinsReward: 60
  },
  {
    id: 'polyglot_2',
    name: '双语探索者',
    desc: '学习 2 种语言',
    icon: '🌐',
    category: 'learning',
    hidden: false,
    condition: { type: 'polyglot', op: '>=', value: 2 },
    xpReward: 100, coinsReward: 50
  },
  {
    id: 'polyglot_3',
    name: '三语通',
    desc: '学习 3 种语言',
    icon: '🌍',
    category: 'learning',
    hidden: true,
    condition: { type: 'polyglot', op: '>=', value: 3 },
    xpReward: 300, coinsReward: 200
  },
  /* 连续类 */
  {
    id: 'streak_3',
    name: '三日不断',
    desc: '连续学习 3 天',
    icon: '🔥',
    category: 'streak',
    hidden: false,
    condition: { type: 'streakDays', op: '>=', value: 3 },
    xpReward: 50, coinsReward: 30
  },
  {
    id: 'streak_7',
    name: '一周坚持',
    desc: '连续学习 7 天',
    icon: '⚡',
    category: 'streak',
    hidden: false,
    condition: { type: 'streakDays', op: '>=', value: 7 },
    xpReward: 100, coinsReward: 50
  },
  {
    id: 'streak_30',
    name: '月度达人',
    desc: '连续学习 30 天',
    icon: '🏆',
    category: 'streak',
    hidden: true,
    condition: { type: 'streakDays', op: '>=', value: 30 },
    xpReward: 500, coinsReward: 300
  },
  /* 社交类 */
  {
    id: 'first_post',
    name: '社区新星',
    desc: '发布第一条帖子',
    icon: '✍️',
    category: 'social',
    hidden: false,
    condition: { type: 'postsCreated', op: '>=', value: 1 },
    xpReward: 30, coinsReward: 20
  },
  {
    id: 'posts_5',
    name: '活跃分子',
    desc: '发布 5 条帖子',
    icon: '💬',
    category: 'social',
    hidden: false,
    condition: { type: 'postsCreated', op: '>=', value: 5 },
    xpReward: 80, coinsReward: 40
  },
  {
    id: 'likes_10',
    name: '人气王',
    desc: '累计获得 10 个赞',
    icon: '❤️',
    category: 'social',
    hidden: false,
    condition: { type: 'likesReceived', op: '>=', value: 10 },
    xpReward: 60, coinsReward: 30
  },
  /* 技能类 */
  {
    id: 'xp_500',
    name: '经验丰富',
    desc: '累计获得 500 经验值',
    icon: '⭐',
    category: 'skill',
    hidden: false,
    condition: { type: 'xp', op: '>=', value: 500 },
    xpReward: 50, coinsReward: 30
  },
  {
    id: 'xp_2000',
    name: '经验大师',
    desc: '累计获得 2000 经验值',
    icon: '🌟',
    category: 'skill',
    hidden: true,
    condition: { type: 'xp', op: '>=', value: 2000 },
    xpReward: 200, coinsReward: 100
  },
  /* 特殊 */
  {
    id: 'daily_goal',
    name: '目标达成',
    desc: '达成每日学习目标',
    icon: '🎯',
    category: 'special',
    hidden: false,
    condition: { type: 'dailyGoalReached' },
    xpReward: 30, coinsReward: 10
  },
  /* 媒体类 */
  {
    id: 'media_first',
    name: '视听达人',
    desc: '完成首个媒体活动',
    icon: '🎬',
    category: 'learning',
    hidden: false,
    condition: { type: 'mediaCompleted', op: '>=', value: 1 },
    xpReward: 50, coinsReward: 20
  },
  {
    id: 'media_master',
    name: '跟读高手',
    desc: '完成 10 个媒体活动',
    icon: '🎤',
    category: 'learning',
    hidden: true,
    condition: { type: 'mediaCompleted', op: '>=', value: 10 },
    xpReward: 150, coinsReward: 80
  },
  /* 读物类 */
  {
    id: 'reader_5',
    name: '书虫',
    desc: '读完 5 本分级读物',
    icon: '📚',
    category: 'learning',
    hidden: false,
    condition: { type: 'readingCompleted', op: '>=', value: 5 },
    xpReward: 100, coinsReward: 50
  },
  {
    id: 'reader_20',
    name: '多语种读者',
    desc: '读完 20 本分级读物',
    icon: '🌍',
    category: 'learning',
    hidden: true,
    condition: { type: 'readingCompleted', op: '>=', value: 20 },
    xpReward: 300, coinsReward: 200
  }
];
