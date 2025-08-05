const part01_success = [
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(저 녀석들은 잘 지나갔나...)'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '(이대로 계속 발견하지 못하면 좋으련만)'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' }
    ],
    speaker: '波羅夷 空却',
    text: '이치로오!!! 소승 배고프니까 라멘 먹으러 가자!'
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' }
    ],
    speaker: '山田一郎',
    text: '그럴까! 마침 나도 배고프고.'
  },
    {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: '天国 獄',
    text: '저 바보들이 큰 소리로...!'
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: '天谷奴 零',
    text: '어라, 저 쪽에 있었네~',
  },
  {
    next: './game/part01_story2.html'
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
    
  initDialogue({ sectionSelector: '.part01_success', script: part01_success });
});

$('.skipBtn').click(function () {
    const lastLine = part01_success[part01_success.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
