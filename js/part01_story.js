const part01_story = [
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '이 녀석들 멋대로 하고...!',
      jpn: 'あいつら、勝手しやがって…！'
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
      kor: '나에게는 참을 수 없는게 두가지 있다. 하나, 시간을 낭비하는 놈. 둘, 커플을 방해하는 한가한 놈이다.',
      jpn: '俺には我慢ならないモンが2つある。1つ、時間を無駄にするやつ。2つ、カップルを邪魔する暇なやつって事だ。'
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
      kor: '칫, 귀중한 휴일을 이런 식으로 허비하게 하다니...',
      jpn: 'チッ、貴重な休日をこんなふうに無駄にするなんて···'
    } 
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'eyes' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text:  {
      kor: '됐어, 마음대로 하라 그래. 난 돌아간다.',
      jpn: 'もういい、勝手にしろ。俺は帰る。'
    },
  },
    {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'default' },
      { name: 'kuko', position: 'right', expression: 'default' }
    ],
    speaker: '',
    text: '...'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'huu' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: '...?'
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'surp' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text:  {
      kor: '(쿠코네잖아!)',
      jpn: '空却じゃねぇか！？'
    },
  },
  {
    characters: [
      { name: 'hitoya', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷'
    },
    text:  {
      kor: '왜 그래, 히토야?',
      jpn: 'どうしたの、獄？'
    },
  },
  {
    characters: [
      { name: 'hitoya', position: 'left', expression: 'eyes' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text:  {
      kor: '아니...',
      jpn: 'いや……'
    },
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text:  {
      kor: '(이놈들이 알아차리게 되면 소란스러워 질 것 같아...)',
      jpn: '（こいつらにバレたら、面倒な騒ぎになりそうだな……）'
    },
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text:  {
      kor: '(들키지 않게 해야겠는데.)',
      jpn: '（バレないようにしねぇと。）'
    },
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'eyes' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text:  {
      kor: '(이럴 땐 부자연스러운 다른 행동은 금물이다. 쿠코네가 지나갈 때 까지 "아무것도 하지 않으면" 들키지 않을거야...!)',
      jpn: '（今は変な動きはNGだ。空却たちが通り過ぎるまで、“何もしなければ”バレないはずだ……！）'
    },
  }
  ,
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'eyes' }
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text:  {
      kor: '(가만히 있는거야...)',
      jpn: '（そのままでいい。）'
    },
  },
  {
    next: './game/part01_game.html'
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
    
  initDialogue({ sectionSelector: '.part01_story', script: part01_story });
});

$('.skipBtn').click(function () {
    const lastLine = part01_story[part01_story.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
