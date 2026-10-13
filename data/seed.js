/* ===== LingoGo 种子数据 · 等级表/XP规则/社区种子帖 ===== */
window.LL = window.LL || {};
LL.seed = {};

LL.seed.levelTable = [
  { level: 1, minXp: 0,    title: '新手' },
  { level: 2, minXp: 100,  title: '学徒' },
  { level: 3, minXp: 300,  title: '进阶者' },
  { level: 4, minXp: 700,  title: '探险家' },
  { level: 5, minXp: 1300, title: '语言猎人' },
  { level: 6, minXp: 2200, title: '语言学徒' },
  { level: 7, minXp: 3500, title: '语言大师' },
  { level: 8, minXp: 5500, title: '语言宗师' }
];

LL.seed.xpRules = {
  lesson_complete:    { xp: 20, coins: 5 },
  lesson_perfect:      { xp: 10, coins: 5 },
  card_review:         { xp: 2 },
  card_correct:        { xp: 3 },
  streak_keep:         { xp: 10 },
  post_create:         { xp: 5, coins: 2 },
  comment_create:     { xp: 2 },
  receive_like:        { xp: 2 },
  daily_goal_reached:  { xp: 30, coins: 10 },
  grammar_correct:     { xp: 5 },
  speaking_pass:       { xp: 8 },
  listening_correct:   { xp: 5 },
  media_complete:      { xp: 15, coins: 3 },
  media_perfect:       { xp: 10 },
  reading_complete:    { xp: 25, coins: 10 }
};

LL.seed.communitySeed = [
  {
    id: 1,
    userId: 'system',
    username: 'LingoGo官方',
    avatar: 'parrot',
    lang: 'en',
    category: 'share',
    title: '欢迎来到 LingoGo 社区！🎉',
    content: '欢迎各位语言学习者！在这里你可以分享学习心得、提问交流、打卡记录坚持的每一天。\n\n学习语言最重要的就是坚持，每天 15 分钟，胜过周末突击 3 小时。快来社区打卡你的学习日常吧！',
    tags: ['公告', '欢迎'],
    likes: [],
    comments: [
      { id: 1, userId: 'system', username: 'LingoGo官方', avatar: 'parrot', content: '有任何建议都可以在评论区留言～', ts: Date.now() - 86400000 }
    ],
    createdAt: Date.now() - 3 * 86400000,
    updatedAt: Date.now() - 3 * 86400000
  },
  {
    id: 2,
    userId: 'system',
    username: '小语',
    avatar: 'owl',
    lang: 'ja',
    category: 'tips',
    title: '日语五十音记忆小技巧',
    content: '记忆五十音图，建议按行（あいうえお）而不是按段记忆。每天记一行，配合书写练习，一周就能掌握平假名！\n\n另外，把手机系统语言改成日语，强迫自己适应，效果也很好。',
    tags: ['日语', '五十音', '技巧'],
    likes: ['system'],
    comments: [],
    createdAt: Date.now() - 2 * 86400000,
    updatedAt: Date.now() - 2 * 86400000
  },
  {
    id: 3,
    userId: 'system',
    username: '韩语学习者',
    avatar: 'bear',
    lang: 'ko',
    category: 'question',
    title: '韩语收音怎么记？',
    content: '韩语的收音（받침）有点复杂，有 7 种代表音。有没有好的记忆方法？\n\n目前主要用 LingoGo 的口语跟读功能反复练习，但感觉还是容易混。',
    tags: ['韩语', '收音', '提问'],
    likes: [],
    comments: [
      { id: 1, userId: 'system', username: 'LingoGo官方', avatar: 'parrot', content: '建议先记住 7 种代表音 ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅇ，其余收音都归并到这 7 种即可。', ts: Date.now() - 86400000 }
    ],
    createdAt: Date.now() - 86400000,
    updatedAt: Date.now() - 86400000
  }
];

// 初始化时加载种子帖（仅在社区为空时）
LL.seed.initCommunity = function() {
  const community = LL.store.getCommunity();
  if (community.posts.length === 0 && community.nextPostId === 1) {
    community.posts = LL.utils.deepClone(LL.seed.communitySeed);
    community.nextPostId = 4;
    LL.store.saveCommunity();
  }
};
