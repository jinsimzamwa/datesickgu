$(function () {

  const lang = localStorage.getItem('lang') || 'jpn';

  const endTitles = {
    kor: 'END 04 누이는 직접 뽑은 녀석이 가장 정이 간다',
    jpn: 'END 04 ぬいぐるみは自分で取ったヤツが一番愛おしい'
  };

  $('.end04 .end-text').text(endTitles[lang]);

  const modalImg = (lang === 'jpn')
    ? './images/ui/end_modal_JP.png'
    : './images/ui/end_modal.png';
  $('.end04 .end-modal > img').attr('src', modalImg);

  $(document).on('click', '.end04', function (e) {
    if ($(e.target).closest('.end-modal').length) return;
    $('.end-modal-overlay').fadeIn(300);
  });

  $('.go-title').on('click', function () {
    $('.container-inner').fadeOut(600, function () {
      $('.container-inner').load('./game/main.html', function () {
        bgmManager.play('intro', true, false);
        bgmManager.fadeIn(0.7, 2000);
        $('.container-inner').fadeIn(800);
        attachGameEvents();
      });
    });
  });

  $('.continue-game').on('click', function () {
    $('.container-inner').fadeOut(600, function () {
      $('.container-inner').load('./game/part04_game.html', function () {
        $('.container-inner').fadeIn(800);
      });
    });
  });
});
