const part02_fail = [
  {
    characters: [
      { name: 'kuko', position: 'center', expression: 'waa' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却'
    },
    text: {
      kor: '우아악!',
      jpn: 'うぐあああ！'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'center', expression: 'waa' },
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎'
    },
    text: {
      kor: '쿠코!',
      jpn: '空却!'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'gon' },
      { name: 'kuko', position: 'right', expression: 'waa' }
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎'
    },
    text: {
      kor: '흠뻑 젖어버렸네...',
      jpn: 'びしょ濡れじゃないか……。'
    }
  },
  {
    characters: [
      { name: 'saburo', position: 'center', expression: 'yata' },
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎'
    },
    text: {
      kor: '됐다!!!',
      jpn: 'やったーーー！！！'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'laugh' }
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '오, 제법인데~',
      jpn: 'おっ、やるじゃん〜。'
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
      kor: '젠장, 운전자를 정신사납게 하지마! 너네 칭찬받으려고 한 게 아냐! ',
      jpn: 'くそっ、運転手の気を散らすな！褒めてもらおうなんて思ってないからな！'
    }
  },
  {
    characters: [
      { name: 'kuko', position: 'center', expression: 'dare' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却'
    },
    text: {
      kor: '어떤 놈이냐!',
      jpn: '何奴だ！'
    }
  },
  {
    characters: [
      { name: 'kuko', position: 'center', expression: 'ee' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却'
    },
    text: {
      kor: '...어? 히토야?!',
      jpn: '……って、獄？'
    }
  }, 
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'why' },
      { name: 'saburo', position: 'center', expression: 'at' },
      { name: 'jakurai', position: 'right', expression: 'at' },
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎'
    },
    text: {
      kor: '아마구니 씨가 왜... 어라, 사부로? 쟈쿠라이 씨도...?',
      jpn: '天国さんがなんで……って、三郎？寂雷さんも……？'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'default' }
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '파파는 안보이는거냐?',
      jpn: 'パパは見えないのかな〜？'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'why' },
      { name: 'saburo', position: 'center', expression: 'at' },
      { name: 'jakurai', position: 'right', expression: 'at' },
    ],
    speaker: {
      kor: '야마다 사부로',
      jpn: '山田三郎'
    },
    text: {
      kor: '아차, 이치형...',
      jpn: 'い、一兄…'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'why' },
      { name: 'saburo', position: 'center', expression: 'at' },
      { name: 'jakurai', position: 'right', expression: 'at' },
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎'
    },
    text: {
      kor: '다들 왜 여기에...',
      jpn: 'みんな、なんでここに…'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'why' },
      { name: 'saburo', position: 'center', expression: 'at' },
      { name: 'jakurai', position: 'right', expression: 'at' },
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷'
    },
    text: {
      kor: '이치로 군, 그게...',
      jpn: '一郎くん、それは……'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'laugh' }
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '우연히 만나서 놀러가고 있었을 뿐이야. 신경 쓰지마~',
      jpn: 'たまたま会ってさ、遊びに行こうとしてただけだ。気にすんな〜。'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'why' },
      { name: 'kuko', position: 'right', expression: 'hya' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却'
    },
    text: {
      kor: '재밌어 보이잖냐! 이런 흥미로운 자리에 소승들이 빠질 수야 없지.',
      jpn: '面白そうじゃねえか！そんな興味深い場には拙僧たちが欠かせないだろ。'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'waa' },
      { name: 'kuko', position: 'right', expression: 'hya' }
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎'
    },
    text: {
      kor: '잠깐 쿠코...!',
      jpn: 'ちょ、空却……！'
    }
  },
  {
    characters: [
      { name: 'jakurai', position: 'center', expression: 'at' }
    ],
    speaker: {
      kor: '진구지 쟈쿠라이',
      jpn: '神宮寺 寂雷'
    },
    text: {
      kor: '두 사람 같이 시간을 보내던 중이지 않았나요?',
      jpn: 'お二人で一緒に過ごす予定じゃないんですか？'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'waa' },
      { name: 'kuko', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却'
    },
    text: {
      kor: '단둘이 노는 것도 나쁘지 않지만 말야~ 다같이 노는 편이 더 즐겁잖아? 이치로의 동생도 있고, 우리 변호사는 재밌는 곳도 엄청 많이 안다고. 최고잖냐!',
      jpn: '二人っきりも悪くないけどなぁ、みんなで遊ぶ方が楽しいだろ？一郎の弟もいるし、うちの弁護士は面白い場所もいっぱい知ってるし。最高じゃねーか！'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'gon' },
      { name: 'kuko', position: 'right', expression: 'default' }
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎'
    },
    text: {
      kor: '...응, 즐겁겠지.',
      jpn: '……うん、楽しそうだな。'
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
      kor: '(거기선 당연히 그렇게 대답하지...!)',
      jpn: '（そりゃあ、そう答えるしかないだろ……！）'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'gon' },
      { name: 'kuko', position: 'right', expression: 'hya' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却'
    },
    text: {
      kor: '햣하하! 잘됐잖냐~!',
      jpn: 'ヒャッハハ！よかったじゃん〜！'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'gon' },
      { name: 'kuko', position: 'right', expression: 'hya' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却'
    },
    text: {
      kor: '이치로는 많은 사람들과 즐겁게 노는 편이 어울리고~!',
      jpn: '一郎は、みんなとワイワイ楽しく遊ぶ方が似合ってるし〜！'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'left', expression: 'gon' },
      { name: 'kuko', position: 'right', expression: 'hya' }
    ],
    speaker: {
      kor: '하라이 쿠코',
      jpn: '波羅夷 空却'
    },
    text: {
      kor: '다행이네, 이치로!',
      jpn: 'よかったな、一郎！'
    }
  },
  {
    characters: [
      { name: 'ichiro', position: 'center', expression: 'ok' },
    ],
    speaker: {
      kor: '야마다 이치로',
      jpn: '山田一郎'
    },
    text: {
      kor: '응...',
      jpn: 'うん……。'
    }
  },
  {
    next: './game/end01.html'
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
    
  initDialogue({ sectionSelector: '.part02_fail', script: part02_fail });
});

$('.skipBtn').click(function () {
    const lastLine = part02_fail[part02_fail.length - 1];

    localStorage.setItem('seenEndings', JSON.stringify([ 'end01']));

    if (lastLine.next) {
        $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
            $('.container-inner').animate({ opacity: 1 }, 800);
        });
    }
});
