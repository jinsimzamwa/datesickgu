const part04_success = [
  // {
  //   characters: [
  //     { name: 'ichiro', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '山田一郎',
  //   text: '...해냈다! 대단해, 쿠코! 한번만에!'
  // },
  // {
  //   characters: [
  //     { name: 'ichiro', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '山田一郎',
  //   text: '나는 천장쳐서 겨우 얻었는데!'
  // },
  // {
  //   characters: [
  //     { name: 'kuko', position: 'center', expression: 'default' }
  //   ],
  //   speaker: '波羅夷 空却',
  //   text: '햣하! 소승의 힘을 얕보지 말라고!',
  // },
  // {
  //   characters: [
  //     { name: 'saburo', position: 'left', expression: 'default' },
  //     { name: 'jakurai', position: 'right', expression: 'default' }
  //   ],
  //   speaker: '山田三郎',
  //   text: '귀엽지않냐, 미니 이치로다!'
  // },
  //   {
  //   characters: [
  //     { name: 'saburo', position: 'left', expression: 'default' },
  //     { name: 'jakurai', position: 'right', expression: 'default' }
  //   ],
  //   speaker: '神宮寺 寂雷',
  //   text: '귀, 귀엽다니...'
  // },
  //   {
  //   characters: [
  //     { name: 'rei', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '天谷奴 零',
  //   text: '삼남.'
  // },
  // {
  //   characters: [
  //   ],
  //   speaker: '職員',
  //   text: '이익, 말 걸지마!'
  // },
  // {
  //   characters: [
  //     { name: 'hitoya', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '天国 獄',
  //   text: '사부로 군의 실력으로 충분히 방해할 수 있었는데, 왜 하지 않았나요?'
  // },
  // {
  //   characters: [
  //     { name: 'jakurai', position: 'center', expression: 'default' }
  //   ],
  //   speaker: '神宮寺 寂雷',
  //   text: '쳇.'
  // },
  // {
  //   characters: [
  //     { name: 'hitoya', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '天国 獄',
  //   text: '이치니가 저렇게 기대하고 즐거워하는 표정을 짓고 있는데, 어떻게 방해해...'
  // },
  // {
  //   characters: [
  //     { name: 'rei', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '天谷奴 零',
  //   text: '나도, 지로도 형의 저런 모습을 끌어내진 못해'
  // },
  // {
  //   characters: [
  //     { name: 'hitoya', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '天国 獄',
  //   text: '이치니의 평범한 일상을 부수고 싶지 않았을 뿐이야.'
  // },
  // {
  //   characters: [
  //     { name: 'saburo', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '山田三郎',
  //   text: '...내가 어떻게 그래.'
  // },
  // {
  //   characters: [
  //     { name: 'saburo', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '山田三郎',
  //   text: '그렇다니까, 이제 알았냐. 바보가.'
  // },
  // {
  //   characters: [
  //     { name: 'saburo', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '山田三郎',
  //   text: '좋은 생각입니다, 사부로 군.'
  // },
  // {
  //   characters: [
  //     { name: 'saburo', position: 'center', expression: 'default' },
  //   ],
  //   speaker: '山田三郎',
  //   text: '뭐야, 사부로 너까지. 시시하구만.'
  // },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '저 한사람 빼곤 다 정신을 차린 것 같네.'
  },
  {
    next: 'finalNext'
  }
];

$(function () {
  initDialogue({ sectionSelector: '.part04_success', script: part04_success });
});

