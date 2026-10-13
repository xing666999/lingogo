/* ===== LingoGo 韩语分级读物清单 =====
 * level: 统一用 CEFR A1-C1
 * levelRaw: 保留 TOPIK 1-6 原始等级便于展示
 */
window.LL = window.LL || {};
LL.reading = LL.reading || {};

LL.reading.ko = [
  {
    id: 'ko-rd-001',
    lang: 'ko',
    title: '아기돼지 삼형제 (개요)',
    titleZh: '三只小猪（概要）',
    author: '전래동화',
    level: 'A1',
    levelRaw: 'TOPIK1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20three%20little%20pigs%20building%20houses%2C%20children%20fairy%20tale%20illustration%2C%20watercolor%20style&image_size=square',
    summary: '三只小猪与大灰狼的经典童话。基础句型与过去时态，适合 TOPIK1 入门。',
    keywords: ['동화','동물','과거','기초'],
    url: 'https://www.youtube.com/watch?v=2n_ygs1AhAg',
    duration: 5,
    relatedLessonId: 'ko-A1-U1-L1'
  },
  {
    id: 'ko-rd-002',
    lang: 'ko',
    title: 'TTMIK Iyagi (이야기) 시리즈',
    titleZh: 'TTMIK 对话系列',
    author: 'Talk To Me In Korean',
    level: 'A2',
    levelRaw: 'TOPIK2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=two%20korean%20friends%20having%20casual%20conversation%2C%20modern%20illustration%2C%20language%20learning%20podcast%20art&image_size=square',
    summary: 'TTMIK 每周更新的自然对话节目，含 transcript 与词汇表，适合中初级听力+阅读。',
    keywords: ['대화','일상','어휘','팟캐스트'],
    url: 'https://talktomeinkorean.com/curriculum/',
    duration: 10,
    relatedLessonId: 'ko-A1-U1-L2'
  },
  {
    id: 'ko-rd-003',
    lang: 'ko',
    title: '흥부와 놀부',
    titleZh: '兴夫与诺夫',
    author: '전래동화',
    level: 'A2',
    levelRaw: 'TOPIK2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=korean%20traditional%20folktale%20of%20two%20brothers%20and%20a%20magical%20swallow%2C%20classic%20story%20illustration&image_size=square',
    summary: '兄弟善恶有报的传统童话。含敬语与因果句式，适合 TOPIK2。',
    keywords: ['전래','도덕','가족','교훈'],
    url: 'https://www.youtube.com/watch?v=WvY4q1fjM3E',
    duration: 10,
    relatedLessonId: 'ko-A2-U1-L1'
  },
  {
    id: 'ko-rd-004',
    lang: 'ko',
    title: 'KBS 뉴스 9 (단순화 버전)',
    titleZh: 'KBS 新闻 9（简易版）',
    author: 'KBS',
    level: 'B1',
    levelRaw: 'TOPIK3',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=korean%20news%20studio%20with%20seoul%20skyline%2C%20broadcast%20journalism%2C%20modern%20flat%20design&image_size=square',
    summary: 'KBS 每日新闻的视频+字幕，可先看画面猜内容再读字幕，适合 TOPIK3 阅读训练。',
    keywords: ['뉴스','사회','시사','한국'],
    url: 'https://news.kbs.co.kr/',
    duration: 15,
    relatedLessonId: 'ko-A2-U1-L2'
  },
  {
    id: 'ko-rd-005',
    lang: 'ko',
    title: '데미 (웹툰 발췌)',
    titleZh: 'Demi（漫画节选）',
    author: '포야',
    level: 'B1',
    levelRaw: 'TOPIK4',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=korean%20webtoon%20style%20illustration%20of%20demon%20and%20angel%20slice%20of%20life%2C%20modern%20comic%20art&image_size=square',
    summary: '天使与恶魔日常喜剧，对白简短地道，含大量口语表达，适合 TOPIK4。',
    keywords: ['웹툰','일상','대사','구어'],
    url: 'https://comic.naver.com/webtoon/list.nhn?titleId=650252',
    duration: 20,
    relatedLessonId: 'ko-B1-U1-L1'
  },
  {
    id: 'ko-rd-006',
    lang: 'ko',
    title: '한강 소설 단편 발췌',
    titleZh: '韩江短篇节选',
    author: '한강',
    level: 'B2',
    levelRaw: 'TOPIK5',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=atmospheric%20korean%20literary%20novel%20cover%2C%20soft%20poetic%20illustration%2C%20autumn%20leaves%20and%20hanok&image_size=square',
    summary: '诺贝尔文学奖得主韩江的短篇散文，语言凝练含蓄，适合中高级阅读训练。',
    keywords: ['문학','단편','현대','서정'],
    url: 'https://book.naver.com/',
    duration: 30,
    relatedLessonId: 'ko-B1-U1-L2'
  },
  {
    id: 'ko-rd-007',
    lang: 'ko',
    title: '세종실록 (현대어 번역본)',
    titleZh: '世宗实录（现代语译本）',
    author: '국사편찬위원회',
    level: 'C1',
    levelRaw: 'TOPIK6',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=korean%20joseon%20dynasty%20royal%20annals%20with%20king%20sejong%2C%20classical%20historical%20illustration%2C%20elegant%20scroll%20art&image_size=square',
    summary: '朝鲜王朝实录现代语译版，含正式书面语与古词汇，适合 TOPIK6 高级挑战。',
    keywords: ['역사','조선','실록','한문어'],
    url: 'https://sillok.history.go.kr/',
    duration: 40,
    relatedLessonId: 'ko-B1-U1-L2'
  }
];
