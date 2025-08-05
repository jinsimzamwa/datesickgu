const part04_story = [
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '波羅夷 空却',
    text: '젠장, 결국 내가 샀잖아.'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '山田一郎',
    text: '잘 먹었어, 히토야.'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '波羅夷 空却',
    text: '하하, 맛있었다고~'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '波羅夷 空却',
    text: '배로 받아낼 거니까 감사인사는 하지 않아도 된다고.'
  },
    {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '山田一郎',
    text: '...아니, 됐어. 이미 사버린거, 구질구질하게 구는 것도 취향 아니고.'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '山田一郎',
    text: '밥도 사줬으니 이젠 정말 얌전히들 흩어져.'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '波羅夷 空却',
    text: '이치로오! 오락실이나 갈까.'
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '좋지! 전부 이겨주겠어!'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '햣하, 소승이 져줄까 보냐!'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '오락실인가~ 역시 아직 애구만.'
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' },
    ],
    speaker: '神宮寺 寂雷',
    text: '따라가자!'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '뭘 따라가! 질리지도 않냐 너네는.'
  },
  {
    characters: [
      { name: 'rei', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '어이쿠, 벌써 포기야? 아직 시작도 안했구만. 시시하네~'
  },
  {
    characters: [
      { name: 'rei', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '누가 포기한다는거야!?'
  },
  {
    next: './game/part04_story2.html'
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
    
  bgmManager.play('story3', true, false);
  bgmManager.fadeIn(0.7, 2000);
  initDialogue({ sectionSelector: '.part04_story', script: part04_story });
});

$('.skipBtn').click(function () {
    const lastLine = part04_story[part04_story.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
