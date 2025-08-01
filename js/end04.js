$(function () {

  let hasClicked = false;

  $(document).on('click', '.end04', function (e) {
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
      $('.container-inner').load('./game/part04_game.html', function () {
        $('.container-inner').fadeIn(800);
      });
    });
  });
});
