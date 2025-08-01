$(function () {
  $('.game-overlay').fadeIn();
  $('.part01-modal').fadeIn();

  let inputDetected = false;
  let successTimeoutId;
  let gameEnded = false;

  $('.success-game, .fail-game').hide();
  $('.start-game').hide();

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
          gameEnded = true;  

          sfxManager.play('success', 0.8);

          const $success = $('.success-game');
          $success.show();
          $success.removeClass('kaboom');
          void $success[0].offsetWidth;
          $success.addClass('kaboom');

          $success.one('animationend', function () {
            $('.container-inner').fadeOut(600, function () { 
              $('.container-inner').load('./game/part01_success.html', function () {
                $('.container-inner').fadeIn(800);
              });
            });

          });
        }
      }, 5500); // success
    }, 800); // start
  });

  $('.part01_game').on('click', function () {
    if (successTimeoutId && !inputDetected && !gameEnded) {
      inputDetected = true;
      gameEnded = true; 
      clearTimeout(successTimeoutId);

      $('.part_1_layer1').addClass('paused');

      sfxManager.play('fail', 0.6);

      const $fail = $('.fail-game');
      $fail.show();
      $fail.removeClass('kaboom');
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

  $('.ok_btn').on('mouseenter', function() {
    sfxManager.play('hover', 0.8); 
  });

});