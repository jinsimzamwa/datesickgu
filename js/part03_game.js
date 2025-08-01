$(function () {
  $('.game-overlay').fadeIn();
  $('.part03-modal').fadeIn();

  let inputDetected = false;
  let successTimeoutId;
  let gameEnded = false;

  $('.success-game, .fail-game').hide();
  $('.start-game').hide();

  // ✅ 1단계 OK 버튼 클릭
  $('.ok_btn').off('click.part03').on('click.part03', function () {
    inputDetected = true;
    $('.part03-modal').fadeOut();

    $('.start-game').show().removeClass('kaboom');
    void $('.start-game')[0].offsetWidth;
    $('.start-game').addClass('kaboom');

    setTimeout(() => {
      $('.start-game').fadeOut();
      $('.game-overlay').fadeOut();
      inputDetected = false;

      $('.part_3_layer2').addClass('upward');

      // ✅ 1단계 성공 타이머
      successTimeoutId = setTimeout(() => {
        if (!inputDetected && !gameEnded) {
          gameEnded = true; // 🔒 바로 잠금

          // 1 → 2단계 진입
          $('.part_3_layer1, .part_3_layer2').fadeOut(100, function () {
            $('.part03_game').css('background-image', 'url(../images/game/part_3_bg2.png)');
            $('.part03_fail-zone').hide();
            $('.part03_fail-zone-2').show();

            $('.part_3_layer3, .part_3_layer4').hide().fadeIn(100);
            $('.part_3_layer4').addClass('upward2');

            // 2단계 성공/실패 판정 시작
            triggerStage2();
          });
        }
      }, 3000);
    }, 800);
  });

  // ✅ 1단계 실패
  $('.part03_fail-zone').off('click.part03').on('click.part03', function () {
    if (successTimeoutId && !inputDetected && !gameEnded) {
      inputDetected = true;
      gameEnded = true; // 🔒 바로 잠금
      clearTimeout(successTimeoutId);

      $('.part_3_layer2').addClass('paused');

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

  let stage2Started = false;

  // ✅ 2단계 로직
  function triggerStage2() {
    if (stage2Started) return;
    
    stage2Started = true;
    let stage2Ended = false;

    // 2단계 성공 타이머
    const timer2 = setTimeout(() => {
      if (!stage2Ended) {
        stage2Ended = true; // 🔒 바로 잠금
        handleStage2Success();
      }
    }, 3000);

    // 2단계 실패
    $('.part03_fail-zone-2')
      .off('click.stage2') // 중복 등록 방지
      .one('click.stage2', function () {
        if (!stage2Ended) {
          stage2Ended = true; // 🔒 바로 잠금
          clearTimeout(timer2);
          handleStage2Fail();
        }
      });
  }

  function handleStage2Success() {
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
});
