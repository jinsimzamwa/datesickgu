preloadImages([
  '/images/header2.png',
  '/images/credit/bonus1.png',
  '/images/credit/bonus2.png',
  '/images/credit/bonus3.png',
  '/images/credit/bonus4.png',
  '/images/credit/bonus5.png',
  '/images/credit/bonus6.png',
  '/images/credit/credit_end.png'
]);




function attachGameEvents() {
  $('#start').on('click', function () {
    $('.container-inner').load('./game/intro.html');
  });

  $('#credit').on('click', function () {
     $('.container-inner').load('./game/credit.html');
  });

  $('#start, #credit').on('mouseenter', function() {
    sfxManager.play('hover', 0.8); 
  });

  $('#reset').on('click', function () {
    $('#resetModal').fadeIn(200);
  });

  $('#resetOk').on('click', function () {
    localStorage.removeItem('seenEndings');
    $('#resetModal').fadeOut(200);
  });

  $('#resetCancel').on('click', function () {
    $('#resetModal').fadeOut(200);
  });

  $('#kor').on('click', function () {
      alert("준비중입니다.")
      // $('#kor').addClass('selected');
      // $('#jpn').removeClass('selected');
  });

  $('#jpn').on('click', function () {
      $('#jpn').addClass('selected');
      $('#kor').removeClass('selected');
  });

  $('#jpn').addClass('selected');
}

