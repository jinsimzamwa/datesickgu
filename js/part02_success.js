const part02_success = [
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'hut' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '(휴... 무사히 지나갔다.)',
      jpn: '（ふぅ……なんとかバレずに済んだ。）'
    }
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'ang1' },
      { name: 'rei', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎'
    },
    text: {
      kor: '뭐하는거야, 아마구니!',
      jpn: '何してんだよ、天国 ！'
    }
  },
  {
    characters: [
      { name: 'saburo', position: 'left', expression: 'ang1' },
      { name: 'rei', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '어이어이, 기대했는데 말야~ 아저씨 조금 실망해버렸을지도~',
      jpn: 'おいおい、楽しみにしてたんだけどなぁ〜？おいちゃん、ちょっとがっかりしちゃったかもよ～'
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
      kor: '나에겐 참을 수 없는게 두 가지 있다.',
      jpn: '俺には我慢ならないモンが2つある。'
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
      kor: '하나, 협조한다고 한 적도 없는데 나무라는 놈,',
      jpn: '1つ、協力するなんて一言も言ってないのに文句言ってくるやつ。'
    }
  },
  {
    characters: [
      { name: 'hitoya', position: 'center', expression: 'haaa' },
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '둘, 기대하라고 한 적 없는데 멋대로 실망하는 놈이다.',
      jpn: '2つ、期待しろとも言ってないのに勝手にガッカリするやつだ。'
    }
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'ang1' },
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎'
    },
    text: {
      kor: '제대로 하지 못한 녀석에게 듣고 싶지 않아!',
      jpn: 'まともにできなかった奴に言われたくねえ！'
    }
  },
  {
    characters: [
      { name: 'hitoya', position: 'left', expression: 'default' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '한다고 한 적도 없다니까. 내말은 듣고있긴 한거냐.',
      jpn: 'やるとも言ってないだろ。 俺の話を聞いているのか。'
    }
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
    text: {
      kor: '듣고있지 않은 것 같아, 히토야.',
      jpn: '聞いてないみたいだね、獄。'
    }
  },
  {
    characters: [
      { name: 'hitoya', position: 'left', expression: 'haa' },
      { name: 'jakurai', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '아마구니 히토야',
      jpn: '天国 獄'
    },
    text: {
      kor: '짚어주지 않아도 알고있어...!!',
      jpn: '言われなくても分かってる……！！'
    }
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'at' },
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎'
    },
    text: {
      kor: '앗, 이치형이 가게로 들어간다!',
      jpn: 'あっ、一兄が路地に入っていった！'
    }
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'default' },
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷'
    },
    text: {
      kor: '이제부턴 차로 따라가기 힘들겁니다. 내려서 쫓아가죠.',
      jpn: 'ここからは車でついて行くのは大変でしょう。 降りて追いかけましょう。'
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
      kor: '절호의 기회였는데...! 쳇, 지나간건 어쩔 수 없지. 따라가자!',
      jpn: '絶好のチャンスだったのに……！ ちっ、逃したもんは仕方ない。追うぞ！'
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
      kor: '하하, 아마구니도 얼른 가야지.',
      jpn: 'ハハ、天国も早く行こうぜ。'
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
      kor: '주차하고 가야한다고, 어이! 멋대로 가서 사고치지마!',
      jpn: '駐車してから行くもんだろ！勝手に動いてトラブル起こすなよ。'
    }
  },
  {
    next: './game/part03_story.html'
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

  initDialogue({ sectionSelector: '.part02_success', script: part02_success });
});


$('.skipBtn').click(function () {

    const lastLine = part02_success[part02_success.length - 1];
    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
