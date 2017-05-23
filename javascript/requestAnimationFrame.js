function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}


// простые ******************************************************

// train.onclick = function() {
//  animate({
//    duration: 1000,
//    timing: function(timeFraction) {
//      return Math.pow(timeFraction, 2);
//    },
//      draw: function(progress) {
//        train.style.left = progress * 500 + 'px';
//    }
//  });
// };

// замедление в начале
// train.onclick = function() {
//  animate({
//    duration: 1000,
//    timing: function circ(timeFraction) {
//              return 1 - Math.sin(Math.acos(timeFraction))
//            },
//      draw: function(progress) {
//        train.style.left = progress * 500 + 'px';
//    }
//  });
// };

// Back: стреляем из лука
// train.onclick = function() {
//  animate({
//    duration: 1000,
//    timing: function back(x, timeFraction) {
//              return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
//            }.bind(null, 1.5),
//      draw: function(progress) {
//        train.style.left = progress * 500 + 'px';
//    }
//  });
// };

// Отскок bounce
// train.onclick = function() {
//  animate({
//    duration: 1000,
//    timing: function bounce(timeFraction) {
//              for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
//                if (timeFraction >= (7 - 4 * a) / 11) {
//                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
//                }
//              }
//            },
//      draw: function(progress) {
//        train.style.left = progress * 500 + 'px';
//    }
//  });
// };

// Упругая анимация ******************************************************
    // (easeIn)
// train.onclick = function() {
//  animate({
//    duration: 1000,
//    timing: function elastic(x, timeFraction) {
//              return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
//            }.bind(null, 1.5),
//      draw: function(progress) {
//        train.style.left = progress * 500 + 'px';
//    }
//  });
// };

// Реверсивные функции ease* (easeOut)
    // function makeEaseOut(timing) {
    //   return function(timeFraction) {
    //     return 1 - timing(1 - timeFraction);
    //   }
    // }

    // function bounce(timeFraction) {
    //   for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
    //     if (timeFraction >= (7 - 4 * a) / 11) {
    //       return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    //     }
    //   }
    // }

    // var bounceEaseOut = makeEaseOut(bounce);

    // train.onclick = function() {
    //   animate({
    //     duration: 3000,
    //     timing: bounceEaseOut,
    //     draw: function(progress) {
    //       train.style.left = progress * 500 + 'px';
    //     }
    //   });
    // };


// (easeInOut) показать эффект и в начале и в конце анимации
    function makeEaseInOut(timing) {
      return function(timeFraction) {
        if (timeFraction < .5)
          return timing(2 * timeFraction) / 2;
        else
          return (2 - timing(2 * (1 - timeFraction))) / 2;
      }
    }


    function bounce(timeFraction) {
      for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }

    var bounceEaseInOut = makeEaseInOut(bounce);

    train.onclick = function() {
      animate({
        duration: 3000,
        timing: bounceEaseInOut,
        draw: function(progress) {
          train.style.left = progress * 500 + 'px';
        }
      });
    };

