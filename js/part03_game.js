$(function () {

  const seenEndings = JSON.parse(localStorage.getItem('seenEndings') || '[]');
  const hasEnd05 = seenEndings.includes('end05');

  if (hasEnd05) {
    $('.skipBtn').show();
  } else {
    $('.skipBtn').hide();
  }

  $('.game-overlay').fadeIn();
  $('.part03-modal').fadeIn();

  let inputDetected = false;
  let successTimeoutId;
  let gameEnded = false;
  let stage2Started = false;
  let stage2Ended = false;
  let stage2TimerId;

  function triggerFinalSuccess() {
    if (gameEnded) return;
    gameEnded = true;

    sfxManager.play('success', 0.8);

    const $success = $('.success-game');
    $success.show().removeClass('kaboom');
    void $success[0].offsetWidth;
    $success.addClass('kaboom');

    $success.one('animationend', function () {
      $('.container-inner').fadeOut(600, function () {
        $('.container-inner').load('./game/part03_success.html', function () {
          $('.container-inner').fadeIn(800);
        });
      });
    });
  }

  $('.ok_btn').off('click.part03').on('click.part03', function () {
    inputDetected = true;
    $('.part03-modal').fadeOut();

    $('.part03_game').addClass('cursor-road');

    $('.start-game').show().removeClass('kaboom');
    void $('.start-game')[0].offsetWidth;
    $('.start-game').addClass('kaboom');

    setTimeout(() => {
      $('.start-game').fadeOut();
      $('.game-overlay').fadeOut();
      inputDetected = false;

      $('.part_3_layer2').addClass('upward');

      successTimeoutId = setTimeout(() => {
        if (!inputDetected && !gameEnded) {
          gameEnded = true;
          stage2Started = true;

          $('.part_3_layer1, .part_3_layer2, .part_3_target').fadeOut(100, function () {
            $('.part03_game').css('background-image', 'url(./images/game/part_3_bg2.png)');
            $('.part03_fail-zone').hide();
            $('.part03_fail-zone-2').show();

            $('.part_3_layer3, .part_3_layer4').hide().fadeIn(100);
            $('.part_3_layer4').addClass('upward2');

            triggerStage2();
          });
        }
      }, 3000);
    }, 800);
  });

  $('.part03_fail-zone').off('click.part03').on('click.part03', function () {
    if (successTimeoutId && !inputDetected && !gameEnded) {
      inputDetected = true;
      gameEnded = true;
      clearTimeout(successTimeoutId);

      $('.part_3_layer2').addClass('paused');

      sfxManager.play('fail', 0.6);

      const $fail = $('.fail-game');
      $fail.show().removeClass('kaboom');
      void $fail[0].offsetWidth;
      $fail.addClass('kaboom');

      $fail.one('animationend', function () {
        $('.container-inner').fadeOut(600, function () {
          $('.container-inner').load('./game/part03_fail_1.html', function () {
            $('.container-inner').fadeIn(800);
          });
        });
      });
    }
  });

  function triggerStage2() {
    if (stage2Started && stage2TimerId) return;

    gameEnded = false;
    stage2Started = true;
    stage2Ended = false;

    stage2TimerId = setTimeout(() => {
      if (!stage2Ended) {
        stage2Ended = true;
        handleStage2Success();
      }
    }, 3000);

    $('.part03_fail-zone-2')
      .off('click.stage2')
      .one('click.stage2', function () {
        if (!stage2Ended) {
          stage2Ended = true;
          clearTimeout(stage2TimerId);
          handleStage2Fail();
        }
      });
  }

  function handleStage2Success() {
    if (gameEnded) return;
    gameEnded = true;

    sfxManager.play('success', 0.8);

    const $success = $('.success-game');
    $success.show().removeClass('kaboom');
    void $success[0].offsetWidth;
    $success.addClass('kaboom');

    $success.one('animationend', function () {
      $('.container-inner').fadeOut(600, function () {
        $('.container-inner').load('./game/part03_success.html', function () {
          $('.container-inner').fadeIn(800);
        });
      });
    });
  }

  function handleStage2Fail() {
    sfxManager.play('fail', 0.6);
    $('.part_3_layer4').addClass('paused2');

    const $fail = $('.fail-game');
    $fail.show().removeClass('kaboom');
    void $fail[0].offsetWidth;
    $fail.addClass('kaboom');

    $fail.one('animationend', function () {
      $('.container-inner').fadeOut(600, function () {
        $('.container-inner').load('./game/part03_fail_2.html', function () {
          $('.container-inner').fadeIn(800);
        });
      });
    });
  }

  $('.skipBtn').off('click.part03skip').on('click.part03skip', function () {

  clearTimeout(successTimeoutId);
  clearTimeout(stage2TimerId);

  $('.part03_fail-zone').off('click.part03');
  $('.part03_fail-zone-2').off('click.stage2');

  $('.part03-modal, .game-overlay, .start-game').hide();

  if (stage2Started) {
    $('.part_3_layer4').addClass('paused2');
    stage2Ended = true;
    handleStage2Success();
  } else {
    $('.part_3_layer2').addClass('paused');
    triggerFinalSuccess();
  }
});

  $('.ok_btn').on('mouseenter', function () {
    sfxManager.play('hover', 0.8);
  });

});
