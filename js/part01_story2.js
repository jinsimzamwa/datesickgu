const part01_story2 = [
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎'
    },
    text: {
      kor: '칫, 순진한 이치형을 꼬드기고 있었겠다!',
      jpn: 'ちっ、純真な一兄を口説きやがって！'
    }
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷'
    },
    text: {
      kor: '사부로 군, 이치로 군을 어떻게 인식하고 있는 건가요?',
      jpn: '三郎くん、一郎くんのことをどう認識しているんですか？'
    }
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎'
    },
    text: {
      kor: '이치형에게 쓸데없는 짓 못하게 하겠어 하라이 쿠코!!',
      jpn: '一兄に余計なことはさせねえぞ、波羅夷 空却！！'
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
      kor: '이러는 게 제일 쓸데없는 것 같지만!',
      jpn: 'お前が一番余計なことしてるように見えるけど。'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '하하, 한창 앞만 보고 나아갈 열정적인 나이지.',
      jpn: 'ははっ、前しか見えねぇってのは若さの特権だな〜。'
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
      kor: '부추기지 마!',
      jpn: '煽るな！'
    }
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' }
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷'
    },
    text: {
      kor: '흠. 저 두 사람, 자리를 옮기려는 것 같네요.',
      jpn: 'ふむ、あの二人、席を移動しそうですね。'
    }
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'rei', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎'
    },
    text: {
      kor: '쫓아가!',
      jpn: '追うぞ！'
    }
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'rei', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '좋았어~!',
      jpn: 'よし！'
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
      kor: '젠장...! 이놈이고 저놈이고 제멋대로. 기다려!',
      jpn: 'くそっ…！どいつもこいつも勝手しやがって。待て！'
    }
  },
  {
    next: './game/part02_story.html'
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
    
  initDialogue({ sectionSelector: '.part01_story2', script: part01_story2 });
  bgmManager.play('story', true, false);
  bgmManager.fadeIn(0.7, 2000);
});

$('.skipBtn').click(function () {
    const lastLine = part01_story2[part01_story2.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
