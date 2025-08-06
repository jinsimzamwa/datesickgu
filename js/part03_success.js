const part03_success = [
  {
    characters: [
      { name: 'ichiro', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎',
    },
    text: {
      kor: '(우물우물...)',
      jpn: '（もぐもぐ……）',
    },
  },
  {
    characters: [
      { name: 'ichiro', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎',
    },
    text: {
      kor: '맛있다.',
      jpn: 'うまいな。',
    },
  },
  {
    characters: [
      { name: 'kuko', position: 'center', expression: 'default' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却',
    },
    text: {
      kor: '햣하, 그렇지?',
      jpn: 'ヒャッハ！だろ？',
    },
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎',
    },
    text: {
      kor: '뭐하는거야, 진구지 쟈쿠라이!',
      jpn: '何やってんだ、神宮寺 寂雷！',
    },
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷',
    },
    text: {
      kor: '역시 식당에서 소란을 일으키는건 좋지 못할 것 같네요. 부상자가 생기면 곤란합니다.',
      jpn: 'やっぱり、飲食店で騒ぎを起こすのはまずいですね。ケガ人が出るのは困ります。',
    },
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零',
    },
    text: {
      kor: '재미없게~',
      jpn: 'つまんねえの〜',
    },
  },
  {
    characters: [
    ],
    speaker: {
      kor: '店員',
      jpn: '店員',
    },
    text: {
      kor: '식사 나왔습니다.',
      jpn: 'お待たせしました。 ラーメンお持ちしました。',
    },
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄',
    },
    text: {
      kor: '쓸데없는 짓은 관두고, 밥이나 먹어.',
      jpn: 'くだらないことはやめて、さっさと食え。',
    },
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' }
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷',
    },
    text: {
      kor: '고마워, 히토야.',
      jpn: 'ありがとう、獄。',
    },
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄',
    },
    text: {
      kor: '네 몫은 네가 직접 사!',
      jpn: '自分の分は自分で払え！',
    },
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零',
    },
    text: {
      kor: '이야, 잘먹을게~',
      jpn: 'やった〜、いただきま〜す♪',
    },
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄',
    },
    text: {
      kor: '직접 사라니까 어른은!',
      jpn: '大人なんだから自分で払えって！',
    },
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎',
    },
    text: {
      kor: '칫...!',
      jpn: 'チッ……！',
    },
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
