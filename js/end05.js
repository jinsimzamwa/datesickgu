$(function () {
   $(document).on('click', '.end05', function () {
    $('.container-inner').fadeOut(600, function () {
      $('.container-inner').load('./game/part05_story2.html', function () {
        $('.container-inner').fadeIn(800);
      });
    });
  });
});
