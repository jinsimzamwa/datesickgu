function preloadImages(urls) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

$(function () {
  preloadImages([
    './images/stand/rei_default.png',
    './images/stand/rei_angry.png',
    './images/background/station.png',
    './images/ui/start.png',
    './images/ui/success.png',
    './images/ui/fail.png',
    './images/part3/layer2.png'
  ]);
});

function attachGameEvents() {

  let currentLang = localStorage.getItem('lang') || 'jpn';
  updateLangUI(currentLang);
  updateResetModalText(currentLang);

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
    updateResetModalText(currentLang);
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
    currentLang = 'kor';
    localStorage.setItem('lang', currentLang);
    updateLangUI(currentLang);
    updateResetModalText(currentLang);
  });

  $('#jpn').on('click', function () {
    currentLang = 'jpn';
    localStorage.setItem('lang', currentLang);
    updateLangUI(currentLang);
    updateResetModalText(currentLang);
  });

  function updateLangUI(lang) {
    if (lang === 'kor') {
      $('#kor').addClass('selected');
      $('#jpn').removeClass('selected');
    } else {
      $('#jpn').addClass('selected');
      $('#kor').removeClass('selected');
    }
  }

  function updateResetModalText(lang) {
    if (lang === 'kor') {
      $('#resetModal .modal-text').text('엔딩기록을 삭제하시겠습니까?');
    } else if (lang === 'jpn') {
      $('#resetModal .modal-text').text('エンディング記録を削除しますか？');
    }
  }
}

