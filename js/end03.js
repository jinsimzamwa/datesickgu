$(function () {

  const lang = localStorage.getItem('lang') || 'jpn';

  const endTitles = {
    kor: 'END 03 식당은 단체로 가야 다양한 메뉴를 먹는다.',
    jpn: 'END 03 飯屋はみんなで行けば色んなメニューが楽しめる。'
  };

  $('.end03 .end-text').text(endTitles[lang]);

  const modalImg = (lang === 'jpn')
    ? './images/ui/end_modal_JP.png'
    : './images/ui/end_modal.png';
  $('.end03 .end-modal > img').attr('src', modalImg);

  $(document).on('click', '.end03', function (e) {
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
