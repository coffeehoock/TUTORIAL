/*........@оригинал...............*/

function Machine(power) {
  this._enabled = false; // вместо var enabled
  this._power = power;
  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

/*Подчёркивание в начале свойства – общепринятый знак, что свойство является внутренним, предназначенным лишь для доступа из самого объекта и его наследников. Такие свойства называют защищёнными.*/


//Унаследуем от него кофеварку. При этом она получит эти методы автоматически:

function CoffeeMachine(power) {
  Machine.call(this); // отнаследовать
  Machine.apply(this, arguments);
  this.enable();
  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

/*переопределение метода (доработка)*/

  var parentEnable = this.enable; // (1)
  this.enable = function() { // (2)
      parentEnable.call(this); // (3)
      this.run(); // (4)
    }


	console.log( this._enabled );
	console.log( this._power  );
}

var coffeeMachine = new CoffeeMachine(10000);






