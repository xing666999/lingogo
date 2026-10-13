/* ===== LingoGo 日语课程数据 ===== */
window.LL = window.LL || {};
LL.courses = LL.courses || {};

LL.courses.ja = {
  lang: 'ja',
  label: '日语',
  flag: '🇯🇵',
  themeColor: '#FF4B4B',
  levels: [
    {
      id: 'ja-N5', code: 'N5', name: '入门',
      description: '五十音、日常问候、基础表达',
      units: [
        {
          id: 'ja-N5-U1', title: '五十音', subtitle: '平假名',
          icon: 'kana', color: '#FF4B4B',
          lessons: [
            {
              id: 'ja-N5-U1-L1', title: 'あ行か行',
              description: '学习あいうえお和かきくけこ',
              xpReward: 20, requires: [],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ja-c1', front: 'あ', back: 'a (啊)', ipa: '/a/', example: 'あい (爱)', exampleTr: '爱' },
                  { id: 'ja-c2', front: 'い', back: 'i (一)', ipa: '/i/', example: 'いぬ (狗)', exampleTr: '狗' },
                  { id: 'ja-c3', front: 'う', back: 'u (乌)', ipa: '/ɯ/', example: 'うみ (海)', exampleTr: '海' },
                  { id: 'ja-c4', front: 'か', back: 'ka (卡)', ipa: '/ka/', example: 'かた (肩)', exampleTr: '肩' },
                  { id: 'ja-c5', front: 'き', back: 'ki (key)', ipa: '/ki/', example: 'きる (切)', exampleTr: '切' }
                ]},
                { type: 'grammar', rule: '日语语序：主语 + 宾语 + 动词（SOV）',
                  questions: [
                  { id: 'ja-g1', kind: 'single', q: '「私は学生___」填什么？',
                    choices: ['だ','の','を'], answer: 0, explain: '「だ」是断定助动词。' },
                  { id: 'ja-g2', kind: 'fill', q: '私は学生___ 。', answer: 'だ' }
                ]},
                { type: 'listening', audio: 'わたしは がくせい です。なまえは たろう です。',
                  questions: [
                  { id: 'ja-l1', kind: 'single', q: '说话者是什么身份？',
                    choices: ['学生','老师','医生'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'あ', targetTr: '啊', hint: '跟读：あ' },
                  { target: 'い', targetTr: '一', hint: '跟读：い' },
                  { target: 'う', targetTr: '乌', hint: '跟读：う' }
                ]}
              ]
            },
            {
              id: 'ja-N5-U1-L2', title: 'さ行た行',
              description: '学习さしすせそ和たちつてと',
              xpReward: 20, requires: ['ja-N5-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ja-c6', front: 'さ', back: 'sa (萨)', ipa: '/sa/', example: 'さけ (酒)', exampleTr: '酒' },
                  { id: 'ja-c7', front: 'し', back: 'shi (西)', ipa: '/ɕi/', example: 'しお (盐)', exampleTr: '盐' },
                  { id: 'ja-c8', front: 'た', back: 'ta (他)', ipa: '/ta/', example: 'たまご (蛋)', exampleTr: '鸡蛋' },
                  { id: 'ja-c9', front: 'ち', back: 'chi (七)', ipa: '/tɕi/', example: 'ちず (地图)', exampleTr: '地图' },
                  { id: 'ja-c10', front: 'つ', back: 'tsu (次)', ipa: '/tsɯ/', example: 'つき (月)', exampleTr: '月亮' }
                ]},
                { type: 'grammar', rule: '助词「は」表示主题',
                  questions: [
                  { id: 'ja-g3', kind: 'single', q: '私___ 学生 です。',
                    choices: ['は','が','を'], answer: 0, explain: '「は」表示主题。' },
                  { id: 'ja-g4', kind: 'fill', q: 'これ___ 本 です。', answer: 'は' }
                ]},
                { type: 'listening', audio: 'これは ほん です。それは えんぴつ です。',
                  questions: [
                  { id: 'ja-l2', kind: 'single', q: '这是什么的？',
                    choices: ['书','铅笔','桌子'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'これは本です', targetTr: '这是书', hint: '跟读句子' }
                ]}
              ]
            },
            {
              id: 'ja-N5-U1-L3', title: '日常挨拶',
              description: '日常问候',
              xpReward: 20, requires: ['ja-N5-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ja-c11', front: 'こんにちは', back: '你好', ipa: '/konniʧiwa/', example: 'こんにちは、田中です。', exampleTr: '你好，我叫田中。' },
                  { id: 'ja-c12', front: 'ありがとう', back: '谢谢', ipa: '/arigato/', example: 'ありがとうございます。', exampleTr: '非常感谢。' },
                  { id: 'ja-c13', front: 'おはよう', back: '早上好', ipa: '/ohajo/', example: 'おはようございます。', exampleTr: '早上好。' },
                  { id: 'ja-c14', front: 'さようなら', back: '再见', ipa: '/sajo:naɾa/', example: 'さようなら、また明日。', exampleTr: '再见，明天见。' },
                  { id: 'ja-c15', front: 'すみません', back: '对不起/劳驾', ipa: '/sumimasen/', example: 'すみません、駅はどこですか。', exampleTr: '请问，车站在哪？' }
                ]},
                { type: 'grammar', rule: '丁宁体：～です / ～ます',
                  questions: [
                  { id: 'ja-g5', kind: 'single', q: '私は学生___。 (礼貌)',
                    choices: ['だ','です','する'], answer: 1 },
                  { id: 'ja-g6', kind: 'fill', q: 'これは本___ (礼貌)。', answer: 'です' }
                ]},
                { type: 'listening', audio: 'こんにちは。はじめまして。田中です。どうぞよろしくお願いします。',
                  questions: [
                  { id: 'ja-l3', kind: 'single', q: '说话者姓什么？',
                    choices: ['田中','山田','鈴木'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'こんにちは', targetTr: '你好', hint: '问候' },
                  { target: 'ありがとうございます', targetTr: '非常感谢', hint: '感谢' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'ja-N5-U2', title: '自己紹介', subtitle: '自我介绍',
          icon: 'intro', color: '#FF9600',
          lessons: [
            {
              id: 'ja-N5-U2-L1', title: '私は…',
              description: '自我介绍',
              xpReward: 20, requires: ['ja-N5-U1-L3'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ja-c16', front: '私', back: '我', ipa: '/wataɕi/', example: '私は田中です。', exampleTr: '我是田中。' },
                  { id: 'ja-c17', front: '名前', back: '名字', ipa: '/namae/', example: '名前は何ですか。', exampleTr: '你叫什么名字？' },
                  { id: 'ja-c18', front: '学生', back: '学生', ipa: '/gakuse/', example: '私は学生です。', exampleTr: '我是学生。' },
                  { id: 'ja-c19', front: '会社員', back: '公司职员', ipa: '/kaishaɪɴ/', example: '彼は会社員です。', exampleTr: '他是公司职员。' },
                  { id: 'ja-c20', front: '先生', back: '老师', ipa: '/se:nseɴ/', example: 'あの方は先生です。', exampleTr: '那位是老师。' }
                ]},
                { type: 'grammar', rule: 'AはBです：A是B',
                  questions: [
                  { id: 'ja-g7', kind: 'single', q: '私___田中___。 (是田中)',
                    choices: ['は/です','が/だ','を/する'], answer: 0 },
                  { id: 'ja-g8', kind: 'fill', q: '私は学生___。', answer: 'です' }
                ]},
                { type: 'listening', audio: 'はじめまして。私の名前は田中です。会社員です。どうぞよろしくお願いします。',
                  questions: [
                  { id: 'ja-l4', kind: 'single', q: '说话者是什么职业？',
                    choices: ['公司职员','老师','学生'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '私は学生です', targetTr: '我是学生', hint: '自我介绍' }
                ]}
              ]
            },
            {
              id: 'ja-N5-U2-L2', title: '数字',
              description: '日语数字',
              xpReward: 20, requires: ['ja-N5-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ja-c21', front: '一', back: '一', ipa: '/iʧi/', example: '一つ', exampleTr: '一个' },
                  { id: 'ja-c22', front: '二', back: '二', ipa: '/ni/', example: '二人', exampleTr: '两人' },
                  { id: 'ja-c23', front: '三', back: '三', ipa: '/saɴ/', example: '三日', exampleTr: '三天' },
                  { id: 'ja-c24', front: '四', back: '四', ipa: '/jon/', example: '四つ', exampleTr: '四个' },
                  { id: 'ja-c25', front: '五', back: '五', ipa: '/go/', example: '五分', exampleTr: '五分钟' }
                ]},
                { type: 'grammar', rule: '个数用「～つ」：一つ、二つ...',
                  questions: [
                  { id: 'ja-g9', kind: 'single', q: '「三个」用日语怎么说？',
                    choices: ['三つ','三','三個'], answer: 0 },
                  { id: 'ja-g10', kind: 'fill', q: '一つ、二つ、___。', answer: '三つ' }
                ]},
                { type: 'listening', audio: '私は兄弟が二人います。姉と弟です。',
                  questions: [
                  { id: 'ja-l5', kind: 'single', q: '说话者有几个兄弟姐妹？',
                    choices: ['两个','三个','一个'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'いち、に、さん', targetTr: '一、二、三', hint: '数数' }
                ]}
              ]
            },
            {
              id: 'ja-N5-U2-L3', title: '時間',
              description: '时间表达',
              xpReward: 20, requires: ['ja-N5-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ja-c26', front: '時間', back: '时间', ipa: '/ʤikaɴ/', example: '今何時ですか。', exampleTr: '现在几点？' },
                  { id: 'ja-c27', front: '今', back: '现在', ipa: '/ima/', example: '今三時です。', exampleTr: '现在三点。' },
                  { id: 'ja-c28', front: '朝', back: '早晨', ipa: '/asa/', example: '朝ごはん', exampleTr: '早餐' },
                  { id: 'ja-c29', front: '夜', back: '晚上', ipa: '/joɾɯ/', example: '夜遅く', exampleTr: '深夜' },
                  { id: 'ja-c30', front: '今日', back: '今天', ipa: '/kjo:to/', example: '今日はいい天気です。', exampleTr: '今天天气好。' }
                ]},
                { type: 'grammar', rule: '～時：几点',
                  questions: [
                  { id: 'ja-g11', kind: 'single', q: '今___三時___。',
                    choices: ['は/です','が/だ','を/する'], answer: 0 },
                  { id: 'ja-g12', kind: 'fill', q: '今___何時___。', answer: 'は' }
                ]},
                { type: 'listening', audio: '今何時ですか。三時半です。朝です。',
                  questions: [
                  { id: 'ja-l6', kind: 'single', q: '现在几点？',
                    choices: ['三点半','三点','两点半'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '今何時ですか', targetTr: '现在几点', hint: '问时间' }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'ja-N4', code: 'N4', name: '初级',
      description: '日常生活、购物、出行表达',
      units: [
        {
          id: 'ja-N4-U1', title: '買い物', subtitle: '购物',
          icon: 'cart', color: '#1CB0F6',
          lessons: [
            {
              id: 'ja-N4-U1-L1', title: '店で',
              description: '商店购物',
              xpReward: 25, requires: ['ja-N5-U2-L3'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ja-c31', front: '買う', back: '买', ipa: '/kaɯ/', example: '本を買う。', exampleTr: '买书。' },
                  { id: 'ja-c32', front: '値段', back: '价格', ipa: '/nedaɴ/', example: '値段は高いです。', exampleTr: '价格贵。' },
                  { id: 'ja-c33', front: '安い', back: '便宜', ipa: '/jasɯi/', example: 'これは安いです。', exampleTr: '这很便宜。' },
                  { id: 'ja-c34', front: '高い', back: '贵', ipa: '/takai/', example: '高いですね。', exampleTr: '真贵。' },
                  { id: 'ja-c35', front: 'お金', back: '钱', ipa: '/okaɴe/', example: 'お金があります。', exampleTr: '有钱。' }
                ]},
                { type: 'grammar', rule: '～を買う：买什么（を标记宾语）',
                  questions: [
                  { id: 'ja-g13', kind: 'single', q: '本___買います。',
                    choices: ['を','は','が'], answer: 0 },
                  { id: 'ja-g14', kind: 'fill', q: 'りんご___買います。', answer: 'を' }
                ]},
                { type: 'listening', audio: 'すみません、この本はいくらですか。千円です。高いですね。',
                  questions: [
                  { id: 'ja-l7', kind: 'single', q: '这本书多少钱？',
                    choices: ['一千日元','五百日元','两千日元'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'いくらですか', targetTr: '多少钱', hint: '问价格' }
                ]}
              ]
            },
            {
              id: 'ja-N4-U1-L2', title: 'レストラン',
              description: '餐厅点餐',
              xpReward: 25, requires: ['ja-N4-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ja-c36', front: '注文', back: '点餐', ipa: '/ʧu:moɴ/', example: '注文をお願いします。', exampleTr: '请点餐。' },
                  { id: 'ja-c37', front: 'メニュー', back: '菜单', ipa: '/menju:/', example: 'メニューを見せて。', exampleTr: '给我看菜单。' },
                  { id: 'ja-c38', front: 'コーヒー', back: '咖啡', ipa: '/ko:hi:/', example: 'コーヒーをください。', exampleTr: '请给我咖啡。' },
                  { id: 'ja-c39', front: 'ご飯', back: '米饭', ipa: '/ɡohaɴ/', example: 'ご飯を食べます。', exampleTr: '吃饭。' },
                  { id: 'ja-c40', front: 'お水', back: '水', ipa: '/omizɯ/', example: 'お水をお願いします。', exampleTr: '请给我水。' }
                ]},
                { type: 'grammar', rule: '～をください：请给我...',
                  questions: [
                  { id: 'ja-g15', kind: 'single', q: 'コーヒー___ください。',
                    choices: ['を','が','は'], answer: 0 },
                  { id: 'ja-g16', kind: 'fill', q: 'お水___ください。', answer: 'を' }
                ]},
                { type: 'listening', audio: 'いらっしゃいませ。メニューを見せてください。コーヒーとご飯をください。',
                  questions: [
                  { id: 'ja-l8', kind: 'single', q: '客人点了什么？',
                    choices: ['咖啡和米饭','只点了咖啡','只点了水'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'コーヒーをください', targetTr: '请给我咖啡', hint: '点餐' }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
