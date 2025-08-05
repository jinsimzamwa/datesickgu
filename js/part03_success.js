const part03_success = [
  {
    characters: [
      { name: 'ichiro', position: 'center', expression: 'default' },
    ],
    speaker: '山田一郎',
    text: '(우물우물...)'
  },
  {
    characters: [
      { name: 'ichiro', position: 'center', expression: 'default' },
    ],
    speaker: '山田一郎',
    text: '맛있다.'
  },
  {
    characters: [
      { name: 'kuko', position: 'center', expression: 'default' }
    ],
    speaker: '波羅夷 空却',
    text: '햣하, 그렇지?',
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: '山田三郎',
    text: '뭐하는거야, 진구지 쟈쿠라이!'
  },
    {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: '神宮寺 寂雷',
    text: '역시 식당에서 소란을 일으키는건 좋지 못할 것 같네요. 부상자가 생기면 곤란합니다.'
  },
    {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '재미없게~'
  },
  {
    characters: [
    ],
    speaker: '店員',
    text: '식사 나왔습니다.'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '쓸데없는 짓은 관두고, 밥이나 먹어.'
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' }
    ],
    speaker: '神宮寺 寂雷',
    text: '고마워, 히토야.'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '네 몫은 네가 직접 사!'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '이야, 잘먹을게~'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '직접 사라니까 어른은!'
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: '山田三郎',
    text: '칫...!'
  },
  {
    next: './game/part04_story.html'
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
    
  initDialogue({ sectionSelector: '.part03_success', script: part03_success });
});

$('.skipBtn').click(function () {
    const lastLine = part03_success[part03_success.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
