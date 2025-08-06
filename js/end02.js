$(function () {

  const lang = localStorage.getItem('lang') || 'jpn';

  const endTitles = {
    kor: 'END 02 책임지고 치료해드리겠습니다',
    jpn: 'END 02 責任を持って治療します'
  };

  $('.end02 .end-text').text(endTitles[lang]);

  const modalImg = (lang === 'jpn')
    ? './images/ui/end_modal_JP.png'
    : './images/ui/end_modal.png';
  $('.end02 .end-modal > img').attr('src', modalImg);

  $(document).on('click', '.end02', function (e) {
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
      $('.container-inner').load('./game/part03_game.html', function () {
        $('.container-inner').fadeIn(800);
      });
    });
  });
});
