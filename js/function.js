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
}