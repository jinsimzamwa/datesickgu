const part01_fail = [
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷'
    },
    text: {
      kor: '히토야, 그 쪽에 뭔가 있어?',
      jpn: '獄、そっちに何かあるのか？'
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
      kor: '(아차...!)',
      jpn: '（しまった！）'
    }
  },
  {
    characters: [
      { name: 'jakurai', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'surp' }
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷'
    },
    text: {
      kor: '아, 이치로 군과 쿠코 군이 저 쪽에 있었네요.',
      jpn: 'あ、一郎くんと波羅夷くん、あちらにいたんですね。'
    }
  },
  {
    characters: [
      { name: 'jakurai', position: 'left', expression: 'default' },
      { name: 'hitoya', position: 'right', expression: 'surp' }
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '바보, 말하지마!',
      jpn: 'バカ、言うな！'
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
      jpn: 'なーんだ、あっちにいたんだ〜'
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
      kor: '(젠장, 실수해버렸다...)',
      jpn: '（くそっ、やっちまった……）'
    }
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '(이번엔 무사히 넘어갔지만, 괜한 일이 벌어지지 않도록 해야겠어.)',
      jpn: '（今回は何とかごまかせたが、余計な騒ぎにならないように気をつけないとな…）'
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

  initDialogue({ sectionSelector: '.part01_fail', script: part01_fail });
});


$('.skipBtn').click(function () {
    const lastLine = part01_fail[part01_fail.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
