const part01_story2 = [
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default'}
    ],
    speaker: '山田三郎',
    text: '칫, 순진한 이치니를 꼬드기고 있었겠다!'
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default'}
    ],
    speaker: '神宮寺 寂雷',
    text: '사부로 군, 이치로 군을 어떻게 보고 있는 건가요?'
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '이치니에게 쓸데없는 짓 못하게 하겠어 하라이 쿠코!!'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '이러는 게 제일 쓸데없는 것 같지만!'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '하하, 한창 앞만 보고 나아갈 열정적인 나이지.'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '부추기지 마!'
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' }
    ],
    speaker: '神宮寺 寂雷',
    text: '앗, 두 사람이 이동합니다.'
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'rei', position: 'right', expression: 'default' }
    ],
    speaker: '山田三郎',
    text: '쫓아가!'
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'rei', position: 'right', expression: 'default' }
    ],
    speaker: '天谷奴 零',
    text: '좋았어~!'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '젠장...! 이놈이고 저놈이고 제멋대로. 기다려!',
  },
  {
    next: './game/part02_story.html'
  }
];


$(function () {
  initDialogue({ sectionSelector: '.part01_story2', script: part01_story2 });
  bgmManager.play('story', true, false);
  bgmManager.fadeIn(0.7, 2000);
});

