const part01_fail = [
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' },
    ],
    speaker: '神宮寺 寂雷',
    text: '히토야, 그 쪽에 뭔가 있어?'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(아차...!)'
  },
  {
    characters: [
      { name: 'jakurai', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'default' }
    ],
    speaker: '神宮寺 寂雷',
    text: '아, 이치로 군과 쿠코 군이 저 쪽에 있었네요.'
  },
  {
    characters: [
      { name: 'jakurai', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'default' }
    ],
    speaker: '天国 獄',
    text: '바보, 말하지마!'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '어라, 저 쪽에 있었네~'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(젠장, 실수해버렸다...)'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(이후론 괜한 일이 벌어지지 않도록 해야겠어.)',
  },
  {
    next: './game/part01_story2.html'
  }
];

$(function () {
  initDialogue({ sectionSelector: '.part01_fail', script: part01_fail });
});

