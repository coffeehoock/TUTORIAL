//динамические элементы
var doc = document; //кеш

var elemA, contA , roomA = [];
elemA = doc.createElement("p");
contA = doc.createTextNode("дядя вася");

elemA.appendChild(contA);
roomA.appendChild(elemA);
