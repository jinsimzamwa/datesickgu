const part02_success = [
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(휴... 무사히 지나갔다.)'
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'rei', position: 'right', expression: 'default' }
    ],
    speaker: '山田三郎',
    text: '뭐하는거야, 아마구니!'
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'rei', position: 'right', expression: 'default' }
    ],
    speaker: '天谷奴 零',
    text: '어이어이, 기대했는데 말야~ 아저씨 조금 실망해버렸을지도~',
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '나에겐 참을 수 없는게 두 가지 있다. '
  },
    {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '하나, 협조한다고 한 적도 없는데 나무라는 놈, '
  },
    {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '둘, 기대하라고 한 적 없는데 멋대로 실망하는 놈이다.'
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '제대로 하지 못한 녀석에게 듣고 싶지 않아!'
  },
  {
    characters: [
      { name: 'hitoya', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: '天国 獄',
    text: '한다고 한 적도 없다니까. 내말은 듣고있긴 한거냐.'
  },
  {
    characters: [
      { name: 'hitoya', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: '神宮寺 寂雷',
    text: '듣고있지 않은 것 같아, 히토야.'
  },
  {
    characters: [
      { name: 'hitoya', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: '天国 獄',
    text: '짚어주지 않아도 알고있어...!!'
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '앗, 이치니가 골목으로 들어간다!'
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' },
    ],
    speaker: '神宮寺 寂雷',
    text: '이제부턴 차로 따라가기 힘들겁니다. 내려서 쫓아가죠.'
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '절호의 기회였는데...! 쳇, 지나간건 어쩔 수 없지. 따라가자!'
  },
    {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '하하, 아마구니도 얼른 가야지.',
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '주차하고 가야한다고, 어이! 멋대로 가서 사고치지마!'
  },
  {
    next: './game/part03_story.html'
  }
];

$(function () {
  const seenEndings = JSON.parse(localStorage.getItem('seenEndings') || '[]');
  const hasEnd05 = seenEndings.includes('end05');

  if (hasEnd05) {
    $('.skipBtn').show();
  } else {
    $('.skipBtn').hide();
  }

  initDialogue({ sectionSelector: '.part02_success', script: part02_success });
});


$('.skipBtn').click(function () {

    const lastLine = part02_success[part02_success.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
