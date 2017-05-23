/*........@оригинал...............*/
var body = document.children[0].children[1];


// function CoffeeMachine(power, brend) {
//   this.waterAmount = 0;
// 	this.brend = brend ;

//   var WATER_HEAT_CAPACITY = 4200;
//   var self = this;


//   function getBoilTime() {
//       return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }

//   function onReady() {
//     console.log( 'Кофе из кофеварки фирмы ' + self.brend + ' готово' );
//   }

//   this.run = function() {
//     setTimeout(onReady, getBoilTime());
//   };

// }


// var Philips = new CoffeeMachine(500000, "Philips HD7434/20" );
// Philips.waterAmount = 200;

// Philips.run();

/////////////////////////////////////////////////////////

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  this.waterAmount = function(amount) {
    // вызов без параметра, значит режим геттера, возвращаем свойство
    if (!arguments.length) return waterAmount;

    // иначе режим сеттера
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(1000, 500);

// пример использования
coffeeMachine.waterAmount(450);
coffeeMachine.waterAmount(); // 450

// Для большего контроля над присвоением и чтением значения, вместо свойства делают «функцию-геттер» и «функцию-сеттер», геттер возвращает значение, сеттер – устанавливает.
// Если свойство предназначено только для чтения, то может быть только геттер, только для записи – только сеттер.
// В качестве альтернативы паре геттер/сеттер применяют единую функцию, которая без аргументов ведёт себя как геттер, а с аргументом – как сеттер.





