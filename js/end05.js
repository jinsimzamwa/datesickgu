$(function () {

  const lang = localStorage.getItem('lang') || 'jpn';

  const endTitles = {
    kor: 'END 05 이치쿠우 A열 직관 명당석',
    jpn: 'END 05 いちくう A列の神席'
  };

  $('.end05 .end-text').text(endTitles[lang]);

   $(document).on('click', '.end05', function () {
    $('.container-inner').fadeOut(600, function () {
      $('.container-inner').load('./game/part05_story2.html', function () {
        $('.container-inner').fadeIn(800);
      });
    });
  });
});
