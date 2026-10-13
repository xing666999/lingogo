/* ===== LingoGo 英语课程数据 =====
 * 结构：levels -> units -> lessons -> activities
 * 每课含 vocab/grammar/listening/speaking 四环节
 */
window.LL = window.LL || {};
LL.courses = LL.courses || {};

LL.courses.en = {
  lang: 'en',
  label: '英语',
  flag: '🇬🇧',
  themeColor: '#1CB0F6',
  levels: [
    {
      id: 'en-A1', code: 'A1', name: '入门',
      description: '日常问候、自我介绍、基础数字与时间',
      units: [
        {
          id: 'en-A1-U1', title: 'Greetings', subtitle: '打招呼',
          icon: 'wave', color: '#1CB0F6',
          lessons: [
            {
              id: 'en-A1-U1-L1', title: 'Hello!',
              description: '学会第一次见面如何问候',
              xpReward: 20, requires: [],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c1', front: 'hello', back: '你好', ipa: '/həˈloʊ/',
                    example: 'Hello, my name is Tom.', exampleTr: '你好，我叫汤姆。' },
                  { id: 'en-c2', front: 'goodbye', back: '再见', ipa: '/ˌɡʊdˈbaɪ/',
                    example: 'Goodbye, see you tomorrow.', exampleTr: '再见，明天见。' },
                  { id: 'en-c3', front: 'thank you', back: '谢谢', ipa: '/ˈθæŋk juː/',
                    example: 'Thank you for your help.', exampleTr: '谢谢你的帮助。' },
                  { id: 'en-c4', front: 'sorry', back: '对不起', ipa: '/ˈsɒri/',
                    example: 'Sorry, I am late.', exampleTr: '对不起，我迟到了。' },
                  { id: 'en-c5', front: 'please', back: '请', ipa: '/pliːz/',
                    example: 'Please sit down.', exampleTr: '请坐。' }
                ]},
                { type: 'grammar', rule: 'Be 动词：I 用 am，you 用 are，he/she/it 用 is',
                  questions: [
                  { id: 'en-g1', kind: 'single', q: 'I ___ a student.',
                    choices: ['am','is','are'], answer: 0, explain: '主语 I 搭配 am。' },
                  { id: 'en-g2', kind: 'single', q: 'You ___ my friend.',
                    choices: ['am','is','are'], answer: 2, explain: '主语 you 搭配 are。' },
                  { id: 'en-g3', kind: 'fill', q: 'She ___ (is/am/are) a teacher.',
                    answer: 'is', explain: '主语 she 搭配 is。' }
                ]},
                { type: 'listening', audio: 'Hello, my name is Tom. I am from Canada. Nice to meet you.',
                  questions: [
                  { id: 'en-l1', kind: 'single', q: 'Tom 来自哪里？',
                    choices: ['Canada','America','Japan'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Hello', targetTr: '你好', hint: '跟读：你好' },
                  { target: 'Thank you', targetTr: '谢谢', hint: '跟读：谢谢' },
                  { target: 'Goodbye', targetTr: '再见', hint: '跟读：再见' }
                ]}
              ]
            },
            {
              id: 'en-A1-U1-L2', title: 'How are you?',
              description: '询问对方近况',
              xpReward: 20, requires: ['en-A1-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c6', front: 'fine', back: '好的', ipa: '/faɪn/',
                    example: 'I am fine, thank you.', exampleTr: '我很好，谢谢。' },
                  { id: 'en-c7', front: 'good', back: '好的', ipa: '/ɡʊd/',
                    example: 'Good morning!', exampleTr: '早上好！' },
                  { id: 'en-c8', front: 'morning', back: '早晨', ipa: '/ˈmɔːrnɪŋ/',
                    example: 'Good morning, everyone.', exampleTr: '大家早上好。' },
                  { id: 'en-c9', front: 'night', back: '夜晚', ipa: '/naɪt/',
                    example: 'Good night, sweet dreams.', exampleTr: '晚安，好梦。' },
                  { id: 'en-c10', front: 'today', back: '今天', ipa: '/təˈdeɪ/',
                    example: 'Today is a good day.', exampleTr: '今天是美好的一天。' }
                ]},
                { type: 'grammar', rule: '疑问句：How are you? 回答用 I am + 形容词',
                  questions: [
                  { id: 'en-g4', kind: 'single', q: '— How are you? — I ___ fine.',
                    choices: ['am','is','are'], answer: 0 },
                  { id: 'en-g5', kind: 'order', q: '排列成句：you / how / are / ?',
                    blocks: ['How','are','you','?'], answer: 'How are you?' }
                ]},
                { type: 'listening', audio: 'Good morning. How are you today? I am fine, thank you. And you?',
                  questions: [
                  { id: 'en-l2', kind: 'single', q: '说话者感觉如何？',
                    choices: ['Fine','Bad','Tired'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'How are you', targetTr: '你好吗', hint: '问候对方' },
                  { target: 'Good morning', targetTr: '早上好', hint: '早上问候' }
                ]}
              ]
            },
            {
              id: 'en-A1-U1-L3', title: 'My Name Is',
              description: '介绍自己的名字',
              xpReward: 20, requires: ['en-A1-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c11', front: 'name', back: '名字', ipa: '/neɪm/',
                    example: 'My name is Lisa.', exampleTr: '我叫丽莎。' },
                  { id: 'en-c12', front: 'my', back: '我的', ipa: '/maɪ/',
                    example: 'This is my book.', exampleTr: '这是我的书。' },
                  { id: 'en-c13', front: 'your', back: '你的', ipa: '/jɔːr/',
                    example: 'What is your name?', exampleTr: '你叫什么名字？' },
                  { id: 'en-c14', front: 'nice', back: '好的/愉快的', ipa: '/naɪs/',
                    example: 'Nice to meet you.', exampleTr: '很高兴见到你。' },
                  { id: 'en-c15', front: 'meet', back: '遇见', ipa: '/miːt/',
                    example: 'Nice to meet you too.', exampleTr: '我也很高兴见到你。' }
                ]},
                { type: 'grammar', rule: '物主代词：my 我的，your 你的，his 他的，her 她的',
                  questions: [
                  { id: 'en-g6', kind: 'single', q: 'What is ___ name?',
                    choices: ['you','your','yours'], answer: 1 },
                  { id: 'en-g7', kind: 'fill', q: '___ (我的) name is Tom.',
                    answer: 'my', explain: 'my 是形容词性物主代词。' }
                ]},
                { type: 'listening', audio: 'Hi, my name is Anna. What is your name? Nice to meet you.',
                  questions: [
                  { id: 'en-l3', kind: 'single', q: '说话者叫什么？',
                    choices: ['Anna','Tom','Lisa'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'My name is Tom', targetTr: '我叫汤姆', hint: '介绍自己名字' },
                  { target: 'Nice to meet you', targetTr: '很高兴见到你', hint: '初次见面问候' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'en-A1-U2', title: 'Numbers', subtitle: '数字',
          icon: 'number', color: '#FF9600',
          lessons: [
            {
              id: 'en-A1-U2-L1', title: 'One to Ten',
              description: '学会从一数到十',
              xpReward: 20, requires: ['en-A1-U1-L3'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c16', front: 'one', back: '一', ipa: '/wʌn/', example: 'One apple.', exampleTr: '一个苹果。' },
                  { id: 'en-c17', front: 'two', back: '二', ipa: '/tuː/', example: 'Two cats.', exampleTr: '两只猫。' },
                  { id: 'en-c18', front: 'three', back: '三', ipa: '/θriː/', example: 'Three books.', exampleTr: '三本书。' },
                  { id: 'en-c19', front: 'four', back: '四', ipa: '/fɔːr/', example: 'Four chairs.', exampleTr: '四把椅子。' },
                  { id: 'en-c20', front: 'five', back: '五', ipa: '/faɪv/', example: 'Five pens.', exampleTr: '五支笔。' }
                ]},
                { type: 'grammar', rule: 'How many + 复数名词？回答用数字',
                  questions: [
                  { id: 'en-g8', kind: 'single', q: 'How many ___ ? Two.',
                    choices: ['apple','apples','apples'], answer: 1, explain: 'How many 后接复数名词。' },
                  { id: 'en-g9', kind: 'fill', q: 'There are ___ (三) books.', answer: 'three' }
                ]},
                { type: 'listening', audio: 'I have two cats and three dogs. How many pets do you have?',
                  questions: [
                  { id: 'en-l4', kind: 'single', q: '说话者有几只猫？',
                    choices: ['Two','Three','Five'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'one two three four five', targetTr: '一二三四五', hint: '数数一到五' }
                ]}
              ]
            },
            {
              id: 'en-A1-U2-L2', title: 'How Old?',
              description: '询问和表达年龄',
              xpReward: 20, requires: ['en-A1-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c21', front: 'year', back: '年/岁', ipa: '/jɪr/', example: 'I am ten years old.', exampleTr: '我十岁。' },
                  { id: 'en-c22', front: 'old', back: '老的', ipa: '/oʊld/', example: 'How old are you?', exampleTr: '你几岁了？' },
                  { id: 'en-c23', front: 'young', back: '年轻的', ipa: '/jʌŋ/', example: 'She is young.', exampleTr: '她很年轻。' },
                  { id: 'en-c24', front: 'six', back: '六', ipa: '/sɪks/', example: 'Six pencils.', exampleTr: '六支铅笔。' },
                  { id: 'en-c25', front: 'ten', back: '十', ipa: '/ten/', example: 'Ten fingers.', exampleTr: '十个手指。' }
                ]},
                { type: 'grammar', rule: 'How old are you? 回答：I am + 数字 + years old',
                  questions: [
                  { id: 'en-g10', kind: 'single', q: 'How old ___ you? — I am ten.',
                    choices: ['am','is','are'], answer: 2 },
                  { id: 'en-g11', kind: 'fill', q: 'I ___ ten years old.', answer: 'am' }
                ]},
                { type: 'listening', audio: 'How old are you? I am eight years old. And you?',
                  questions: [
                  { id: 'en-l5', kind: 'single', q: '说话者几岁？',
                    choices: ['Eight','Ten','Six'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'I am ten years old', targetTr: '我十岁', hint: '表达年龄' }
                ]}
              ]
            },
            {
              id: 'en-A1-U2-L3', title: 'Time',
              description: '询问时间',
              xpReward: 20, requires: ['en-A1-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c26', front: 'time', back: '时间', ipa: '/taɪm/', example: 'What time is it?', exampleTr: '几点了？' },
                  { id: 'en-c27', front: 'clock', back: '时钟', ipa: '/klɒk/', example: 'The clock is on the wall.', exampleTr: '时钟在墙上。' },
                  { id: 'en-c28', front: 'hour', back: '小时', ipa: '/aʊər/', example: 'One hour later.', exampleTr: '一小时后。' },
                  { id: 'en-c29', front: 'late', back: '迟到', ipa: '/leɪt/', example: 'I am late.', exampleTr: '我迟到了。' },
                  { id: 'en-c30', front: 'now', back: '现在', ipa: '/naʊ/', example: 'It is now three oclock.', exampleTr: '现在三点。' }
                ]},
                { type: 'grammar', rule: 'What time is it? 回答：It is + 数字 + oclock',
                  questions: [
                  { id: 'en-g12', kind: 'single', q: 'What ___ is it? — It is three.',
                    choices: ['time','hour','clock'], answer: 0 },
                  { id: 'en-g13', kind: 'fill', q: 'It is ___ (五) oclock.', answer: 'five' }
                ]},
                { type: 'listening', audio: 'What time is it now? It is seven oclock in the morning.',
                  questions: [
                  { id: 'en-l6', kind: 'single', q: '现在几点？',
                    choices: ['Seven','Five','Three'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'What time is it', targetTr: '几点了', hint: '询问时间' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'en-A1-U3', title: 'Family', subtitle: '家庭',
          icon: 'family', color: '#FF4B4B',
          lessons: [
            {
              id: 'en-A1-U3-L1', title: 'My Family',
              description: '家庭成员称呼',
              xpReward: 20, requires: ['en-A1-U2-L3'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c31', front: 'father', back: '父亲', ipa: '/ˈfɑːðər/', example: 'My father is tall.', exampleTr: '我父亲很高。' },
                  { id: 'en-c32', front: 'mother', back: '母亲', ipa: '/ˈmʌðər/', example: 'My mother is kind.', exampleTr: '我母亲很善良。' },
                  { id: 'en-c33', front: 'brother', back: '兄弟', ipa: '/ˈbrʌðər/', example: 'I have a brother.', exampleTr: '我有一个兄弟。' },
                  { id: 'en-c34', front: 'sister', back: '姐妹', ipa: '/ˈsɪstər/', example: 'My sister is young.', exampleTr: '我妹妹还小。' },
                  { id: 'en-c35', front: 'family', back: '家庭', ipa: '/ˈfæməli/', example: 'I love my family.', exampleTr: '我爱我的家庭。' }
                ]},
                { type: 'grammar', rule: 'This is my... 这是我的...',
                  questions: [
                  { id: 'en-g14', kind: 'single', q: 'This is my ___. (母亲)',
                    choices: ['father','mother','brother'], answer: 1 },
                  { id: 'en-g15', kind: 'fill', q: 'This is my ___ (父亲).', answer: 'father' }
                ]},
                { type: 'listening', audio: 'This is my father and this is my mother. I have one brother and one sister.',
                  questions: [
                  { id: 'en-l7', kind: 'single', q: '说话者有几个兄弟姐妹？',
                    choices: ['One','Two','Three'], answer: 1 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'This is my mother', targetTr: '这是我妈妈', hint: '介绍家人' }
                ]}
              ]
            },
            {
              id: 'en-A1-U3-L2', title: 'Colors',
              description: '颜色单词',
              xpReward: 20, requires: ['en-A1-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c36', front: 'red', back: '红色', ipa: '/red/', example: 'The apple is red.', exampleTr: '苹果是红色的。' },
                  { id: 'en-c37', front: 'blue', back: '蓝色', ipa: '/bluː/', example: 'The sky is blue.', exampleTr: '天空是蓝色的。' },
                  { id: 'en-c38', front: 'green', back: '绿色', ipa: '/ɡriːn/', example: 'The grass is green.', exampleTr: '草是绿色的。' },
                  { id: 'en-c39', front: 'yellow', back: '黄色', ipa: '/ˈjeloʊ/', example: 'The sun is yellow.', exampleTr: '太阳是黄色的。' },
                  { id: 'en-c40', front: 'black', back: '黑色', ipa: '/blæk/', example: 'My cat is black.', exampleTr: '我的猫是黑色的。' }
                ]},
                { type: 'grammar', rule: '主语 + is + 颜色：The apple is red.',
                  questions: [
                  { id: 'en-g16', kind: 'single', q: 'The sky is ___.',
                    choices: ['red','blue','green'], answer: 1 },
                  { id: 'en-g17', kind: 'fill', q: 'The grass is ___ (绿色).', answer: 'green' }
                ]},
                { type: 'listening', audio: 'What color is the apple? The apple is red. What color is the sky? The sky is blue.',
                  questions: [
                  { id: 'en-l8', kind: 'single', q: '苹果是什么颜色？',
                    choices: ['Red','Blue','Green'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'The sky is blue', targetTr: '天空是蓝色的', hint: '描述颜色' }
                ]}
              ]
            },
            {
              id: 'en-A1-U3-L3', title: 'Food',
              description: '食物词汇',
              xpReward: 20, requires: ['en-A1-U3-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c41', front: 'water', back: '水', ipa: '/ˈwɔːtər/', example: 'I drink water.', exampleTr: '我喝水。' },
                  { id: 'en-c42', front: 'bread', back: '面包', ipa: '/bred/', example: 'I eat bread.', exampleTr: '我吃面包。' },
                  { id: 'en-c43', front: 'apple', back: '苹果', ipa: '/ˈæpəl/', example: 'I like apples.', exampleTr: '我喜欢苹果。' },
                  { id: 'en-c44', front: 'milk', back: '牛奶', ipa: '/mɪlk/', example: 'I drink milk.', exampleTr: '我喝牛奶。' },
                  { id: 'en-c45', front: 'eat', back: '吃', ipa: '/iːt/', example: 'I eat breakfast.', exampleTr: '我吃早餐。' }
                ]},
                { type: 'grammar', rule: 'I like + 名词：我喜欢...',
                  questions: [
                  { id: 'en-g18', kind: 'single', q: 'I like ___. (苹果)',
                    choices: ['apple','apples','a apple'], answer: 1 },
                  { id: 'en-g19', kind: 'fill', q: 'I like ___ (牛奶).', answer: 'milk' }
                ]},
                { type: 'listening', audio: 'I eat bread and drink milk for breakfast. I like apples too.',
                  questions: [
                  { id: 'en-l9', kind: 'single', q: '说话者早餐吃了什么？',
                    choices: ['Bread and milk','Apples only','Water'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'I like apples', targetTr: '我喜欢苹果', hint: '表达喜好' }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'en-A2', code: 'A2', name: '初级',
      description: '日常对话、购物、旅行表达',
      units: [
        {
          id: 'en-A2-U1', title: 'Shopping', subtitle: '购物',
          icon: 'cart', color: '#8B5CF6',
          lessons: [
            {
              id: 'en-A2-U1-L1', title: 'At the Store',
              description: '商店购物对话',
              xpReward: 25, requires: ['en-A1-U3-L3'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c46', front: 'buy', back: '买', ipa: '/baɪ/', example: 'I want to buy a book.', exampleTr: '我想买一本书。' },
                  { id: 'en-c47', front: 'price', back: '价格', ipa: '/praɪs/', example: 'What is the price?', exampleTr: '多少钱？' },
                  { id: 'en-c48', front: 'cheap', back: '便宜的', ipa: '/tʃiːp/', example: 'It is very cheap.', exampleTr: '很便宜。' },
                  { id: 'en-c49', front: 'expensive', back: '贵的', ipa: '/ɪkˈspensɪv/', example: 'It is too expensive.', exampleTr: '太贵了。' },
                  { id: 'en-c50', front: 'money', back: '钱', ipa: '/ˈmʌni/', example: 'I do not have money.', exampleTr: '我没钱。' }
                ]},
                { type: 'grammar', rule: 'How much is it? 多少钱？回答：It is + 价格',
                  questions: [
                  { id: 'en-g20', kind: 'single', q: 'How much ___ this? — It is five dollars.',
                    choices: ['is','are','am'], answer: 0 },
                  { id: 'en-g21', kind: 'order', q: '排列成句',
                    blocks: ['How','much','is','it','?'], answer: 'How much is it?' }
                ]},
                { type: 'listening', audio: 'Excuse me, how much is this book? It is ten dollars. That is a bit expensive.',
                  questions: [
                  { id: 'en-l10', kind: 'single', q: '这本书多少钱？',
                    choices: ['Ten dollars','Five dollars','Cheap'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'How much is it', targetTr: '多少钱', hint: '询问价格' }
                ]}
              ]
            },
            {
              id: 'en-A2-U1-L2', title: 'Food Order',
              description: '点餐',
              xpReward: 25, requires: ['en-A2-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c51', front: 'menu', back: '菜单', ipa: '/ˈmenjuː/', example: 'Can I see the menu?', exampleTr: '可以看菜单吗？' },
                  { id: 'en-c52', front: 'order', back: '点餐', ipa: '/ˈɔːrdər/', example: 'I want to order now.', exampleTr: '我想点餐。' },
                  { id: 'en-c53', front: 'coffee', back: '咖啡', ipa: '/ˈkɒfi/', example: 'A cup of coffee.', exampleTr: '一杯咖啡。' },
                  { id: 'en-c54', front: 'chicken', back: '鸡肉', ipa: '/ˈtʃɪkɪn/', example: 'I like chicken.', exampleTr: '我喜欢鸡肉。' },
                  { id: 'en-c55', front: 'rice', back: '米饭', ipa: '/raɪs/', example: 'Some rice please.', exampleTr: '来点米饭。' }
                ]},
                { type: 'grammar', rule: 'I would like + 食物：我想要...',
                  questions: [
                  { id: 'en-g22', kind: 'single', q: 'I would like ___ coffee.',
                    choices: ['a','an','two'], answer: 0 },
                  { id: 'en-g23', kind: 'fill', q: 'I would like ___ (一些) rice.', answer: 'some' }
                ]},
                { type: 'listening', audio: 'Welcome! Can I see the menu? Sure. I would like a coffee and some chicken rice please.',
                  questions: [
                  { id: 'en-l11', kind: 'single', q: '客人点了什么？',
                    choices: ['Coffee and chicken rice','Only coffee','Only rice'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'I would like a coffee', targetTr: '我想要一杯咖啡', hint: '点餐' }
                ]}
              ]
            },
            {
              id: 'en-A2-U1-L3', title: 'Direction',
              description: '问路',
              xpReward: 25, requires: ['en-A2-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c56', front: 'left', back: '左边', ipa: '/left/', example: 'Turn left.', exampleTr: '左转。' },
                  { id: 'en-c57', front: 'right', back: '右边', ipa: '/raɪt/', example: 'Turn right.', exampleTr: '右转。' },
                  { id: 'en-c58', front: 'street', back: '街道', ipa: '/striːt/', example: 'This is a busy street.', exampleTr: '这是条繁忙的街道。' },
                  { id: 'en-c59', front: 'where', back: '哪里', ipa: '/wer/', example: 'Where is the station?', exampleTr: '车站在哪？' },
                  { id: 'en-c60', front: 'go', back: '走/去', ipa: '/ɡoʊ/', example: 'Go straight.', exampleTr: '直走。' }
                ]},
                { type: 'grammar', rule: 'Where is...? 在哪里？回答用方位介词',
                  questions: [
                  { id: 'en-g24', kind: 'single', q: '___ is the station? — Turn left.',
                    choices: ['Where','What','How'], answer: 0 },
                  { id: 'en-g25', kind: 'fill', q: 'Turn ___ (右).', answer: 'right' }
                ]},
                { type: 'listening', audio: 'Excuse me, where is the train station? Go straight and turn left. It is on your right.',
                  questions: [
                  { id: 'en-l12', kind: 'single', q: '应该先往哪走？',
                    choices: ['Straight','Left','Right'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Where is the station', targetTr: '车站在哪里', hint: '问路' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'en-A2-U2', title: 'Travel', subtitle: '旅行',
          icon: 'plane', color: '#00B8A9',
          lessons: [
            {
              id: 'en-A2-U2-L1', title: 'Airport',
              description: '机场常用语',
              xpReward: 25, requires: ['en-A2-U1-L3'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c61', front: 'ticket', back: '机票', ipa: '/ˈtɪkɪt/', example: 'Here is my ticket.', exampleTr: '这是我的机票。' },
                  { id: 'en-c62', front: 'plane', back: '飞机', ipa: '/pleɪn/', example: 'The plane is late.', exampleTr: '飞机晚点了。' },
                  { id: 'en-c63', front: 'gate', back: '登机口', ipa: '/ɡeɪt/', example: 'Gate number five.', exampleTr: '五号登机口。' },
                  { id: 'en-c64', front: 'boarding', back: '登机', ipa: '/ˈbɔːrdɪŋ/', example: 'Boarding now.', exampleTr: '现在登机。' },
                  { id: 'en-c65', front: 'luggage', back: '行李', ipa: '/ˈlʌɡɪdʒ/', example: 'My luggage is heavy.', exampleTr: '我的行李很重。' }
                ]},
                { type: 'grammar', rule: 'Where is + 名词？名词在哪？',
                  questions: [
                  { id: 'en-g26', kind: 'single', q: 'Where is my ___ ? (机票)',
                    choices: ['ticket','plane','gate'], answer: 0 },
                  { id: 'en-g27', kind: 'fill', q: 'Where is my ___ (行李)?', answer: 'luggage' }
                ]},
                { type: 'listening', audio: 'Welcome to the airport. Your gate is number five. Boarding starts in thirty minutes.',
                  questions: [
                  { id: 'en-l13', kind: 'single', q: '登机口是几号？',
                    choices: ['Five','Three','Ten'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Where is my ticket', targetTr: '我的机票在哪', hint: '询问位置' }
                ]}
              ]
            },
            {
              id: 'en-A2-U2-L2', title: 'Hotel',
              description: '酒店入住',
              xpReward: 25, requires: ['en-A2-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c66', front: 'room', back: '房间', ipa: '/ruːm/', example: 'My room number.', exampleTr: '我的房间号。' },
                  { id: 'en-c67', front: 'key', back: '钥匙', ipa: '/kiː/', example: 'Here is your key.', exampleTr: '这是你的钥匙。' },
                  { id: 'en-c68', front: 'check in', back: '入住', ipa: '/tʃek ɪn/', example: 'I want to check in.', exampleTr: '我想入住。' },
                  { id: 'en-c69', front: 'breakfast', back: '早餐', ipa: '/ˈbrekfəst/', example: 'Breakfast is included.', exampleTr: '含早餐。' },
                  { id: 'en-c70', front: 'wifi', back: '无线网', ipa: '/ˈwaɪfaɪ/', example: 'Is there wifi?', exampleTr: '有WiFi吗？' }
                ]},
                { type: 'grammar', rule: 'I would like to check in. 我想入住。',
                  questions: [
                  { id: 'en-g28', kind: 'single', q: 'I would like to ___ . (入住)',
                    choices: ['check in','check out','go out'], answer: 0 },
                  { id: 'en-g29', kind: 'fill', q: 'Is there ___ (无线网)?', answer: 'wifi' }
                ]},
                { type: 'listening', audio: 'Welcome! I would like to check in. Sure, your room is two zero one. Here is your key. Breakfast is on the second floor.',
                  questions: [
                  { id: 'en-l14', kind: 'single', q: '房间号是？',
                    choices: ['201','102','210'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'I would like to check in', targetTr: '我想入住', hint: '酒店前台' }
                ]}
              ]
            },
            {
              id: 'en-A2-U2-L3', title: 'Weather',
              description: '天气表达',
              xpReward: 25, requires: ['en-A2-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'en-c71', front: 'sunny', back: '晴朗的', ipa: '/ˈsʌni/', example: 'It is sunny today.', exampleTr: '今天晴朗。' },
                  { id: 'en-c72', front: 'rainy', back: '下雨的', ipa: '/ˈreɪni/', example: 'It is rainy.', exampleTr: '下雨了。' },
                  { id: 'en-c73', front: 'cold', back: '冷的', ipa: '/koʊld/', example: 'It is cold outside.', exampleTr: '外面很冷。' },
                  { id: 'en-c74', front: 'hot', back: '热的', ipa: '/hɒt/', example: 'It is very hot.', exampleTr: '非常热。' },
                  { id: 'en-c75', front: 'weather', back: '天气', ipa: '/ˈweðər/', example: 'How is the weather?', exampleTr: '天气如何？' }
                ]},
                { type: 'grammar', rule: 'It is + 天气形容词',
                  questions: [
                  { id: 'en-g30', kind: 'single', q: 'It is ___ today. (下雨)',
                    choices: ['sunny','rainy','hot'], answer: 1 },
                  { id: 'en-g31', kind: 'fill', q: 'It is ___ (冷) outside.', answer: 'cold' }
                ]},
                { type: 'listening', audio: 'How is the weather today? It is sunny and warm. Great weather for a walk!',
                  questions: [
                  { id: 'en-l15', kind: 'single', q: '今天天气如何？',
                    choices: ['Sunny and warm','Rainy and cold','Hot'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'It is sunny today', targetTr: '今天晴朗', hint: '描述天气' }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};

// 提供查询工具函数
LL.courses.findLesson = function(lang, lessonId) {
  const course = LL.courses[lang];
  if (!course) return null;
  for (let i = 0; i < course.levels.length; i++) {
    for (let j = 0; j < course.levels[i].units.length; j++) {
      for (let k = 0; k < course.levels[i].units[j].lessons.length; k++) {
        if (course.levels[i].units[j].lessons[k].id === lessonId) {
          return course.levels[i].units[j].lessons[k];
        }
      }
    }
  }
  return null;
};

LL.courses.getLessonContext = function(lang, lessonId) {
  const course = LL.courses[lang];
  if (!course) return null;
  for (let i = 0; i < course.levels.length; i++) {
    for (let j = 0; j < course.levels[i].units.length; j++) {
      for (let k = 0; k < course.levels[i].units[j].lessons.length; k++) {
        if (course.levels[i].units[j].lessons[k].id === lessonId) {
          return {
            lang: lang,
            level: course.levels[i],
            unit: course.levels[i].units[j],
            lesson: course.levels[i].units[j].lessons[k]
          };
        }
      }
    }
  }
  return null;
};

LL.courses.countLessons = function(lang) {
  const course = LL.courses[lang];
  if (!course) return 0;
  let n = 0;
  course.levels.forEach(function(l) { l.units.forEach(function(u) { n += u.lessons.length; }); });
  return n;
};
