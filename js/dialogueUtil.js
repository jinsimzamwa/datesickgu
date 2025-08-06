const characterAdjustments = {
  ichiro: { default: { scale: 1.5, x: 0, y: -27 }, angry: { scale: 1, x: 0, y: 0 } },
  kuko:   { default: { scale: 1.35, x: 0, y: 0 } },
  saburo: { default: { scale: 0.95, x: 0, y: 142 } },
  hitoya: { default: { scale: 1.25, x: 0, y: -18 } },
  rei:    { default: { scale: 1.75, x: 0, y: -128 } },
  jakurai:{ default: { scale: 1.8, x: 0, y: -90 } }
};

function initDialogue({ sectionSelector, script }) {
  let currentIndex = 0;
  let isTyping = false;
  let isLocked = false; 
  let typingTimer;

  const $section = $(sectionSelector);
  const $nameBox = $section.find('.name-box');
  const $textBox = $section.find('.text-text');
  const $next = $section.find('.next-indicator');

  function stopDialogue() {
    clearInterval(typingTimer);
    isTyping = false;
    isLocked = false;
    currentIndex = script.length;
    $section.off('click', '.dialogue-box');
  }

  function getLineText(line) {
    const lang = localStorage.getItem('lang') || 'jpn';
    let baseText = (typeof line.text === 'object') ? line.text[lang] : line.text;

    if (line.endingHint) {
      let seen = JSON.parse(localStorage.getItem('seenEndings') || '[]');

      const endingDescriptions = {
        kor: {
          end01: '성대하게 물이 튀게 만든다거나, ',
          end02: '의자를 부숴서 좋은 분위기를 엉망으로 만든다거나, ',
          end03: '가라아게를 먹여주기 직전에 방해한다거나, ',
          end04: '인형을 뽑지 못하게 만들어 분위기를 불편하게 만든다거나'
        },
        jpn: {
          end01: '盛大に水が飛び散ったり、',
          end02: '椅子を壊して良い雰囲気を台無しにしたり、',
          end03: '唐揚げを食べさせる直前に邪魔をしたり、',
          end04: 'ぬいぐるみを取らせないようにして気まずくさせたり'
        }
      };

      const unseen = Object.keys(endingDescriptions[lang]).filter(e => !seen.includes(e));

      if (unseen.length > 0) {
        const descriptions = unseen.map(e => endingDescriptions[lang][e]).join('\n');
        if (lang === 'kor') {
          baseText = `${descriptions}\n...그런 일들을 아직 보지 못했잖아?`;
        } else {
          baseText = `${descriptions}\n…そんな出来事、まだ見てないだろう？`;
        }
      } else {
        if (lang === 'kor') {
          baseText = `이 데이트를 다시 한번 지켜보면 다른 이야기를 볼 수 있을지도 몰라.`;
        } else {
          baseText = `このデートをもう一度見守れば、別の物語が見られるかもしれないな。`;
        }
      }
    }

    return baseText;
  }

  function getSpeaker(line) {
    const lang = localStorage.getItem('lang') || 'jpn';
    return (typeof line.speaker === 'object') ? line.speaker[lang] : line.speaker;
  }

  function renderCharacters(characters) {
    const $standingArea = $section.find('.standing-area');
    $standingArea
      .removeClass('char-count-1 char-count-2 char-count-3')
      .addClass(`char-count-${characters.length}`);

    ['left', 'center', 'right'].forEach(pos => {
      const $char = $section.find(`.character.${pos}`);
      $char.empty().css({ opacity: 0, transform: 'none' });
    });

    characters.forEach(char => {
      const $char = $section.find(`.character.${char.position}`);
      const imgSrc = `./images/stand/${char.name}_${char.expression}.png`;

      const adjust = (characterAdjustments[char.name]?.[char.expression] ||
                      characterAdjustments[char.name]?.['default'] || 
                      { scale: 1, x: 0, y: 0 });

      $char.html(`<img src="${imgSrc}" alt="${char.name}">`);
      $char.css({
        opacity: 1,
        transform: `scale(${adjust.scale}) translate(${adjust.x}px, ${adjust.y}px)`
      });
    });

    if (characters.length === 2 &&
        characters.some(c => c.position === 'left') &&
        characters.some(c => c.position === 'right')) {

      const leftChar = characters.find(c => c.position === 'left');
      const rightChar = characters.find(c => c.position === 'right');

      const $left = $section.find('.character.left');
      const $right = $section.find('.character.right');

      const leftAdjust = characterAdjustments[leftChar.name]?.[leftChar.expression] || characterAdjustments[leftChar.name]?.default || { scale: 1, x: 0, y: 0 };
      const rightAdjust = characterAdjustments[rightChar.name]?.[rightChar.expression] || characterAdjustments[rightChar.name]?.default || { scale: 1, x: 0, y: 0 };

      $left.css('transform', `scale(${leftAdjust.scale}) translate(${leftAdjust.x + 50}px, ${leftAdjust.y}px)`);
      $right.css('transform', `scale(${rightAdjust.scale}) translate(${rightAdjust.x - 50}px, ${rightAdjust.y}px)`);
    }
  }

  function showDialogueLine(index) {
    if (index >= script.length) return;

    const line = script[index];
    let speakerText = getSpeaker(line);
    let lineText = getLineText(line);

    if (index === script.length - 1 && line.next) {
      $('.dialogue-box').hide();

      let finalNext = line.next;
      const match = line.next.match(/end(\d+)\.html$/);
      if (match) {
        const endingId = `end${match[1]}`;
        saveEndingSeen(endingId);
      }

      if (line.next === 'finalNext') {
        const seen = JSON.parse(localStorage.getItem('seenEndings') || '[]');
        const all = ['end01', 'end02', 'end03', 'end04', 'end05'];
        const seenAll = all.every(id => seen.includes(id));
        finalNext = seenAll ? './game/part05_story_true.html' : './game/part05_story.html';
      }

      $('.container-inner').fadeOut(600, function () {
        $('.container-inner').load(finalNext, function () {
          $('.container-inner').fadeIn(800);
        });
      });
      return;
    }

    if (line.bgOff) bgmManager.fadeOut(0, 1000);
    if (line.bgTrueEnd) {
      bgmManager.play('trueEnd', true, false);
      bgmManager.fadeIn(0.7, 4000);
    }

    if (line.bgChange) {
      isLocked = true;
      let fadeSpeed = (line.bgChange == 'end06') ? 2000 : 3000;
      $('.dialogue-box').animate({ opacity: 0 }, 300);
      $section.find('.character').animate({ opacity: 0 }, 300);
      $section.fadeOut(400, function () {
        $section
          .css('background-image', 'url(./images/background/' + line.bgChange + '.png)')
          .css({ backgroundPositionX: '0%' })
          .fadeIn(100)
          .promise()
          .then(() => {
            $section.animate(
              { backgroundPositionX: '88%' },
              fadeSpeed,
              () => {
                $('.dialogue-box').animate({ opacity: 1 }, 300);
                $section.find('.character').animate({ opacity: 1 }, 300);
                isLocked = false;
                currentIndex++;
                showDialogueLine(currentIndex);
              }
            );
          });
      });
      return;
    }

    if (line.bgRestore) {
      $('.part05_story, .part05_story_true')
        .stop(true, true)
        .css('background-image', 'url(./images/background/station.png)')
        .css({ backgroundPositionX: '0%' });
      $('.dialogue-box').fadeIn(300);
      $section.find('.character').show();
    }

    if (line.hideDialogue) {
      $('.dialogue-box').fadeOut(300);
      $section.find('.character').fadeOut(300);
      return;
    }

    renderCharacters(line.characters);

    $nameBox.text(speakerText || '');
    $textBox.empty();
    $next.hide();

    isTyping = true;
    let i = 0;
    clearInterval(typingTimer);
    typingTimer = setInterval(() => {
      $textBox.append(lineText[i]);
      i++;
      if (i >= lineText.length) {
        clearInterval(typingTimer);
        isTyping = false;
        $next.fadeIn();
      }
    }, 40);
  }

  $section.on('click', '.dialogue-box', function () {
    if (isLocked) return;
    if (isTyping) {
      clearInterval(typingTimer);
      const textContent = getLineText(script[currentIndex]);
      $textBox.text(textContent);
      $next.fadeIn();
      isTyping = false;
    } else {
      currentIndex++;
      showDialogueLine(currentIndex);
    }
  });

  showDialogueLine(currentIndex);

  $('.skipBtn').off('click.dialogueSkip').on('click.dialogueSkip', function () {
    stopDialogue();
    const lastLine = script[script.length - 1];
    if (lastLine.next) {
      $('.container-inner').css('opacity', 0).load(lastLine.next, function () {
        $('.container-inner').animate({ opacity: 1 }, 800);
      });
    }
  });
}

const allEndings = ['end01', 'end02', 'end03', 'end04', 'end05'];
function saveEndingSeen(endingId) {
  let seen = JSON.parse(localStorage.getItem('seenEndings') || '[]');
  if (!seen.includes(endingId)) {
    seen.push(endingId);
    localStorage.setItem('seenEndings', JSON.stringify(seen));
  }
}
function hasSeenAllEndings() {
  const seen = JSON.parse(localStorage.getItem('seenEndings') || '[]');
  return allEndings.every(end => seen.includes(end));
}
