function preloadImages(urls) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

$(function () {
  preloadImages([
    './images/stand/hitoya_default.png',
    './images/stand/hitoya_eyes.png',
    './images/stand/hitoya_haaa.png',
    './images/stand/hitoya_hut.png',
    './images/stand/hitoya_huu.png',
    './images/stand/hitoya_surp.png',

    './images/stand/rei_default.png',
    './images/stand/rei_laugh.png',
    './images/stand/rei_sunoff.png',

    './images/stand/saburo_ang1.png',
    './images/stand/saburo_ang2.png',
    './images/stand/saburo_at.png',
    './images/stand/saburo_default.png',
    './images/stand/saburo_happy.png',
    './images/stand/saburo_simu.png',
    './images/stand/saburo_wakan.png',
    './images/stand/saburo_wakan2.png',
    './images/stand/saburo_yata.png',

    './images/stand/jakurai_at.png',
    './images/stand/jakurai_default.png',
    './images/stand/jakurai_idle.png',
    './images/stand/jakurai_smile.png',

    './images/stand/kuko_default.png',

    './images/stand/ichiro_default.png',

    './images/game/part_1_bg.png',
    './images/game/part_1_layer0.png',
    './images/game/part_1_layer1.png',
    './images/game/part_1_layer2.png',

    './images/game/part_2_bg.png',
    './images/game/part_2_layer1.png',
    './images/game/part_2_layer1_fail.png',
    './images/game/part_2_layer2.png',
    './images/game/part_2_splash.png',

    './images/game/part_3_bg.png',
    './images/game/part_3_bg2.png',
    './images/stand/part_3_layer1.gif',
    './images/game/part_3_layer2.gif',
    './images/game/part_3_layer3.png',
    './images/game/part_3_layer4.png',

    './images/game/part_4_layer1.png',
    './images/game/part_4_layer2.png',
    './images/game/part_4_layer3.png',
    './images/game/part_4_layer4.gif',
    './images/game/part_4_layer5.png',

    './images/background/car_road.png',
    './images/background/gamecenter.png',
    './images/background/ramenya.png',
    './images/background/road.png',
    './images/background/station.png',
    './images/background/end05.png',
    './images/background/end06.png',

    './images/ui/start.png',
    './images/ui/success.png',
    './images/ui/fail.png',
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

