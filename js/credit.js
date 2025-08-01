
$(function () {
  let step = 0;
  let scrollStarted = false;

  bgmManager.play('credit', true, false);
  bgmManager.fadeIn(0.7, 2000);
 
  $('.credit-lower').hide();

  function showStep(n) {
    const $prev = $('.credit-step.show');
    const $next = $(`.step${n}`);

    $prev.removeClass('show').addClass('fade-out');

    $next.css('display', 'flex');
    setTimeout(() => {
      $next.addClass('show');
    }, 10);

    setTimeout(() => {
      $prev.removeClass('fade-out').css('display', 'none');
    }, 800);

    $next.find('.credit-label').css({ opacity: 1, transform: 'translateY(0)' });


    const seen = JSON.parse(localStorage.getItem('seenEndings') || '[]');
    const all = ['end01', 'end02', 'end03', 'end04', 'end05'];
    const seenAll = all.every(id => seen.includes(id));
    console.log(seenAll)

    // 보너스 이미지 조건적 표시
    if (seenAll && $(`.img${n}`).length) {
      $(`.img${n}`).addClass('show-img');
    }
  }

  $('.credit-screen').on('click', function () {
    if (step < 6) {
      step++;
      showStep(step);
      return;
    }

    if (step === 6) {
      $('.step6').removeClass('show');
      $('.credit-center').css({ opacity: 1 });
      $('.credit-lower').hide();
      step++;
      return;
    }

    if (step === 7 && !scrollStarted) {

      scrollStarted = true;

      $('.credit-lower').show();
      $('.scroll-content').css('top', '-450px');


      step++;
      return;
    }

    if (step === 8) {
      $('.container-inner').fadeOut(600, function () {
        $('.container-inner').load('./game/main.html', function () {
          bgmManager.play('intro', true, false);
          bgmManager.fadeIn(0.7, 2000);

          $('.container-inner').fadeIn(800);
          attachGameEvents();
        });
      });
    }
  });
});