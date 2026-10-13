/* ===== LingoGo 德语课程数据 =====
 * 结构：levels -> units -> lessons -> activities
 * 每课含 vocab/grammar/listening/speaking 四环节
 * 德语名词首字母大写；特殊字符 ä ö ü ß Ä Ö Ü
 */
window.LL = window.LL || {};
LL.courses = LL.courses || {};

LL.courses.de = {
  lang: 'de',
  label: '德语',
  flag: '🇩🇪',
  themeColor: '#FF9600',
  levels: [
    {
      id: 'de-A1', code: 'A1', name: '入门',
      description: '德语字母、问候、基础数字与颜色',
      units: [
        {
          id: 'de-A1-U1', title: 'Guten Tag', subtitle: '打招呼',
          icon: 'wave', color: '#FF9600',
          lessons: [
            {
              id: 'de-A1-U1-L1', title: 'Guten Tag!',
              description: '学会德语基础问候',
              xpReward: 20, requires: [],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c1', front: 'Hallo', back: '你好', ipa: '/ˈhalo/',
                    example: 'Hallo, wie geht es dir?', exampleTr: '你好，你怎么样？' },
                  { id: 'de-c2', front: 'Guten Tag', back: '你好（白天）', ipa: '/ˈɡuːtn̩ taːk/',
                    example: 'Guten Tag, mein Name ist Anna.', exampleTr: '你好，我叫安娜。' },
                  { id: 'de-c3', front: 'Tschüss', back: '再见', ipa: '/tʃʏs/',
                    example: 'Tschüss, bis morgen!', exampleTr: '再见，明天见！' },
                  { id: 'de-c4', front: 'Danke', back: '谢谢', ipa: '/ˈdaŋkə/',
                    example: 'Danke für deine Hilfe.', exampleTr: '谢谢你的帮助。' },
                  { id: 'de-c5', front: 'Bitte', back: '请/不客气', ipa: '/ˈbɪtə/',
                    example: 'Bitte schön.', exampleTr: '不客气。' },
                  { id: 'de-c6', front: 'Ja', back: '是的', ipa: '/jaː/',
                    example: 'Ja, ich komme.', exampleTr: '是的，我就来。' }
                ]},
                { type: 'grammar', rule: '动词 sein 变位：ich bin, du bist, er/sie/es ist',
                  questions: [
                  { id: 'de-g1', kind: 'single', q: 'Ich ___ Student.',
                    choices: ['bin','ist','sind'], answer: 0, explain: 'sein 第一人称 ich bin。' },
                  { id: 'de-g2', kind: 'single', q: 'Du ___ mein Freund.',
                    choices: ['bist','bin','ist'], answer: 0, explain: 'sein 第二人称 du bist。' },
                  { id: 'de-g3', kind: 'fill', q: 'Er ___ Lehrer. (ist/bin/bist)',
                    answer: 'ist', explain: 'sein 第三人称 er ist。' }
                ]},
                { type: 'listening', audio: 'Hallo, ich heiße Thomas. Ich komme aus Deutschland. Wie heißt du?',
                  questions: [
                  { id: 'de-l1', kind: 'single', q: 'Thomas 来自哪里？',
                    choices: ['德国','奥地利','瑞士'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Hallo', targetTr: '你好', hint: '跟读：你好' },
                  { target: 'Guten Tag', targetTr: '你好', hint: '白天问候' },
                  { target: 'Tschüss', targetTr: '再见', hint: '道别' },
                  { target: 'Danke', targetTr: '谢谢', hint: '表达感谢' }
                ]}
              ]
            },
            {
              id: 'de-A1-U1-L2', title: 'Wie geht\'s?',
              description: '询问对方近况',
              xpReward: 20, requires: ['de-A1-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c7', front: 'gut', back: '好的', ipa: '/ɡuːt/',
                    example: 'Mir geht es gut.', exampleTr: '我很好。' },
                  { id: 'de-c8', front: 'schlecht', back: '坏的', ipa: '/ʃlɛçt/',
                    example: 'Heute geht es mir schlecht.', exampleTr: '今天我感觉不好。' },
                  { id: 'de-c9', front: 'müde', back: '累的', ipa: '/ˈmyːdə/',
                    example: 'Ich bin müde.', exampleTr: '我累了。' },
                  { id: 'de-c10', front: 'krank', back: '生病的', ipa: '/kʁaŋk/',
                    example: 'Er ist krank.', exampleTr: '他病了。' },
                  { id: 'de-c11', front: 'wie', back: '怎样', ipa: '/viː/',
                    example: 'Wie geht es dir?', exampleTr: '你怎么样？' }
                ]},
                { type: 'grammar', rule: 'Wie geht es dir? 回答用 mir + geht + 形容词',
                  questions: [
                  { id: 'de-g4', kind: 'single', q: 'Wie geht es ___?',
                    choices: ['dir','du','dich'], answer: 0, explain: 'dir 是 du 的第三格。' },
                  { id: 'de-g5', kind: 'single', q: 'Mir ___ es gut.',
                    choices: ['geht','gehen','gehe'], answer: 0, explain: 'es 作形式主语，用 geht。' },
                  { id: 'de-g6', kind: 'fill', q: 'Ich bin ___ (累).',
                    answer: 'müde', explain: 'müde 表示疲惫。' }
                ]},
                { type: 'listening', audio: 'Wie geht es dir? Mir geht es gut, danke. Und dir?',
                  questions: [
                  { id: 'de-l2', kind: 'single', q: '说话者感觉如何？',
                    choices: ['很好','不好','很累'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Wie geht es dir?', targetTr: '你怎么样？', hint: '问候近况' },
                  { target: 'Mir geht es gut', targetTr: '我很好', hint: '回答近况' },
                  { target: 'Danke, gut', targetTr: '谢谢，挺好', hint: '简短回答' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'de-A1-U2', title: 'Das Alphabet', subtitle: '字母与数字',
          icon: 'abc', color: '#FFC800',
          lessons: [
            {
              id: 'de-A1-U2-L1', title: 'Das Alphabet',
              description: '学习德语字母与特殊字符',
              xpReward: 20, requires: ['de-A1-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c12', front: 'A', back: '阿', ipa: '/aː/',
                    example: 'A wie Apfel.', exampleTr: 'A 如苹果。' },
                  { id: 'de-c13', front: 'O', back: '奥', ipa: '/oː/',
                    example: 'O wie Oma.', exampleTr: 'O 如奶奶。' },
                  { id: 'de-c14', front: 'U', back: '乌', ipa: '/uː/',
                    example: 'U wie Uhr.', exampleTr: 'U 如钟表。' },
                  { id: 'de-c15', front: 'Ä', back: '艾（变元音）', ipa: '/ɛː/',
                    example: 'Ä wie Bär.', exampleTr: 'Ä 如熊。' },
                  { id: 'de-c16', front: 'Ö', back: '约（变元音）', ipa: '/øː/',
                    example: 'Ö wie Öl.', exampleTr: 'Ö 如油。' },
                  { id: 'de-c17', front: 'Ü', back: '于（变元音）', ipa: '/yː/',
                    example: 'Ü wie Übung.', exampleTr: 'Ü 如练习。' },
                  { id: 'de-c18', front: 'ß', back: '艾斯舍特', ipa: '/ɛsˈʔɛt/',
                    example: 'Straße mit ß.', exampleTr: 'Straße 带 ß。' }
                ]},
                { type: 'grammar', rule: '德语特殊字符 ä ö ü ß：ß 用于长元音或双元音后',
                  questions: [
                  { id: 'de-g7', kind: 'single', q: '___ wie Apfel.',
                    choices: ['A','Ä','O'], answer: 0, explain: 'A 是基础元音字母。' },
                  { id: 'de-g8', kind: 'single', q: 'Stra___e 用哪个字符？',
                    choices: ['ß','ss','s'], answer: 0, explain: 'ß 在长元音后使用。' },
                  { id: 'de-g9', kind: 'fill', q: 'Ü ___ Übung. (wie/und/ist)',
                    answer: 'wie', explain: 'wie 表示"如、像"。' }
                ]},
                { type: 'listening', audio: 'Ich buchstabiere meinen Namen: M-ü-l-l-e-r. Müller mit Ü und ß.',
                  questions: [
                  { id: 'de-l3', kind: 'single', q: '名字中包含哪个特殊字符？',
                    choices: ['Ü und ß','Ä','Ö'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'A, O, U', targetTr: '阿 奥乌', hint: '跟读元音' },
                  { target: 'Ä, Ö, Ü', targetTr: '艾 约于', hint: '跟读变元音' },
                  { target: 'ß', targetTr: '艾斯舍特', hint: '跟读特殊字符' }
                ]}
              ]
            },
            {
              id: 'de-A1-U2-L2', title: 'Die Zahlen 0-10',
              description: '学会从零数到十',
              xpReward: 20, requires: ['de-A1-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c19', front: 'eins', back: '一', ipa: '/aɪ̯ns/',
                    example: 'Ich habe eins.', exampleTr: '我有一个。' },
                  { id: 'de-c20', front: 'zwei', back: '二', ipa: '/tsvaɪ̯/',
                    example: 'Zwei Äpfel.', exampleTr: '两个苹果。' },
                  { id: 'de-c21', front: 'drei', back: '三', ipa: '/dʁaɪ̯/',
                    example: 'Drei Bücher.', exampleTr: '三本书。' },
                  { id: 'de-c22', front: 'vier', back: '四', ipa: '/fiːɐ̯/',
                    example: 'Vier Stühle.', exampleTr: '四把椅子。' },
                  { id: 'de-c23', front: 'fünf', back: '五', ipa: '/fʏnf/',
                    example: 'Fünf Stifte.', exampleTr: '五支笔。' },
                  { id: 'de-c24', front: 'zehn', back: '十', ipa: '/tseːn/',
                    example: 'Zehn Finger.', exampleTr: '十个手指。' }
                ]},
                { type: 'grammar', rule: '德语数字 0-10：null/ eins/ zwei/ drei/ vier/ fünf/ zehn',
                  questions: [
                  { id: 'de-g10', kind: 'single', q: '2 = ___',
                    choices: ['zwei','drei','eins'], answer: 0, explain: 'zwei 是 2。' },
                  { id: 'de-g11', kind: 'single', q: '5 = ___',
                    choices: ['fünf','vier','zehn'], answer: 0, explain: 'fünf 是 5。' },
                  { id: 'de-g12', kind: 'fill', q: '10 = ___ (zehn/fünf/vier)',
                    answer: 'zehn', explain: 'zehn 是 10。' }
                ]},
                { type: 'listening', audio: 'Ich habe zwei Katzen und drei Hunde. Wie viele Tiere hast du?',
                  questions: [
                  { id: 'de-l4', kind: 'single', q: '说话者有几只猫？',
                    choices: ['两只','三只','五只'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'eins, zwei, drei', targetTr: '一二三', hint: '数数一到三' },
                  { target: 'vier, fünf', targetTr: '四五', hint: '数数四五' },
                  { target: 'zehn', targetTr: '十', hint: '跟读十' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'de-A1-U3', title: 'Vorstellen und Farben', subtitle: '自我与颜色',
          icon: 'palette', color: '#58CC02',
          lessons: [
            {
              id: 'de-A1-U3-L1', title: 'Ich heiße...',
              description: '介绍自己的名字与来历',
              xpReward: 20, requires: ['de-A1-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c25', front: 'heißen', back: '名叫', ipa: '/ˈhaɪ̯sn̩/',
                    example: 'Ich heiße Anna.', exampleTr: '我叫安娜。' },
                  { id: 'de-c26', front: 'der Name', back: '名字', ipa: '/ˈnaːmə/',
                    example: 'Mein Name ist Tom.', exampleTr: '我叫汤姆。' },
                  { id: 'de-c27', front: 'kommen', back: '来自', ipa: '/ˈkɔmən/',
                    example: 'Ich komme aus China.', exampleTr: '我来自中国。' },
                  { id: 'de-c28', front: 'wohnen', back: '居住', ipa: '/ˈvoːnən/',
                    example: 'Ich wohne in Berlin.', exampleTr: '我住在柏林。' },
                  { id: 'de-c29', front: 'der Student', back: '学生', ipa: '/ʃtuˈdɛnt/',
                    example: 'Ich bin Student.', exampleTr: '我是学生。' },
                  { id: 'de-c30', front: 'die Jahre', back: '年/岁', ipa: '/ˈjaːʁə/',
                    example: 'Ich bin zwanzig Jahre alt.', exampleTr: '我二十岁。' }
                ]},
                { type: 'grammar', rule: '动词变位：heißen→ich heiße, kommen→ich komme, wohnen→ich wohne',
                  questions: [
                  { id: 'de-g13', kind: 'single', q: 'Ich ___ Anna.',
                    choices: ['heiße','heißt','heißen'], answer: 0, explain: 'heißen 第一人称 ich heiße。' },
                  { id: 'de-g14', kind: 'single', q: 'Ich ___ aus China.',
                    choices: ['komme','kommt','kommen'], answer: 0, explain: 'kommen 第一人称 ich komme。' },
                  { id: 'de-g15', kind: 'fill', q: 'Ich ___ in Berlin. (wohne/wohnt/wohnen)',
                    answer: 'wohne', explain: 'wohnen 第一人称 ich wohne。' }
                ]},
                { type: 'listening', audio: 'Hallo, ich heiße Lisa. Ich komme aus Österreich und wohne in Wien.',
                  questions: [
                  { id: 'de-l5', kind: 'single', q: 'Lisa 来自哪里？',
                    choices: ['奥地利','德国','瑞士'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Ich heiße Anna', targetTr: '我叫安娜', hint: '介绍名字' },
                  { target: 'Ich komme aus China', targetTr: '我来自中国', hint: '介绍来源' },
                  { target: 'Ich wohne in Berlin', targetTr: '我住在柏林', hint: '介绍住址' }
                ]}
              ]
            },
            {
              id: 'de-A1-U3-L2', title: 'Die Farben',
              description: '颜色单词与名词性别',
              xpReward: 20, requires: ['de-A1-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c31', front: 'rot', back: '红色', ipa: '/ʁoːt/',
                    example: 'Der Apfel ist rot.', exampleTr: '苹果是红色的。' },
                  { id: 'de-c32', front: 'blau', back: '蓝色', ipa: '/blaʊ̯/',
                    example: 'Der Himmel ist blau.', exampleTr: '天空是蓝色的。' },
                  { id: 'de-c33', front: 'grün', back: '绿色', ipa: '/ɡʁyːn/',
                    example: 'Das Gras ist grün.', exampleTr: '草是绿色的。' },
                  { id: 'de-c34', front: 'gelb', back: '黄色', ipa: '/ɡɛlp/',
                    example: 'Die Sonne ist gelb.', exampleTr: '太阳是黄色的。' },
                  { id: 'de-c35', front: 'schwarz', back: '黑色', ipa: '/ʃvaʁt͡s/',
                    example: 'Meine Katze ist schwarz.', exampleTr: '我的猫是黑色的。' },
                  { id: 'de-c36', front: 'weiß', back: '白色', ipa: '/vaɪ̯s/',
                    example: 'Die Wand ist weiß.', exampleTr: '墙是白色的。' }
                ]},
                { type: 'grammar', rule: '名词性别：der（阳性）/die（阴性）/das（中性）',
                  questions: [
                  { id: 'de-g16', kind: 'single', q: '___ Apfel ist rot.',
                    choices: ['Der','Die','Das'], answer: 0, explain: 'Apfel 是阳性 der。' },
                  { id: 'de-g17', kind: 'single', q: '___ Sonne ist gelb.',
                    choices: ['Die','Der','Das'], answer: 0, explain: 'Sonne 是阴性 die。' },
                  { id: 'de-g18', kind: 'fill', q: '___ Gras ist grün. (Das/Der/Die)',
                    answer: 'Das', explain: 'Gras 是中性 das。' }
                ]},
                { type: 'listening', audio: 'Welche Farbe hat der Apfel? Der Apfel ist rot. Welche Farbe hat der Himmel? Der Himmel ist blau.',
                  questions: [
                  { id: 'de-l6', kind: 'single', q: '苹果是什么颜色？',
                    choices: ['红色','蓝色','绿色'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Der Apfel ist rot', targetTr: '苹果是红色的', hint: '描述颜色' },
                  { target: 'Der Himmel ist blau', targetTr: '天空是蓝色的', hint: '描述颜色' },
                  { target: 'Das Gras ist grün', targetTr: '草是绿色的', hint: '描述颜色' }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'de-A2', code: 'A2', name: '初级',
      description: '系动词、日常生活表达与基础时态',
      units: [
        {
          id: 'de-A2-U1', title: 'Sein und Haben', subtitle: '系动词与家庭',
          icon: 'verb', color: '#8B5CF6',
          lessons: [
            {
              id: 'de-A2-U1-L1', title: 'Sein und Haben',
              description: '系动词与助动词的变位',
              xpReward: 25, requires: ['de-A1-U3-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c37', front: 'sein', back: '是', ipa: '/zaɪ̯n/',
                    example: 'Ich bin Student.', exampleTr: '我是学生。' },
                  { id: 'de-c38', front: 'haben', back: '有', ipa: '/ˈhaːbn̩/',
                    example: 'Ich habe ein Auto.', exampleTr: '我有一辆车。' },
                  { id: 'de-c39', front: 'werden', back: '成为', ipa: '/ˈveːʁdn̩/',
                    example: 'Ich werde Lehrer.', exampleTr: '我将成为老师。' },
                  { id: 'de-c40', front: 'können', back: '能', ipa: '/ˈkœnən/',
                    example: 'Ich kann Deutsch.', exampleTr: '我会德语。' },
                  { id: 'de-c41', front: 'müssen', back: '必须', ipa: '/ˈmʏsn̩/',
                    example: 'Ich muss lernen.', exampleTr: '我必须学习。' },
                  { id: 'de-c42', front: 'wollen', back: '想', ipa: '/ˈvɔlən/',
                    example: 'Ich will essen.', exampleTr: '我想吃。' }
                ]},
                { type: 'grammar', rule: 'sein 与 haben 现在时变位：ich bin/habe, wir sind/haben',
                  questions: [
                  { id: 'de-g19', kind: 'single', q: 'Wir ___ Studenten.',
                    choices: ['sind','bin','ist'], answer: 0, explain: 'sein 第一人称复数 wir sind。' },
                  { id: 'de-g20', kind: 'single', q: 'Ihr ___ ein Auto.',
                    choices: ['habt','habe','hat'], answer: 0, explain: 'haben 第二人称复数 ihr habt。' },
                  { id: 'de-g21', kind: 'fill', q: 'Sie ___ Lehrerin. (ist/sind/bin)',
                    answer: 'ist', explain: 'sein 第三人称单数 sie ist。' }
                ]},
                { type: 'listening', audio: 'Wir sind Studenten. Wir haben ein Auto. Wir können nach Berlin fahren.',
                  questions: [
                  { id: 'de-l7', kind: 'single', q: '说话者们有什么？',
                    choices: ['一辆车','两辆车','没有车'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Ich bin Student', targetTr: '我是学生', hint: '用 sein 介绍' },
                  { target: 'Ich habe ein Auto', targetTr: '我有一辆车', hint: '用 haben 介绍' },
                  { target: 'Wir können fahren', targetTr: '我们能开去', hint: '情态动词' }
                ]}
              ]
            },
            {
              id: 'de-A2-U1-L2', title: 'Meine Familie',
              description: '家庭成员与物主代词',
              xpReward: 25, requires: ['de-A2-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c43', front: 'der Vater', back: '父亲', ipa: '/ˈfaːtɐ/',
                    example: 'Mein Vater ist groß.', exampleTr: '我父亲很高。' },
                  { id: 'de-c44', front: 'die Mutter', back: '母亲', ipa: '/ˈmʊtɐ/',
                    example: 'Meine Mutter ist nett.', exampleTr: '我母亲很和蔼。' },
                  { id: 'de-c45', front: 'der Bruder', back: '兄弟', ipa: '/ˈbʁuːdɐ/',
                    example: 'Ich habe einen Bruder.', exampleTr: '我有一个兄弟。' },
                  { id: 'de-c46', front: 'die Schwester', back: '姐妹', ipa: '/ˈʃvɛstɐ/',
                    example: 'Meine Schwester ist jung.', exampleTr: '我妹妹还小。' },
                  { id: 'de-c47', front: 'der Großvater', back: '祖父', ipa: '/ˈɡʁoːsfaːtɐ/',
                    example: 'Mein Großvater ist alt.', exampleTr: '我祖父年纪大了。' },
                  { id: 'de-c48', front: 'die Familie', back: '家庭', ipa: '/faˈmiːli̯ə/',
                    example: 'Ich liebe meine Familie.', exampleTr: '我爱我的家庭。' }
                ]},
                { type: 'grammar', rule: '物主代词 mein/meine：阳性用 mein，阴性用 meine',
                  questions: [
                  { id: 'de-g22', kind: 'single', q: 'Das ist ___ Vater.',
                    choices: ['mein','meine','meinen'], answer: 0, explain: 'Vater 阳性，用 mein。' },
                  { id: 'de-g23', kind: 'single', q: 'Das ist ___ Mutter.',
                    choices: ['meine','mein','meinen'], answer: 0, explain: 'Mutter 阴性，用 meine。' },
                  { id: 'de-g24', kind: 'fill', q: 'Das ist ___ Familie. (meine/mein/meinen)',
                    answer: 'meine', explain: 'Familie 阴性，用 meine。' }
                ]},
                { type: 'listening', audio: 'Das ist mein Vater und das ist meine Mutter. Ich habe einen Bruder und eine Schwester.',
                  questions: [
                  { id: 'de-l8', kind: 'single', q: '说话者有几个兄弟姐妹？',
                    choices: ['两个','一个','三个'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Das ist mein Vater', targetTr: '这是我父亲', hint: '介绍家人' },
                  { target: 'Das ist meine Mutter', targetTr: '这是我母亲', hint: '介绍家人' },
                  { target: 'Ich liebe meine Familie', targetTr: '我爱我的家庭', hint: '表达感情' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'de-A2-U2', title: 'Alltag', subtitle: '日常生活',
          icon: 'home', color: '#00B8A9',
          lessons: [
            {
              id: 'de-A2-U2-L1', title: 'Das Essen',
              description: '食物词汇与饮食动词',
              xpReward: 25, requires: ['de-A2-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c49', front: 'das Brot', back: '面包', ipa: '/bʁoːt/',
                    example: 'Ich esse Brot.', exampleTr: '我吃面包。' },
                  { id: 'de-c50', front: 'das Wasser', back: '水', ipa: '/ˈvasɐ/',
                    example: 'Ich trinke Wasser.', exampleTr: '我喝水。' },
                  { id: 'de-c51', front: 'der Apfel', back: '苹果', ipa: '/ˈapfl̩/',
                    example: 'Ich mag Äpfel.', exampleTr: '我喜欢苹果。' },
                  { id: 'de-c52', front: 'die Milch', back: '牛奶', ipa: '/mɪlç/',
                    example: 'Ich trinke Milch.', exampleTr: '我喝牛奶。' },
                  { id: 'de-c53', front: 'der Kaffee', back: '咖啡', ipa: '/ˈkafeː/',
                    example: 'Eine Tasse Kaffee.', exampleTr: '一杯咖啡。' },
                  { id: 'de-c54', front: 'essen', back: '吃', ipa: '/ˈɛsn̩/',
                    example: 'Ich esse Frühstück.', exampleTr: '我吃早餐。' },
                  { id: 'de-c55', front: 'trinken', back: '喝', ipa: '/ˈtʁɪŋkn̩/',
                    example: 'Ich trinke Tee.', exampleTr: '我喝茶。' }
                ]},
                { type: 'grammar', rule: '动词 essen/trinken 变位：ich esse/trinke, er isst/trinkt',
                  questions: [
                  { id: 'de-g25', kind: 'single', q: 'Ich ___ Brot.',
                    choices: ['esse','isst','essen'], answer: 0, explain: 'essen 第一人称 ich esse。' },
                  { id: 'de-g26', kind: 'single', q: 'Er ___ Wasser.',
                    choices: ['trinkt','trinke','trinken'], answer: 0, explain: 'trinken 第三人称 er trinkt。' },
                  { id: 'de-g27', kind: 'fill', q: 'Wir ___ Kaffee. (trinken/trinkt/trinke)',
                    answer: 'trinken', explain: 'trinken 第一人称复数 wir trinken。' }
                ]},
                { type: 'listening', audio: 'Ich esse Brot und trinke Milch zum Frühstück. Ich mag auch Äpfel.',
                  questions: [
                  { id: 'de-l9', kind: 'single', q: '说话者早餐吃了什么？',
                    choices: ['面包和牛奶','只有苹果','水'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Ich esse Brot', targetTr: '我吃面包', hint: '描述饮食' },
                  { target: 'Ich trinke Milch', targetTr: '我喝牛奶', hint: '描述饮食' },
                  { target: 'Ich mag Äpfel', targetTr: '我喜欢苹果', hint: '表达喜好' }
                ]}
              ]
            },
            {
              id: 'de-A2-U2-L2', title: 'Nach dem Weg fragen',
              description: '问路与方位词',
              xpReward: 25, requires: ['de-A2-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c56', front: 'links', back: '左边', ipa: '/lɪŋks/',
                    example: 'Biegen Sie links ab.', exampleTr: '请左转。' },
                  { id: 'de-c57', front: 'rechts', back: '右边', ipa: '/ʁɛçts/',
                    example: 'Biegen Sie rechts ab.', exampleTr: '请右转。' },
                  { id: 'de-c58', front: 'geradeaus', back: '直走', ipa: '/ɡəˈdeːʁəʔaʊ̯s/',
                    example: 'Gehen Sie geradeaus.', exampleTr: '请直走。' },
                  { id: 'de-c59', front: 'die Straße', back: '街道', ipa: '/ˈʃtʁaːsə/',
                    example: 'Das ist eine große Straße.', exampleTr: '这是条大街道。' },
                  { id: 'de-c60', front: 'wo', back: '哪里', ipa: '/voː/',
                    example: 'Wo ist der Bahnhof?', exampleTr: '火车站在哪？' },
                  { id: 'de-c61', front: 'der Bahnhof', back: '火车站', ipa: '/ˈbaːnhoːf/',
                    example: 'Der Bahnhof ist da.', exampleTr: '火车站在那。' }
                ]},
                { type: 'grammar', rule: '问路 Wo ist...? 回答用方位词：geradeaus/links/rechts',
                  questions: [
                  { id: 'de-g28', kind: 'single', q: '___ ist der Bahnhof?',
                    choices: ['Wo','Was','Wie'], answer: 0, explain: 'Wo 提问地点。' },
                  { id: 'de-g29', kind: 'single', q: 'Gehen Sie ___. (直走)',
                    choices: ['geradeaus','links','rechts'], answer: 0, explain: 'geradeaus 表示直走。' },
                  { id: 'de-g30', kind: 'fill', q: 'Biegen Sie ___ ab. (rechts/links/geradeaus)',
                    answer: 'rechts', explain: 'rechts abbiegen 表示右转。' }
                ]},
                { type: 'listening', audio: 'Entschuldigung, wo ist der Bahnhof? Gehen Sie geradeaus und dann links. Er ist rechts.',
                  questions: [
                  { id: 'de-l10', kind: 'single', q: '应该先往哪走？',
                    choices: ['直走','左转','右转'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Wo ist der Bahnhof', targetTr: '火车站在哪', hint: '问路' },
                  { target: 'Gehen Sie geradeaus', targetTr: '请直走', hint: '指路' },
                  { target: 'Biegen Sie links ab', targetTr: '请左转', hint: '指路' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'de-A2-U3', title: 'Zeitformen', subtitle: '时态',
          icon: 'clock', color: '#FF4B4B',
          lessons: [
            {
              id: 'de-A2-U3-L1', title: 'Das Perfekt',
              description: '完成时：haben/sein + 过去分词',
              xpReward: 25, requires: ['de-A2-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c62', front: 'gemacht', back: '做了', ipa: '/ɡəˈmɑxt/',
                    example: 'Ich habe Hausaufgaben gemacht.', exampleTr: '我做完了作业。' },
                  { id: 'de-c63', front: 'gegangen', back: '走了', ipa: '/ɡəˈɡaŋən/',
                    example: 'Ich bin nach Hause gegangen.', exampleTr: '我回家了。' },
                  { id: 'de-c64', front: 'gesehen', back: '看见了', ipa: '/ɡəˈzeːən/',
                    example: 'Ich habe den Film gesehen.', exampleTr: '我看了这部电影。' },
                  { id: 'de-c65', front: 'geschrieben', back: '写了', ipa: '/ɡəˈʃʁiːbn̩/',
                    example: 'Ich habe einen Brief geschrieben.', exampleTr: '我写了一封信。' },
                  { id: 'de-c66', front: 'gegessen', back: '吃了', ipa: '/ɡəˈɡɛsn̩/',
                    example: 'Ich habe Brot gegessen.', exampleTr: '我吃了面包。' },
                  { id: 'de-c67', front: 'getrunken', back: '喝了', ipa: '/ɡəˈtʁʊŋkn̩/',
                    example: 'Ich habe Wasser getrunken.', exampleTr: '我喝了水。' }
                ]},
                { type: 'grammar', rule: '完成时：haben/sein + 过去分词（ge- + 词干）。位移动词用 sein',
                  questions: [
                  { id: 'de-g31', kind: 'single', q: 'Ich habe Hausaufgaben ___.',
                    choices: ['gemacht','machen','macht'], answer: 0, explain: '完成时用 haben + gemacht。' },
                  { id: 'de-g32', kind: 'single', q: 'Ich bin nach Hause ___.',
                    choices: ['gegangen','gehen','geht'], answer: 0, explain: '位移动词用 sein + gegangen。' },
                  { id: 'de-g33', kind: 'fill', q: 'Ich habe den Film ___. (gesehen/sehen/sieht)',
                    answer: 'gesehen', explain: 'gesehen 是 sehen 的过去分词。' }
                ]},
                { type: 'listening', audio: 'Ich habe heute viel gemacht. Ich habe Brot gegessen, Wasser getrunken und einen Brief geschrieben.',
                  questions: [
                  { id: 'de-l11', kind: 'single', q: '说话者做了哪件事？',
                    choices: ['写信','工作','睡觉'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Ich habe gegessen', targetTr: '我吃过了', hint: '完成时' },
                  { target: 'Ich bin gegangen', targetTr: '我走了', hint: '完成时' },
                  { target: 'Ich habe gesehen', targetTr: '我看见了', hint: '完成时' }
                ]}
              ]
            },
            {
              id: 'de-A2-U3-L2', title: 'Das Futur',
              description: '将来时：werden + 动词原形',
              xpReward: 25, requires: ['de-A2-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'de-c68', front: 'werde', back: '将（我）', ipa: '/ˈveːʁdə/',
                    example: 'Ich werde lernen.', exampleTr: '我将学习。' },
                  { id: 'de-c69', front: 'morgen', back: '明天', ipa: '/ˈmɔʁɡn̩/',
                    example: 'Morgen gehe ich.', exampleTr: '明天我去。' },
                  { id: 'de-c70', front: 'bald', back: '很快', ipa: '/balt/',
                    example: 'Ich komme bald.', exampleTr: '我马上来。' },
                  { id: 'de-c71', front: 'später', back: '以后', ipa: '/ˈʃpɛːtɐ/',
                    example: 'Später essen wir.', exampleTr: '我们晚点吃。' },
                  { id: 'de-c72', front: 'nächste Woche', back: '下周', ipa: '/ˈnɛːçstə ˈvɔxə/',
                    example: 'Nächste Woche fahre ich.', exampleTr: '下周我出行。' },
                  { id: 'de-c73', front: 'die Zukunft', back: '未来', ipa: '/ˈtsuːkʊnft/',
                    example: 'In der Zukunft.', exampleTr: '在未来。' }
                ]},
                { type: 'grammar', rule: '将来时：werden + 动词原形。ich werde, wir werden, er wird',
                  questions: [
                  { id: 'de-g34', kind: 'single', q: 'Ich ___ lernen.',
                    choices: ['werde','wird','werden'], answer: 0, explain: 'werden 第一人称 ich werde。' },
                  { id: 'de-g35', kind: 'single', q: 'Wir ___ fahren.',
                    choices: ['werden','wirst','werde'], answer: 0, explain: 'werden 第一人称复数 wir werden。' },
                  { id: 'de-g36', kind: 'fill', q: 'Er ___ kommen. (wird/werde/werden)',
                    answer: 'wird', explain: 'werden 第三人称 er wird。' }
                ]},
                { type: 'listening', audio: 'Morgen werde ich nach Berlin fahren. Nächste Woche werde ich arbeiten.',
                  questions: [
                  { id: 'de-l12', kind: 'single', q: '说话者明天做什么？',
                    choices: ['去柏林','工作','休息'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Ich werde lernen', targetTr: '我将学习', hint: '将来时' },
                  { target: 'Morgen gehe ich', targetTr: '明天我去', hint: '将来计划' },
                  { target: 'Nächste Woche fahre ich', targetTr: '下周我出行', hint: '将来计划' }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
