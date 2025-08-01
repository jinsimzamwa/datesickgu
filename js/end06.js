$(function () {
   $(document).on('click', '.end06', function () {
    $('.container-inner').fadeOut(600, function () {
      $('.container-inner').load('./game/credit.html', function () {
        $('.container-inner').fadeIn(800);
      });
    });
  });
});
