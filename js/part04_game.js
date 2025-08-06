$(function () {

  const seenEndings = JSON.parse(localStorage.getItem('seenEndings') || '[]');
  const hasEnd05 = seenEndings.includes('end05');
   let startSequenceRunning = false;

  if (hasEnd05) {
    $('.skipBtn').show();
  } else {
    $('.skipBtn').hide();
  }

  let currentLang = localStorage.getItem('lang') || 'jpn';
  updatePart01ModalImage(currentLang);

  $('.game-overlay').fadeIn();
  $('.part04-modal').fadeIn();

  let inputDetected = false;
  let successTimeoutId;
  let gameEnded = false;

  $('.success-game, .fail-game').hide();
  $('.start-game').hide();

  function triggerSuccess() {
    if (gameEnded) return;
    gameEnded = true;

    sfxManager.play('success', 0.8);

    const $success = $('.success-game');
    $success.show().removeClass('kaboom');
    void $success[0].offsetWidth;
    $success.addClass('kaboom');

    $success.one('animationend', function () {
      $('.container-inner').fadeOut(600, function () {
        $('.container-inner').load('./game/part04_success.html', function () {
          $('.container-inner').fadeIn(800);
        });
      });
    });
  }

  $('.ok_btn').on('click', function () {
    if (startSequenceRunning) return;
    inputDetected = true;

    $('.part04-modal').fadeOut();

    $('.start-game').show().removeClass('kaboom');
    void $('.start-game')[0].offsetWidth;
    $('.start-game').addClass('kaboom');

    setTimeout(() => {
      $('.start-game').fadeOut();
      $('.game-overlay').fadeOut();

      inputDetected = false;

      $('.part_4_layer1').addClass('move-diagonal');
      $('.part_4_layer5').addClass('pulsate');

      successTimeoutId = setTimeout(() => {
        if (!inputDetected && !gameEnded) {
          triggerSuccess();
        }
      }, 5000);
    }, 800);
  });

  $('.part_4_layer5').on('click', function () {
    if (successTimeoutId && !inputDetected && !gameEnded) {
      sfxManager.play('fail', 0.6);

      inputDetected = true;
      gameEnded = true;
      clearTimeout(successTimeoutId);

      $('.part_4_layer1').addClass('paused');
      $('.part_4_layer5').removeClass('pulsate');

      const $fail = $('.fail-game');
      $fail.show().removeClass('kaboom');
      void $fail[0].offsetWidth;
      $fail.addClass('kaboom');

      $fail.one('animationend', function () {
        $('.container-inner').fadeOut(600, function () {
          $('.container-inner').load('./game/part04_fail.html', function () {
            $('.container-inner').fadeIn(800);
          });
        });
      });
    }
  });

  $('.skipBtn').on('click', function () {
    if (gameEnded) return;

    $('.part04-modal, .game-overlay, .start-game').hide();
    $('.part_4_layer1').addClass('paused');
    $('.part_4_layer5').removeClass('pulsate');

    clearTimeout(successTimeoutId);
    triggerSuccess();
  });

  $('.ok_btn').on('mouseenter', function() {
    sfxManager.play('hover', 0.8);
  });

  function updatePart01ModalImage(lang) {
    const $modalImg = $('.part04-modal img[alt="modal"]');
    if (lang === 'kor') {
      $modalImg.attr('src', './images/ui/modal_4.png');
    } else {
      $modalImg.attr('src', './images/ui/modal_4_JP.png');
    }
  }
});
