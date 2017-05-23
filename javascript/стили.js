// var f = document.children[0].children[1].children[0];
// var g = document.getElementsByTagName('body')[0];
// var s = g.style ;
//     s.transition = '2s'

// var caa = function(){
    	
//     s.backgroundColor = 'coral';
//     s.fontFamily = 'cursive';
//     // s.textAlign = 'center';
//                              };

//     f.onclick = caa;
//     f.style.color = 'green';




// (function(){

// // var styleHetTs = 'file:///home/codehook/Desktop/test/stule.css';
// // var div = document.getElementsByClassName('cvadro');
// //  myStyle.color = 'red';

// // var div = document.getElementsByClassName('cvadro') ;
// // // var div3 = document.body.children[0].children[0].children[0];
// // var myStylve = div[1].stiyle;
// // myStylve.color = 'green';


// document.addEventListener('DOMContentLoaded', function ready (){
// var g = document.children[0].children[1].children[3];
// 	g.setAttribute('style','color:red')
// } ) 	


//  })();

// // for (var i = 0; i < document.body.childNodes.length; i++) {
// //       console.log( document.body.childNodes[i] );
// //     }




// document.addEventListener('DOMContentLoaded', function ready (){
// var g = document.children[0].children[1].children[0];
// 	g.setAttribute('style','cursor:all-scroll ');
// 	g.setAttribute('onclick','caa');
// } ) 


var cvsd = document.querySelector('.cvadro');	
var linkFolder = document.head.children[2];
    ffolder = linkFolder.href;



// var mainCSS = "<link rel="stylesheet" type="text/css" href="stule.css">";

var f = document.children[0].children[1].children[0];
var j = document.children[0].children[1].children[3];
var g = document.getElementsByTagName('body')[0];
    
var s = g.style ;
    s.transition = '2s';

var caa = function(){
    	
    s.backgroundColor = 'coral';
    s.fontFamily = 'cursive';
    // s.textAlign = 'center';
                             };

    f.onclick = caa;
    f.style.color = 'green';
    j.type = '#'

// cd(document.getElementsByClassName("cvadro").contentWindow);
// children вместо childNodes
// // получить все элементы документа
// document.getElementsByTagName('*');

// // получить всех потомков элемента elem:
// elem.getElementsByTagName('*');
// console.dir(g);

// document.body.myData = {
//   name: 'Петр',
//   familyName: 'Петрович'
// }

// elem.hasAttribute(name) – проверяет наличие атрибута
// elem.getAttribute(name) – получает значение атрибута
// elem.setAttribute(name, value) – устанавливает атрибут
// elem.removeAttribute(name) – удаляет атрибут
// Также все атрибуты элемента можно получить с помощью свойства elem.attributes



// Требования:
// Ключевые навыки:
// • Хорошее знание javascript;
// • Опыт работы с AngularJS или React;
// • Знание шаблонизатора Jade или любого другого;
// • Опыт работы с системами сборки gulp или webpack;
// • Понимание работы протокола HTTP;
// • Опыт работы с REST API;
// • Базовые навыки работы в unix консоли;
// • Умение работать с чужим кодом, поддерживать код-стайл.
// Плюсом будет:
// • Знание HTML5, CSS3, умение верстать;
// • Опыт работы с Node.js (socket.io);
// • Опыт работы с одной из систем контроля версий: Git, Svn, Mercurial;
// • Умение писать unit и End-To-End тесты;
// • Опыт работы с SQL (mysql или postgree);
// • Опыт работы с NoSQL (mongo, memcached, redis);
// • Знание основ php;
// • Умение самостоятельно решать задачи;
// • Умение работать в команде.

var company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
   alert('Да, верно') : alert('Неправильно');

   var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
};

var userName = prompt('Кто пришёл?', '');

if (userName == 'Админ') {

  var pass = prompt('Пароль?', '');

  if (pass == 'Чёрный Властелин') {
    alert( 'Добро пожаловать!' );
  } else if (pass == null) { // (*)
    alert( 'Вход отменён' );
  } else {
    alert( 'Пароль неверен' );
  }

} else if (userName == null) { // (**)
  alert( 'Вход отменён' );

} else {

  alert( 'Я вас не знаю' );

};

var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

if (year != 2011) alert( 'А вот и неправильно!' );

/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @this {Circle}
 * @param {number} r The desired radius of the circle.
 */
function Circle(r) {
    /** @private */ this.radius = r;
    /** @private */ this.circumference = 2 * Math.PI * r;
};


var user = {
  name: "Вася",
  age: 30
};

var clone = {}; // новый пустой объект

// скопируем в него все свойства user
for (var key in user) {
  clone[key] = user[key];
}

// теперь clone - полностью независимая копия
clone.name = "Петя"; // поменяли данные в clone

alert( user.name ); // по-прежнему "Вася"