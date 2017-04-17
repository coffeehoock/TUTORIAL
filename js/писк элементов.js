// document.write(frames.scroll);

//КАК БРАТЬ ТЕГИ ИЗ ДОМ 

document.body.children[0].children[0].children[0]
/////////////////////////////////
(function(){


//////////////////////////////////////////////////     
     
// var classElems = document.getElementsByClassName('g1')
// console.log(classElems);

// var sellectorElem = document.querySelector('a')
// console.log(sellectorElem);

// var sellectorsElems = document.querySelectorAll('a')
// console.log(sellectorsElems);

// var sellectors = document.querySelectorAll('div a')
// console.log(sellectors);

// var sellId = document.querySelectorAll('.g1')
// console.log(sellId);



// ////////////////////////////////


// var elems = document.getElementsByTagName('a');
     
// for (var i = 0 , len = elems.length ; i < len ; i++ ){
     
//      console.log(elems[i]); 
//      console.log(elems[i].tagName); 
//      console.log(elems[i].parentNode); //-родительская нода
//      console.log(elems[i].previousSibling.previousSibling); //-предедуший родствиник
//      console.log(elems[i].nodeName.parentNode);


//  };


// console.log(document.querySelector("body").childNodes);
// console.log(document.querySelector("body").children);
// console.log(document.querySelector("body").nextSibling);
// document.documentElement.children[1]

/////////////////////////////////////


//динамические элементы
var doc = document; //кеш


var elem = doc.createElement("p");
var cont = doc.createTextNode("dinamic element");
var room = doc.querySelector(' .g1 a  ');
elem.appendChild(cont);
room.appendChild(elem);

var elemA, contA , roomA = [];
elemA = doc.createElement("p");
contA = doc.createTextNode("дядя вася");
roomA = doc.querySelector(' .g1 a + a + a');
elemA.appendChild(contA);
roomA.appendChild(elemA);
// elem.parentNode.removeChild(elem)
// console.log(roomr);







})();
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

