window.basePath = location.hostname.includes('github.io') ? '/datesickgu' : '';
window.asset = path => `${basePath}${path}`;

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