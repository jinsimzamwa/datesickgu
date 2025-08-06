const part01_success = [
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'eyes' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '(저 녀석들은 잘 지나갔나...)',
      jpn: '（あいつら、無事に通り過ぎたか……）'
    }
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'haa' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '(이대로 계속 발견하지 못하면 좋으련만)',
      jpn: '（このまま気づかずにいてくれりゃいいが……）'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却'
    },
    text: {
      kor: '이치로오!!! 소승 배고프니까 라멘 먹으러 가자!',
      jpn: '一郎ぉ！！！　拙僧、腹が減った！ ラーメン食べに行こうぜ！'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎'
    },
    text: {
      kor: '그럴까! 마침 나도 배고프고.',
      jpn: 'いいね！俺もちょうど腹減ってたし！'
    }
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'surp' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '저 바보들이 큰 소리로...!',
      jpn: '（あのバカたちが大声で…！）'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'laugh' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '어라, 저 쪽에 있었네~',
      jpn: 'なーんだ、あっちにいたのか〜'
    }
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
