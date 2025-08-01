$(function () {
  const car = $('.part_2_layer2');
  const overlay = $('.game-overlay');
  const modal = $('.part02-modal');
  const okBtn = $('.ok_btn');
  const startImage = $('.start-game');
  const successImage = $('.success-game');
  const failImage = $('.fail-game');
  const leftBtn = $('.left_btn');
  const rightBtn = $('.right_btn');
  const hitbox = $('.car-hitbox');

  overlay.show();
  modal.show();
  successImage.hide();
  failImage.hide();
  startImage.hide();
  leftBtn.hide();
  rightBtn.hide();

  const movement = {
    dx: -2,
    dy: 1.2
  };

  const carState = {
    top: 106,
    right: -800,
    offsetX: 0,
  };

  let animationId;
  let gameEnded = false;

  function checkCollision() {
    const hitboxRect = $('.car-hitbox')[0].getBoundingClientRect();
    const failZoneRect = $('.fail-zone')[0].getBoundingClientRect();

    const isColliding = !(
      hitboxRect.right < failZoneRect.left ||
      hitboxRect.left > failZoneRect.right ||
      hitboxRect.bottom < failZoneRect.top ||
      hitboxRect.top > failZoneRect.bottom
    );

    if (isColliding) {
      endGame(false);
    }
  }

  function updateCarPosition() {
    carState.top += movement.dy;
    carState.right -= movement.dx;

    const currentTop = carState.top;
    const currentRight = carState.right + carState.offsetX;

    car.css({
      top: `${currentTop}px`,
      right: `${currentRight}px`
    });

    const hitboxTop = currentTop + 100;
    const hitboxRight = currentRight + 100; 

    hitbox.css({
      top: `${hitboxTop}px`,
      right: `${hitboxRight}px`
    });
  }

function animatePerson() {
  const person = $('.part_2_layer1');

  let personTop = -116;
  let personLeft = 242;

  let bounceFrame = 0;
  let frameCounter = 0;


  const bounceCycle = [
    0, -0.5, -1.2, -2.0, -2.6, -3.0, -2.6, -2.0, -1.2, -0.5,
    0, 0.5, 1.2, 2.0, 2.6, 3.0, 2.6, 2.0, 1.2, 0.5
  ];

  function updatePersonPosition() {
    if (gameEnded) return;

    personTop += 0.5;
    personLeft -= 0.8;

    if (frameCounter % 3 === 0) {
      bounceFrame++;
    }
    frameCounter++;

    const bounceOffset = bounceCycle[bounceFrame % bounceCycle.length];

    person.css({
      top: `${personTop + bounceOffset}px`,
      left: `${personLeft}px`
    });

    requestAnimationFrame(updatePersonPosition);
  }

  updatePersonPosition();
}

  function animateCar() {
    if (gameEnded) return;

    updateCarPosition();
    checkCollision();
    animationId = requestAnimationFrame(animateCar);
  }

  function endGame(isSuccess) {
  if (gameEnded) return;
  gameEnded = true;

  cancelAnimationFrame(animationId);
  car.stop(true, true); 
  hitbox.stop(true, true);

  if (isSuccess) {
    sfxManager.play('success', 0.8);

    successImage.show().removeClass('kaboom');
    void successImage[0].offsetWidth;
    successImage.addClass('kaboom');

    successImage.one('animationend', function () {
      $('.container-inner').fadeOut(600, function () {
        $('.container-inner').load('./game/part02_success.html', function () {
          $('.container-inner').fadeIn(800);
        });
      });
    });
  } else {

    sfxManager.play('fail', 0.6);
    
    failImage.show().removeClass('kaboom');
    void failImage[0].offsetWidth;
    failImage.addClass('kaboom');

    $('.splash-effect').show().addClass('active');

    $('.part_2_layer1').css('background-image', 'url(./images/game/part_2_layer1_fail.png)');

    failImage.one('animationend', function () {
      $('.container-inner').fadeOut(600, function () {
        $('.container-inner').load('./game/part02_fail.html', function () {
          $('.container-inner').fadeIn(800);
        });
      });
    });
  }
}

  okBtn.on('click', function () {
    modal.fadeOut();
    startImage.show().removeClass('kaboom');
    void startImage[0].offsetWidth;
    startImage.addClass('kaboom');

    setTimeout(() => {
      startImage.fadeOut();
      overlay.fadeOut();

      leftBtn.show();
      rightBtn.show();

      animateCar();
      animatePerson();

      setTimeout(() => {
        endGame(true); // 성공 처리
      }, 9000);
    }, 800);
  });

  leftBtn.on('click', () => {
    sfxManager.play('click', 0.8); 

    if (gameEnded) return;
    carState.offsetX += 40;
  });

  rightBtn.on('click', () => {
    sfxManager.play('click', 0.8); 
    
    if (gameEnded) return;
    carState.offsetX -= 40;
  });

  $('.ok_btn').on('mouseenter', function() {
    sfxManager.play('hover', 0.8); 
  });


});
