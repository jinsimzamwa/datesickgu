const part05_story2 = [
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '이야~ 좋은 이야기였네.'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '지루할 정도로 말이야. '
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '근데 여기서 끝이라고 하면, 아쉽지 않아?'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '다른 선택을 했을 때의 이야기 같은 거.'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    endingHint: 'endingHint',
    text:''
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '아저씨는 그런 거 좋아하거든.'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '하지만 기다림이라는거, 꽤 지루한 일이잖아.'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '인내심 강한 너에게 선물을 줄까 하는데.'
  },
  {
    characters: [
    ],
    speaker: '',
    text: '...?'
  },
  {
    characters: [
    ],
    speaker: '',
    text: '[SKIP 버튼이 활성화 되었습니다.]'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '어떻게 쓸진 선택에 맡기지.'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '그럼, 아저씨는 이만!'
  },

  {
    next: './game/credit.html'
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

  bgmManager.fadeOut(0, 1000);
  initDialogue({ sectionSelector: '.part05_story2', script: part05_story2 });
});

$('.skipBtn').click(function () {
    const lastLine = part05_story2[part05_story2.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});