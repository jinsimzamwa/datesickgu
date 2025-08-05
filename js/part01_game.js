$(function () {

  const seenEndings = JSON.parse(localStorage.getItem('seenEndings') || '[]');
  const hasEnd05 = seenEndings.includes('end05');

  if (hasEnd05) {
    $('.skipBtn').show();
  } else {
    $('.skipBtn').hide();
  }

  $('.game-overlay').fadeIn();
  $('.part01-modal').fadeIn();

  let inputDetected = false;
  let successTimeoutId;
  let gameEnded = false;

  $('.success-game, .fail-game').hide();
  $('.start-game').hide();

  function triggerSuccess() {
    if (gameEnded) return;
    gameEnded = true;
    inputDetected = true;

    clearTimeout(successTimeoutId);

    sfxManager.play('success', 0.8);

    const $success = $('.success-game');
    $success.show();
    $success.removeClass('kaboom');
    void $success[0].offsetWidth;
    $success.addClass('kaboom');

    $success.off('animationend').one('animationend', function () {
    $('.container-inner').fadeOut(600, function () {
      $('.container-inner').load('./game/part01_success.html', function () {
        $('.container-inner').fadeIn(800);
      });
    });
  });
}

  $('.ok_btn').on('click', function () {
    inputDetected = true;

    $('.part01-modal').fadeOut();

    $('.start-game').show();
    $('.start-game').removeClass('kaboom');
    void $('.start-game')[0].offsetWidth; 
    $('.start-game').addClass('kaboom');

    setTimeout(() => {
      $('.start-game').fadeOut();
      $('.game-overlay').fadeOut();

      inputDetected = false; 
      $('.part_1_layer1').addClass('walk');

      successTimeoutId = setTimeout(() => {
        if (!inputDetected && !gameEnded) { 
          triggerSuccess();
        }
      }, 5500);
    }, 800);
  });

  $('.part01_game').on('click', function () {
    if (successTimeoutId && !inputDetected && !gameEnded) {
      inputDetected = true;
      gameEnded = true; 
      clearTimeout(successTimeoutId);

      $('.part_1_layer1').addClass('paused');

      sfxManager.play('fail', 0.6);

      const $fail = $('.fail-game');
      $fail.show().removeClass('kaboom');
      void $fail[0].offsetWidth;
      $fail.addClass('kaboom');

      $fail.one('animationend', function () {
        $('.container-inner').fadeOut(600, function () { 
          $('.container-inner').load('./game/part01_fail.html', function () {
            $('.container-inner').fadeIn(800);
          });
        });
      });
    }
  });

  $('.skipBtn').on('click', function () {
    if (gameEnded) return;
    $('.part_1_layer1').addClass('paused');
    clearTimeout(successTimeoutId);
    triggerSuccess(); 
  });

  $('.ok_btn').on('mouseenter', function() {
    sfxManager.play('hover', 0.8); 
  });
});
