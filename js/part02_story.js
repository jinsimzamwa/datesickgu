const part02_story = [
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '波羅夷 空却',
    text: '어딜 그렇게 찾아보는거냐.'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '山田一郎',
    text: '예전에 갔던 라멘집... 기억나?'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '波羅夷 空却',
    text: '아, 이치로가 물 쏟았던 곳이잖냐!'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '波羅夷 空却',
    text: '햣하, 실례한것처럼 바지가 젖어서 우스꽝스러웠지.'
  },
    {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '山田一郎',
    text: '그런 사소한 실수는 잊어줘...'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '山田一郎',
    text: '최근에 가게를 이전해서, 위치를 찾아가야해.'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' },
    ],
    speaker: '波羅夷 空却',
    text: '뭐, 이치로가 가는 길이라면 소승은 어디든 따라갈 수 있지.'
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '감히 이치니랑 소근소근 즐겁게 대화하다니...'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '평범하게 사이좋은 연인이잖아'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '제발 진정 좀 해라.'
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' },
    ],
    speaker: '神宮寺 寂雷',
    text: '태워줘서 고마워, 히토야. 덕분에 미행이 쉬워지고 있어.'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '하나도 기쁘지 않아'
  },
  {
    characters: [
      { name: 'rei', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '아마구니, 전방에 웅덩이가 있어.'
  },
  {
    characters: [
      { name: 'rei', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '아아, 조심해서 운전중이야.'
  },
  {
    characters: [
      { name: 'rei', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '저기서 밟아버리면 저녀석들에게 화려하게 튀겠지?'
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '제법 쓸모있는 말도 할 줄 아는데?'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '쓸모없어...!'
  },
  {
     characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '아마구니! 타이밍을 잘 맞춰서 물 웅덩이를 밟는거야!'
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '안해, 그런거!'
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' }
    ],
    speaker: '神宮寺 寂雷',
    text: '히토야...!'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' }
    ],
    speaker: '天国 獄',
    text: '아!!!',
  },
  {
    next: './game/part02_game.html'
  }
];


$(function () {
  initDialogue({ sectionSelector: '.part02_story', script: part02_story });
});

$('.skipBtn').click(function () {
  const seenEndings = JSON.parse(localStorage.getItem('seenEndings') || '[]');
		const hasEnd05 = seenEndings.includes('end05');

		if (hasEnd05) {
			$('.skipBtn').show();
		} else {
			$('.skipBtn').hide();
		}
    
    const lastLine = part02_story[part02_story.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
