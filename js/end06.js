$(function () {

  const lang = localStorage.getItem('lang') || 'jpn';

  const endTitles = {
    kor: 'END 06 데이트는 두명이면 충분하다',
    jpn: 'END 06 デートは二人で十分だ'
  };

  $('.end06 .end-text').text(endTitles[lang]);

   $(document).on('click', '.end06', function () {
    $('.container-inner').fadeOut(600, function () {
      $('.container-inner').load('./game/credit.html', function () {
        $('.container-inner').fadeIn(800);
      });
    });
  });
});
