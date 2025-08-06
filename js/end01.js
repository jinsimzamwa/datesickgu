$(function () {

  const lang = localStorage.getItem('lang') || 'jpn';

  const endTitles = {
    kor: 'END 01 데이트하는데 군식구가 너무 많아',
    jpn: 'END 01 デートに絡んでくる邪魔者が多すぎる'
  };

  $('.end01 .end-text').text(endTitles[lang]);

  const modalImg = (lang === 'jpn')
    ? './images/ui/end_modal_JP.png'
    : './images/ui/end_modal.png';
  $('.end01 .end-modal > img').attr('src', modalImg);

  $(document).on('click', '.end01', function (e) {
    if ($(e.target).closest('.end-modal').length) return;
    $('.end-modal-overlay').fadeIn(300);
  });

  $('.go-title').on('click', function () {
    $('.container-inner').fadeOut(600, function () {
      $('.container-inner').load('./game/main.html', function () {
        $('.container-inner').fadeIn(800);
        attachGameEvents();
      });
    });
  });

  $('.continue-game').on('click', function () {
    $('.container-inner').fadeOut(600, function () {
      $('.container-inner').load('./game/part02_game.html', function () {
        $('.container-inner').fadeIn(800);
      });
    });
  });
});
