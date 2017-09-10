function p(name){
    console.log(arguments);
    return 'hello' + name;
}
p('vasa', 'petya', 'lena', 'masha');



function fun( callback ){
  let name = 'alex';
  callback( name );
}

fun(function(n){
  console.log( 'hello ' + n );
});



function fun2(n){
  return function(){
    console.log('hello !!!! ');
  }
}
fun2()();




function fun3(name){
  return 'hello ' + name;
}('alex');

console.log(fun3('alex'));

// присваение значеник функции
var fun3 = (function(name){
  return 'hello ' + name;
}('alex')); // ананимная самовызывающаяся функцыя

console.log(fun3);


i = 5;

var fun4 = function(){
  var i = 10;
  console.log(i);
  // return i;
  var innreFun = function(){
    console.log(i);
    var i = 15;
    // одно и тоже
    // var i;
    // console.log(i);
    // i = 15;
  }
  innreFun();
  console.log(i);
}
fun4();


// замыкание

// 1

// без return function() не получитиь доступ к переменной и она не сохраняла ссылку

var fun5 = function(){
  var i = 10;
  return function(){
    return i;
  }
}

var anotherFun = function(){
  var i = 20;
  console.log(fun5()());
}
anotherFun();

// 2

var fun5 = function(){
  var i = 10;
  return function(){
    return i;
  }
}
var myFunc = fun5();

var anotherFun = function(){
  var i = 20;
  console.log(myFunc());
}
anotherFun();


// счетчик

var counter = (function(){
  var count = 0;
  return function(){
    return count++;
  }
}());

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// счетчик добавить возможность изменить счетчин

// счетчик вариант 1

var counter = (function(){
  var count = 0;
  return function(num){
    // если num не ровна undefined то присвоить count это значение иначе count остается тот же
    count = num !== undefined ? num : count;
    return count++;
  }
}());

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter(0)); // сбосит на ноль
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter(500));
console.log(counter()); // 501

// счетчик вариант 2

var counter = function(num){
  counter.count = num !== undefined ? num :
  counter.count;
  return counter.count++;
};

counter.count = 0;

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter(0)); // сбосит на ноль
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter(500));
console.log(counter()); // 501
