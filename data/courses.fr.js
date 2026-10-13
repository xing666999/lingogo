/* ===== LingoGo 法语课程数据 =====
 * 结构：levels -> units -> lessons -> activities
 * 每课含 vocab/grammar/listening/speaking 四环节
 * 查询工具函数（findLesson / getLessonContext / countLessons）定义于 courses.en.js
 */
window.LL = window.LL || {};
LL.courses = LL.courses || {};

LL.courses.fr = {
  lang: 'fr',
  label: '法语',
  flag: '🇫🇷',
  themeColor: '#7B61FF',
  levels: [
    {
      id: 'fr-A1', code: 'A1', name: '入门',
      description: '法语字母、问候、基础数字',
      units: [
        {
          id: 'fr-A1-U1', title: 'Bonjour', subtitle: '打招呼',
          icon: 'wave', color: '#7B61FF',
          lessons: [
            {
              id: 'fr-A1-U1-L1', title: 'Bonjour!',
              description: '学会法语基础问候',
              xpReward: 20, requires: [],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c1', front: 'bonjour', back: '你好', ipa: '/bɔ̃.ʁuʁ/',
                    example: 'Bonjour, comment allez-vous ?', exampleTr: '你好，您怎么样？' },
                  { id: 'fr-c2', front: 'salut', back: '嗨/再见（非正式）', ipa: '/sa.ly/',
                    example: 'Salut, ça va ?', exampleTr: '嗨，最近好吗？' },
                  { id: 'fr-c3', front: 'merci', back: '谢谢', ipa: '/mɛʁ.si/',
                    example: 'Merci beaucoup.', exampleTr: '非常感谢。' },
                  { id: 'fr-c4', front: 'au revoir', back: '再见', ipa: '/o.ʁə.vwaʁ/',
                    example: 'Au revoir, à demain.', exampleTr: '再见，明天见。' },
                  { id: 'fr-c5', front: 's\'il vous plaît', back: '请', ipa: '/sil.vu.plɛ/',
                    example: 'Asseyez-vous, s\'il vous plaît.', exampleTr: '请坐。' }
                ]},
                { type: 'grammar', rule: '主语人称 je/tu/il/elle 与动词变位',
                  questions: [
                  { id: 'fr-g1', kind: 'single', q: 'Je ___ français.',
                    choices: ['suis','parle','ai'], answer: 1, explain: 'parler 第一人称变位 je parle。' },
                  { id: 'fr-g2', kind: 'single', q: 'Tu ___ français ?',
                    choices: ['parle','parles','parlez'], answer: 1, explain: 'tu 配 parles，-s 结尾。' },
                  { id: 'fr-g3', kind: 'fill', q: 'Elle ___ française. (être)',
                    answer: 'est', explain: 'elle 配 être 第三人称 est。' }
                ]},
                { type: 'listening', audio: 'Bonjour, je m\'appelle Marie. Je suis française.',
                  questions: [
                  { id: 'fr-l1', kind: 'single', q: 'Marie 来自哪里？',
                    choices: ['法国','意大利','西班牙'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Bonjour', targetTr: '你好', hint: '跟读：你好' },
                  { target: 'Merci', targetTr: '谢谢', hint: '跟读：谢谢' },
                  { target: 'Au revoir', targetTr: '再见', hint: '跟读：再见' }
                ]}
              ]
            },
            {
              id: 'fr-A1-U1-L2', title: 'Comment ça va?',
              description: '询问对方近况',
              xpReward: 20, requires: ['fr-A1-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c6', front: 'ça va', back: '最近好吗/还行', ipa: '/sa.va/',
                    example: 'Salut, ça va ?', exampleTr: '嗨，最近好吗？' },
                  { id: 'fr-c7', front: 'bien', back: '好', ipa: '/bjɛ̃/',
                    example: 'Ça va bien, merci.', exampleTr: '我很好，谢谢。' },
                  { id: 'fr-c8', front: 'mal', back: '不好', ipa: '/mal/',
                    example: 'Je me sens mal aujourd\'hui.', exampleTr: '我今天感觉不好。' },
                  { id: 'fr-c9', front: 'comment', back: '如何/怎样', ipa: '/kɔ.mɑ̃/',
                    example: 'Comment vas-tu ?', exampleTr: '你怎么样？' },
                  { id: 'fr-c10', front: 'et', back: '和/呢', ipa: '/e/',
                    example: 'Et toi, ça va ?', exampleTr: '你呢，最近好吗？' }
                ]},
                { type: 'grammar', rule: 'Comment vas-tu ? / Comment allez-vous ? 回答用 je vais + 形容词',
                  questions: [
                  { id: 'fr-g4', kind: 'single', q: 'Comment ___-tu ?',
                    choices: ['va','vas','vais'], answer: 1, explain: 'tu 配 vas（aller 第二人称）。' },
                  { id: 'fr-g5', kind: 'single', q: 'Je ___ bien, merci.',
                    choices: ['vais','va','vas'], answer: 0, explain: 'je 配 vais（aller 第一人称）。' },
                  { id: 'fr-g6', kind: 'fill', q: 'Ça va bien, ___ (谢谢).',
                    answer: 'merci', explain: '回答近况常用 merci 收尾。' }
                ]},
                { type: 'listening', audio: 'Salut ! Ça va ? — Oui, ça va bien, merci. Et toi ?',
                  questions: [
                  { id: 'fr-l2', kind: 'single', q: '说话者感觉如何？',
                    choices: ['Bien','Mal','Très mal'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Ça va', targetTr: '你好吗', hint: '问候对方近况' },
                  { target: 'Ça va bien', targetTr: '我很好', hint: '回答近况良好' },
                  { target: 'Et toi', targetTr: '你呢', hint: '反问对方' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'fr-A1-U2', title: 'Lettres & Sons', subtitle: '字母与发音',
          icon: 'abc', color: '#FF9600',
          lessons: [
            {
              id: 'fr-A1-U2-L1', title: 'L\'alphabet',
              description: '法语字母表与拼读',
              xpReward: 20, requires: ['fr-A1-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c11', front: 'lettre', back: '字母', ipa: '/lɛtʁ/',
                    example: 'La première lettre du mot.', exampleTr: '单词的第一个字母。' },
                  { id: 'fr-c12', front: 'alphabet', back: '字母表', ipa: '/al.fa.bɛ/',
                    example: 'L\'alphabet français a 26 lettres.', exampleTr: '法语字母表有 26 个字母。' },
                  { id: 'fr-c13', front: 'son', back: '声音/读音', ipa: '/sɔ̃/',
                    example: 'Le son de la lettre A.', exampleTr: '字母 A 的读音。' },
                  { id: 'fr-c14', front: 'écrire', back: '写', ipa: '/e.kʁiʁ/',
                    example: 'Je sais écrire mon nom.', exampleTr: '我会写我的名字。' },
                  { id: 'fr-c15', front: 'lire', back: '读', ipa: '/liʁ/',
                    example: 'Je lis un livre.', exampleTr: '我在读一本书。' }
                ]},
                { type: 'grammar', rule: '法语字母读法：C=/se/，G=/ʒe/，J=/ʒi/，W=/dublə ve/',
                  questions: [
                  { id: 'fr-g7', kind: 'single', q: '字母 C 读作？',
                    choices: ['/se/','/ke/','/si/'], answer: 0, explain: '法语 C 读 /se/。' },
                  { id: 'fr-g8', kind: 'single', q: '字母 G 读作？',
                    choices: ['/ʒe/','/ge/','/ʒi/'], answer: 0, explain: '法语 G 读 /ʒe/。' },
                  { id: 'fr-g9', kind: 'fill', q: '字母 B 读作 ___ (写音标).',
                    answer: '/be/', explain: '法语 B 读 /be/。' }
                ]},
                { type: 'listening', audio: 'Je m\'appelle Anne. A-N-N-E. Et toi, comment tu t\'appelles ?',
                  questions: [
                  { id: 'fr-l3', kind: 'single', q: 'Anne 的名字有几个字母？',
                    choices: ['Quatre','Trois','Cinq'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'A B C', targetTr: '字母 ABC', hint: '跟读字母' },
                  { target: 'Je m\'appelle Anne', targetTr: '我叫 Anne', hint: '拼读自我介绍' },
                  { target: 'lettre', targetTr: '字母', hint: '跟读单词' }
                ]}
              ]
            },
            {
              id: 'fr-A1-U2-L2', title: 'Je m\'appelle...',
              description: '介绍自己的名字',
              xpReward: 20, requires: ['fr-A1-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c16', front: 'je', back: '我', ipa: '/ʒə/',
                    example: 'Je m\'appelle Pierre.', exampleTr: '我叫 Pierre。' },
                  { id: 'fr-c17', front: 'nom', back: '姓名', ipa: '/nɔ̃/',
                    example: 'Quel est ton nom ?', exampleTr: '你叫什么名字？' },
                  { id: 'fr-c18', front: 'prénom', back: '名', ipa: '/pʁe.nɔ̃/',
                    example: 'Mon prénom est Marie.', exampleTr: '我的名字是 Marie。' },
                  { id: 'fr-c19', front: 'appeler', back: '叫做', ipa: '/a.ple/',
                    example: 'Comment tu t\'appelles ?', exampleTr: '你叫什么？' },
                  { id: 'fr-c20', front: 'je m\'appelle', back: '我叫', ipa: '/ʒə.ma.pɛl/',
                    example: 'Bonjour, je m\'appelle Tom.', exampleTr: '你好，我叫 Tom。' }
                ]},
                { type: 'grammar', rule: 'Je m\'appelle... / Tu t\'appelles... / Elle s\'appelle...',
                  questions: [
                  { id: 'fr-g10', kind: 'single', q: 'Je ___ Marie.',
                    choices: ['m\'appelle','appelle','appelles'], answer: 0, explain: 'je m\'appelle 第一人称自我介绍。' },
                  { id: 'fr-g11', kind: 'single', q: 'Comment tu t\'___ ?',
                    choices: ['appelles','appelle','m\'appelles'], answer: 0, explain: 'tu t\'appelles 第二人称。' },
                  { id: 'fr-g12', kind: 'fill', q: 'Elle ___ Marie. (s\'appeler)',
                    answer: 's\'appelle', explain: 'elle s\'appelle 第三人称单数。' }
                ]},
                { type: 'listening', audio: 'Bonjour, je m\'appelle Pierre. Et vous, comment vous appelez-vous ?',
                  questions: [
                  { id: 'fr-l4', kind: 'single', q: '说话者叫什么？',
                    choices: ['Pierre','Marie','Anne'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Je m\'appelle Pierre', targetTr: '我叫 Pierre', hint: '介绍自己名字' },
                  { target: 'Comment tu t\'appelles', targetTr: '你叫什么', hint: '询问对方名字' },
                  { target: 'Mon prénom est Marie', targetTr: '我的名字是 Marie', hint: '说明自己的名' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'fr-A1-U3', title: 'Nombres & Couleurs', subtitle: '数字与颜色',
          icon: 'number', color: '#FF4B4B',
          lessons: [
            {
              id: 'fr-A1-U3-L1', title: 'Les nombres 0-10',
              description: '学会法语数字 0 到 10',
              xpReward: 20, requires: ['fr-A1-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c21', front: 'zéro', back: '零', ipa: '/ze.ʁo/',
                    example: 'Zéro, un, deux, trois.', exampleTr: '零，一，二，三。' },
                  { id: 'fr-c22', front: 'un', back: '一', ipa: '/œ̃/',
                    example: 'J\'ai un chat.', exampleTr: '我有一只猫。' },
                  { id: 'fr-c23', front: 'deux', back: '二', ipa: '/dø/',
                    example: 'Deux livres, s\'il vous plaît.', exampleTr: '请给我两本书。' },
                  { id: 'fr-c24', front: 'trois', back: '三', ipa: '/tʁwa/',
                    example: 'Trois amis sont ici.', exampleTr: '三个朋友在这里。' },
                  { id: 'fr-c25', front: 'cinq', back: '五', ipa: '/sɛ̃k/',
                    example: 'Cinq doigts par main.', exampleTr: '每只手五根手指。' }
                ]},
                { type: 'grammar', rule: 'Combien de... ? 询问数量；回答用数字',
                  questions: [
                  { id: 'fr-g13', kind: 'single', q: '— ___ de livres ? — Trois.',
                    choices: ['Combien','Comment','Ça va'], answer: 0, explain: 'Combien 询问数量。' },
                  { id: 'fr-g14', kind: 'single', q: 'Deux + un = ___ .',
                    choices: ['trois','quatre','cinq'], answer: 0, explain: '2+1=3，法语 trois。' },
                  { id: 'fr-g15', kind: 'fill', q: 'un, deux, ___ (三)',
                    answer: 'trois', explain: '法语三为 trois。' }
                ]},
                { type: 'listening', audio: 'J\'ai deux chiens et trois chats. J\'ai cinq animaux.',
                  questions: [
                  { id: 'fr-l5', kind: 'single', q: '说话者共有几只动物？',
                    choices: ['Cinq','Deux','Trois'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'un deux trois', targetTr: '一二三', hint: '数数一到三' },
                  { target: 'quatre cinq', targetTr: '四五', hint: '数数四到五' },
                  { target: 'zéro', targetTr: '零', hint: '读零' }
                ]}
              ]
            },
            {
              id: 'fr-A1-U3-L2', title: 'Les couleurs',
              description: '颜色单词与配合',
              xpReward: 20, requires: ['fr-A1-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c26', front: 'rouge', back: '红色', ipa: '/ʁuʒ/',
                    example: 'La pomme est rouge.', exampleTr: '苹果是红色的。' },
                  { id: 'fr-c27', front: 'bleu', back: '蓝色', ipa: '/blø/',
                    example: 'Le ciel est bleu.', exampleTr: '天空是蓝色的。' },
                  { id: 'fr-c28', front: 'vert', back: '绿色', ipa: '/vɛʁ/',
                    example: 'L\'herbe est verte.', exampleTr: '草是绿色的。' },
                  { id: 'fr-c29', front: 'jaune', back: '黄色', ipa: '/ʒon/',
                    example: 'Le soleil est jaune.', exampleTr: '太阳是黄色的。' },
                  { id: 'fr-c30', front: 'blanc', back: '白色', ipa: '/blɑ̃/',
                    example: 'La neige est blanche.', exampleTr: '雪是白色的。' }
                ]},
                { type: 'grammar', rule: '形容词性数配合：阳性单数 / 阴性 +e / 复数 +s',
                  questions: [
                  { id: 'fr-g16', kind: 'single', q: 'La pomme est ___. (rouge)',
                    choices: ['rouge','rouges','rouge '], answer: 0, explain: 'rouge 两性同形。' },
                  { id: 'fr-g17', kind: 'single', q: 'Le ciel est ___. (bleu)',
                    choices: ['bleu','bleue','rouge'], answer: 0, explain: 'bleu 修饰阳性名词 ciel。' },
                  { id: 'fr-g18', kind: 'fill', q: 'Les feuilles sont ___ (绿色，阴性复数).',
                    answer: 'vertes', explain: '阴性复数加 +es：vert -> verte -> vertes。' }
                ]},
                { type: 'listening', audio: 'J\'aime le rouge et le bleu. Le ciel est bleu, l\'herbe est verte.',
                  questions: [
                  { id: 'fr-l6', kind: 'single', q: '天空是什么颜色？',
                    choices: ['Bleu','Rouge','Vert'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Le ciel est bleu', targetTr: '天空是蓝色的', hint: '描述颜色' },
                  { target: 'La pomme est rouge', targetTr: '苹果是红色的', hint: '描述颜色' },
                  { target: 'La neige est blanche', targetTr: '雪是白色的', hint: '描述颜色' }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'fr-A2', code: 'A2', name: '初级',
      description: '系动词、家庭、食物、问路与过去/将来时',
      units: [
        {
          id: 'fr-A2-U1', title: 'Être & Avoir', subtitle: '系动词',
          icon: 'verb', color: '#8B5CF6',
          lessons: [
            {
              id: 'fr-A2-U1-L1', title: 'Être et Avoir',
              description: '掌握 être 与 avoir 的现在时变位',
              xpReward: 25, requires: ['fr-A1-U3-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c31', front: 'être', back: '是', ipa: '/ɛtʁ/',
                    example: 'Je suis étudiant.', exampleTr: '我是学生。' },
                  { id: 'fr-c32', front: 'avoir', back: '有', ipa: '/a.vwaʁ/',
                    example: 'J\'ai un livre.', exampleTr: '我有一本书。' },
                  { id: 'fr-c33', front: 'je suis', back: '我是', ipa: '/ʒə.sɥi/',
                    example: 'Je suis français.', exampleTr: '我是法国人。' },
                  { id: 'fr-c34', front: 'j\'ai', back: '我有', ipa: '/ʒe/',
                    example: 'J\'ai vingt ans.', exampleTr: '我二十岁。' },
                  { id: 'fr-c35', front: 'nous', back: '我们', ipa: '/nu/',
                    example: 'Nous sommes amis.', exampleTr: '我们是朋友。' }
                ]},
                { type: 'grammar', rule: 'être: je suis / tu es / il est / nous sommes；avoir: j\'ai / tu as / il a / nous avons',
                  questions: [
                  { id: 'fr-g19', kind: 'single', q: 'Je ___ étudiant.',
                    choices: ['suis','est','ai'], answer: 0, explain: 'être 第一人称 je suis。' },
                  { id: 'fr-g20', kind: 'single', q: 'Tu ___ vingt ans.',
                    choices: ['as','a','est'], answer: 0, explain: 'avoir 第二人称 tu as。' },
                  { id: 'fr-g21', kind: 'fill', q: 'Il ___ français. (être)',
                    answer: 'est', explain: 'être 第三人称 il est。' }
                ]},
                { type: 'listening', audio: 'Je suis Marie. J\'ai vingt ans. Je suis française.',
                  questions: [
                  { id: 'fr-l7', kind: 'single', q: 'Marie 多少岁？',
                    choices: ['Vingt ans','Dix ans','Trente ans'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Je suis Marie', targetTr: '我是 Marie', hint: '自我介绍' },
                  { target: 'J\'ai vingt ans', targetTr: '我二十岁', hint: '表达年龄' },
                  { target: 'Nous sommes amis', targetTr: '我们是朋友', hint: '复数主语' }
                ]}
              ]
            },
            {
              id: 'fr-A2-U1-L2', title: 'Ma famille',
              description: '家庭成员称呼与主有词',
              xpReward: 25, requires: ['fr-A2-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c36', front: 'père', back: '父亲', ipa: '/pɛʁ/',
                    example: 'Mon père est grand.', exampleTr: '我父亲很高。' },
                  { id: 'fr-c37', front: 'mère', back: '母亲', ipa: '/mɛʁ/',
                    example: 'Ma mère est gentille.', exampleTr: '我母亲很善良。' },
                  { id: 'fr-c38', front: 'frère', back: '兄弟', ipa: '/fʁɛʁ/',
                    example: 'J\'ai un frère.', exampleTr: '我有一个兄弟。' },
                  { id: 'fr-c39', front: 'sœur', back: '姐妹', ipa: '/sœʁ/',
                    example: 'Ma sœur est jeune.', exampleTr: '我妹妹还小。' },
                  { id: 'fr-c40', front: 'famille', back: '家庭', ipa: '/fa.mij/',
                    example: 'J\'aime ma famille.', exampleTr: '我爱我的家庭。' }
                ]},
                { type: 'grammar', rule: '主有形容词：mon（阳性）/ ma（阴性）/ mes（复数）',
                  questions: [
                  { id: 'fr-g22', kind: 'single', q: '___ père est grand.',
                    choices: ['Mon','Ma','Mes'], answer: 0, explain: 'mon 修饰阳性单数名词。' },
                  { id: 'fr-g23', kind: 'single', q: '___ mère est gentille.',
                    choices: ['Mon','Ma','Mes'], answer: 1, explain: 'ma 修饰阴性单数名词。' },
                  { id: 'fr-g24', kind: 'fill', q: '___ parents habitent à Paris. (我的)',
                    answer: 'Mes', explain: 'mes 修饰复数名词 parents。' }
                ]},
                { type: 'listening', audio: 'J\'ai un père et une mère. J\'ai aussi un frère et une sœur.',
                  questions: [
                  { id: 'fr-l8', kind: 'single', q: '说话者有几个兄弟姐妹？',
                    choices: ['Deux','Un','Trois'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Mon père', targetTr: '我的父亲', hint: '介绍家人' },
                  { target: 'Ma mère', targetTr: '我的母亲', hint: '介绍家人' },
                  { target: 'Ma sœur', targetTr: '我的姐妹', hint: '介绍家人' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'fr-A2-U2', title: 'La vie quotidienne', subtitle: '日常生活',
          icon: 'food', color: '#00B8A9',
          lessons: [
            {
              id: 'fr-A2-U2-L1', title: 'La nourriture',
              description: '食物词汇与部分冠词',
              xpReward: 25, requires: ['fr-A2-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c41', front: 'pain', back: '面包', ipa: '/pɛ̃/',
                    example: 'Je mange du pain.', exampleTr: '我吃面包。' },
                  { id: 'fr-c42', front: 'eau', back: '水', ipa: '/o/',
                    example: 'Je bois de l\'eau.', exampleTr: '我喝水。' },
                  { id: 'fr-c43', front: 'fromage', back: '奶酪', ipa: '/fʁɔ.maʒ/',
                    example: 'Le fromage français est bon.', exampleTr: '法国奶酪很好。' },
                  { id: 'fr-c44', front: 'café', back: '咖啡', ipa: '/ka.fe/',
                    example: 'Un café, s\'il vous plaît.', exampleTr: '请来一杯咖啡。' },
                  { id: 'fr-c45', front: 'manger', back: '吃', ipa: '/mɑ̃.ʒe/',
                    example: 'Je mange à midi.', exampleTr: '我中午吃饭。' }
                ]},
                { type: 'grammar', rule: '部分冠词：du（阳性）/ de la（阴性）/ de l\'（元音前）',
                  questions: [
                  { id: 'fr-g25', kind: 'single', q: 'Je mange ___ pain.',
                    choices: ['du','de la','le'], answer: 0, explain: 'du 用于阳性不可数名词。' },
                  { id: 'fr-g26', kind: 'single', q: 'Je bois ___ eau.',
                    choices: ['du','de l\'','le'], answer: 1, explain: 'de l\' 用于元音开头的不可数名词。' },
                  { id: 'fr-g27', kind: 'fill', q: 'Je voudrais ___ café. (一杯)',
                    answer: 'un', explain: '可数名词用不定冠词 un/une。' }
                ]},
                { type: 'listening', audio: 'Pour le petit-déjeuner, je mange du pain et je bois du café.',
                  questions: [
                  { id: 'fr-l9', kind: 'single', q: '早餐吃了什么？',
                    choices: ['Pain et café','Fromage','Eau'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Je mange du pain', targetTr: '我吃面包', hint: '表达饮食' },
                  { target: 'Je bois du café', targetTr: '我喝咖啡', hint: '表达饮食' },
                  { target: 'Je voudrais un café', targetTr: '我想要一杯咖啡', hint: '点餐' }
                ]}
              ]
            },
            {
              id: 'fr-A2-U2-L2', title: 'Demander son chemin',
              description: '问路与方位',
              xpReward: 25, requires: ['fr-A2-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c46', front: 'gauche', back: '左边', ipa: '/ɡoʃ/',
                    example: 'Tournez à gauche.', exampleTr: '左转。' },
                  { id: 'fr-c47', front: 'droite', back: '右边', ipa: '/dʁwat/',
                    example: 'À votre droite.', exampleTr: '在您的右边。' },
                  { id: 'fr-c48', front: 'rue', back: '街道', ipa: '/ʁy/',
                    example: 'Cette rue est longue.', exampleTr: '这条街很长。' },
                  { id: 'fr-c49', front: 'où', back: '哪里', ipa: '/u/',
                    example: 'Où est la gare ?', exampleTr: '火车站在哪？' },
                  { id: 'fr-c50', front: 'aller', back: '去/走', ipa: '/a.le/',
                    example: 'Allez tout droit.', exampleTr: '直走。' }
                ]},
                { type: 'grammar', rule: 'Où est... ? 在哪里；Tournez à gauche / à droite 左/右转',
                  questions: [
                  { id: 'fr-g28', kind: 'single', q: '___ la gare, s\'il vous plaît ?',
                    choices: ['Où est','Où es','Comment'], answer: 0, explain: 'Où est 询问单数地点。' },
                  { id: 'fr-g29', kind: 'single', q: 'Tournez à ___. (左)',
                    choices: ['gauche','droite','rue'], answer: 0, explain: 'à gauche 左转。' },
                  { id: 'fr-g30', kind: 'fill', q: 'Allez tout ___ (直).',
                    answer: 'droit', explain: 'tout droit 直走，注意 droit 不带 e。' }
                ]},
                { type: 'listening', audio: 'Pardon, où est la gare ? — Allez tout droit, puis tournez à droite. La gare est à gauche.',
                  questions: [
                  { id: 'fr-l10', kind: 'single', q: '应该先往哪走？',
                    choices: ['Tout droit','À gauche','À droite'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Où est la gare', targetTr: '火车站在哪', hint: '问路' },
                  { target: 'Tournez à gauche', targetTr: '左转', hint: '指路' },
                  { target: 'Allez tout droit', targetTr: '直走', hint: '指路' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'fr-A2-U3', title: 'Temps & Tenses', subtitle: '时间与天气',
          icon: 'clock', color: '#FF6A1A',
          lessons: [
            {
              id: 'fr-A2-U3-L1', title: 'Le passé composé',
              description: '复合过去时：avoir/être + 过去分词',
              xpReward: 25, requires: ['fr-A2-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c51', front: 'hier', back: '昨天', ipa: '/jɛʁ/',
                    example: 'Hier, j\'ai travaillé.', exampleTr: '昨天我工作了。' },
                  { id: 'fr-c52', front: 'mangé', back: '吃过（过去分词）', ipa: '/mɑ̃.ʒe/',
                    example: 'J\'ai mangé à midi.', exampleTr: '我中午吃了饭。' },
                  { id: 'fr-c53', front: 'fait', back: '做过（过去分词）', ipa: '/fɛ/',
                    example: 'J\'ai fait mes devoirs.', exampleTr: '我做了作业。' },
                  { id: 'fr-c54', front: 'été', back: '是过（过去分词）', ipa: '/e.te/',
                    example: 'Il a été à Paris.', exampleTr: '他去过巴黎。' },
                  { id: 'fr-c55', front: 'passé', back: '过去', ipa: '/pa.se/',
                    example: 'Le passé composé.', exampleTr: '复合过去时。' }
                ]},
                { type: 'grammar', rule: 'passé composé = avoir/être（现在时）+ 过去分词',
                  questions: [
                  { id: 'fr-g31', kind: 'single', q: 'Hier, j\' ___ du pain.',
                    choices: ['ai mangé','mange','ai'], answer: 0, explain: 'avoir + mangé 构成复合过去时。' },
                  { id: 'fr-g32', kind: 'single', q: 'Elle ___ à Paris.',
                    choices: ['est allée','va','allé'], answer: 0, explain: 'aller 用 être 作助动词，过去分词性数配合。' },
                  { id: 'fr-g33', kind: 'fill', q: 'Nous ___ un film. (avoir + vu)',
                    answer: 'avons vu', explain: 'nous avons + 过去分词 vu。' }
                ]},
                { type: 'listening', audio: 'Hier, j\'ai mangé au restaurant. J\'ai bu du vin aussi.',
                  questions: [
                  { id: 'fr-l11', kind: 'single', q: '昨天说话者在哪里吃饭？',
                    choices: ['Au restaurant','À la maison','À l\'école'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'J\'ai mangé', targetTr: '我吃了', hint: '描述过去' },
                  { target: 'Hier', targetTr: '昨天', hint: '时间副词' },
                  { target: 'J\'ai fait mes devoirs', targetTr: '我做了作业', hint: '描述过去' }
                ]}
              ]
            },
            {
              id: 'fr-A2-U3-L2', title: 'Le futur proche',
              description: '近将来时：aller + 不定式',
              xpReward: 25, requires: ['fr-A2-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'fr-c56', front: 'demain', back: '明天', ipa: '/də.mɛ̃/',
                    example: 'Demain, je vais partir.', exampleTr: '明天我要出发。' },
                  { id: 'fr-c57', front: 'aller', back: '将要（助动词）', ipa: '/a.le/',
                    example: 'Je vais manger.', exampleTr: '我将要吃饭。' },
                  { id: 'fr-c58', front: 'prochain', back: '下一个', ipa: '/pʁɔ.ʃɛ̃/',
                    example: 'Le train prochain.', exampleTr: '下一班火车。' },
                  { id: 'fr-c59', front: 'bientôt', back: '不久', ipa: '/bjɛ̃.to/',
                    example: 'À bientôt !', exampleTr: '不久见！' },
                  { id: 'fr-c60', front: 'partir', back: '出发', ipa: '/paʁ.tiʁ/',
                    example: 'Je vais partir à huit heures.', exampleTr: '我八点出发。' }
                ]},
                { type: 'grammar', rule: 'futur proche = aller（现在时）+ 不定式',
                  questions: [
                  { id: 'fr-g34', kind: 'single', q: 'Je ___ manger.',
                    choices: ['vais','va','vas'], answer: 0, explain: 'je vais + 不定式。' },
                  { id: 'fr-g35', kind: 'single', q: 'Tu ___ partir ?',
                    choices: ['vas','vais','va'], answer: 0, explain: 'tu vas + 不定式。' },
                  { id: 'fr-g36', kind: 'fill', q: 'Demain, nous ___ au cinéma. (aller + 不定式)',
                    answer: 'allons', explain: 'nous allons + 不定式 aller。' }
                ]},
                { type: 'listening', audio: 'Demain, je vais partir pour Paris. Je vais prendre le train.',
                  questions: [
                  { id: 'fr-l12', kind: 'single', q: '说话者明天要去哪？',
                    choices: ['Paris','Lyon','Marseille'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Je vais manger', targetTr: '我将要吃饭', hint: '近将来时' },
                  { target: 'Demain', targetTr: '明天', hint: '时间副词' },
                  { target: 'Je vais partir', targetTr: '我将要出发', hint: '近将来时' }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
