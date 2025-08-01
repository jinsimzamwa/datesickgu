$(function () {
  $('.game-overlay').fadeIn();
  $('.part04-modal').fadeIn();

  let inputDetected = false;
  let successTimeoutId;
  let gameEnded = false;

  $('.success-game, .fail-game').hide();
  $('.start-game').hide();

  $('.ok_btn').on('click', function () {
    inputDetected = true;

    $('.part04-modal').fadeOut();

    $('.start-game').show();
    $('.start-game').removeClass('kaboom');
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

          sfxManager.play('success', 0.8);

          gameEnded = true;

          const $success = $('.success-game');
          $success.show();
          $success.removeClass('kaboom');
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
      }, 5000); // 5초 동안 대기 후 성공
    }, 800);
  });

  // 실패 클릭 조건: part_4_layer5 클릭 시
  $('.part_4_layer5').on('click', function () {
    if (successTimeoutId && !inputDetected && !gameEnded) {

      sfxManager.play('fail', 0.6);
      
      inputDetected = true;
      gameEnded = true;
      clearTimeout(successTimeoutId);

      $('.part_4_layer1').addClass('paused');
      $('.part_4_layer5').removeClass('pulsate');

      const $fail = $('.fail-game');
      $fail.show();
      $fail.removeClass('kaboom');
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

  $('.ok_btn').on('mouseenter', function() {
    sfxManager.play('hover', 0.8); 
  });

});