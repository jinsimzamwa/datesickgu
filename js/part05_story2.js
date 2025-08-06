const part05_story2 = [
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '이야~ 좋은 이야기였네.',
      jpn: 'いや〜、いい話だったなぁ。'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '지루할 정도로 말이야. ',
      jpn: '退屈なくらいにな。'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '근데 여기서 끝이라고 하면, 아쉽지 않아?',
      jpn: 'でもよ、ここで終わりってのは、ちょっと物足りねぇだろ？'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '다른 선택을 했을 때의 이야기 같은 거.',
      jpn: '他のルートを選んでたらどうなってたか、とかさ。'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    endingHint: 'endingHint',
    text: {
      kor: '',
      jpn: ''
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '아저씨는 그런 거 좋아하거든.',
      jpn: 'おいちゃんはそういうの、好きなんだわ。'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '하지만 기다림이라는거, 꽤 지루한 일이잖아.',
      jpn: 'でもまぁ、「待つ」ってのは結構退屈なもんだろ？'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '인내심 강한 너에게 선물을 줄까 하는데.',
      jpn: '我慢強いお前さんに、ちょっとしたご褒美をやろうかと思ってな。'
    }
  },
  {
    characters: [],
    speaker: {
      kor: '',
      jpn: ''
    },
    text: {
      kor: '...?',
      jpn: '...?'
    }
  },
  {
    characters: [],
    speaker: {
      kor: '',
      jpn: ''
    },
    text: {
      kor: '[SKIP 버튼이 활성화 되었습니다.]',
      jpn: '[SKIPボタンが有効になりました。]'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '어떻게 쓸진 선택에 맡기지.',
      jpn: 'どう使うかは、お前さん次第だ。'
    }
  },
  {
    characters: [
      { name: 'rei', position: 'center', expression: 'sunoff' },
    ],
    speaker: {
      kor: '아마야도 레이',
      jpn: '天谷奴 零'
    },
    text: {
      kor: '그럼, 아저씨는 이만!',
      jpn: 'んじゃ、おいちゃんはこれで失礼するわ！'
    }
  },
  {
    next: './game/credit.html'
  }
];


$(function () {
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