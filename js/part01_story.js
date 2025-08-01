const part01_story = [
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '이 녀석들 멋대로 하고...!'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '나에게는 참을 수 없는게 두가지 있다. 하나, 시간을 낭비하는 놈. 둘, 커플을 방해하는 한가한 놈이다.'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '칫, 귀중한 휴일을 이런 식으로 허비하게 하다니...'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '됐어, 마음대로 하라 그래. 난 돌아간다.'
  },
    {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' }
    ],
    speaker: '',
    text: '...'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '...?'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(쿠코네잖아!)'
  },
  {
    characters: [
      { name: 'hitoya', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: '神宮寺 寂雷',
    text: '왜 그래, 히토야?'
  },
  {
    characters: [
      { name: 'hitoya', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: '天国 獄',
    text: '아니...'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(이놈들이 알아차리게 되면 소란스러워 질 것 같아...)'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(들키지 않게 해야겠는데.)'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(이럴 땐 부자연스러운 다른 행동은 금물이다. 쿠코네가 지나갈 때 까지 "아무것도 하지 않으면" 들키지 않을거야..)'
  }
  ,
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' }
    ],
    speaker: '天国 獄',
    text: '(가만히 있는거야..)',
  },
  {
    next: './game/part01_game.html'
  }
];


$(function () {
  initDialogue({ sectionSelector: '.part01_story', script: part01_story });
});

