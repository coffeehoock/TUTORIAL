//  var cub = document.body.children[0] ;
//  var $p  = document.createElement("p") ;
//  var $pp  = document.createElement("p") ;
//  var $cont = document.createTextNode('sub2');
//  var $contf = document.createTextNode('sub3');
//  	 $p.className = 'cont';	
//  	 $pp.className = 'cont';	


// 	var push = function(){
	
// 	setTimeout(function() {
//           	cub.appendChild($p);
      
//     }, 100);

//             setTimeout(function() {
      
//             $p.appendChild($cont);
//     }, 200);



//             setTimeout(function() {
//           	cub.appendChild($pp);
      
//     }, 300);

//             setTimeout(function() {
//             $pp.appendChild($contf);
      
//     }, 400);
// };
	
		
var g = document.body.children[0].children;
var amg = document.body.children[1]; 
var div = document.body.getElementsByClassName('cont')[0];
var menu = document.body.getElementsByClassName('cont-a');

// var scroll = function(top){
// 	div.style.background = 'rgba(154, 43, 43, 0.36)'
// };


			
var push = function(){
	
	setTimeout(function() {
          	
		g[0].style.display = 'block';	       
      
    }, 100);
    setTimeout(function() {
          	
		g[1].style.display = 'block';	       
      
    }, 200);
    setTimeout(function() {
          	
		g[2].style.display = 'block';	       
      
    }, 300);
	// setTimeout(function() {
          	
	// document.body.style.background = "rgb(179, 47, 47)";	       
      
 //    }, 350);
	// setTimeout(function() {
          	
	// amg.style.opacity = "0.2";	       
      
 //    }, 500);
 //    setTimeout(function() {
          	
	// div.style.opacity = "1"	       
      
 //    }, 500);

    

};

var out = function(){
	
	setTimeout(function() {
          	
		g[0].style.display = 'none';	       
      
    }, 100);
    setTimeout(function() {
          	
		g[1].style.display = 'none';	       
      
    }, 200);
    setTimeout(function() {
          	
		g[2].style.display = 'none';	       
      
    }, 300);
 //    setTimeout(function() {
          	
	// document.body.style.background = "rgb(140, 118, 118)"
					
 //    }, 350);
 //    setTimeout(function() {
          	
	// amg.style.opacity = "";	       
      
 //    }, 960);
  
          	


};

var colCor = function() {
	document.body.style.background = 'coral'
};
var colBlu = function() {
	document.body.style.background = '#434d75'
};
var colFoc = function() {
	document.body.style.background = '#2b5434'
};

	    

﻿
// window.onscroll = function() {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   document.body.getElementsByClassName('cont')[0].innerHTML = scrolled + 'px';
// }


// window.onscroll = function() {
//   var scrolled = window.pageYOffset;
//   console.log(scrolled)
// }

function scroollAuto() {
	if (window.pageYOffset < 100) {
		div.style.background = '#9a2b2b';
		div.style.fontSize = '50px';
		menu[0].style.background = '#9a2b2b';
		menu[1].style.background = '#9a2b2b';
		menu[2].style.background = '#9a2b2b';
	} else {
		div.style.background = 'rgba(154, 43, 43, 0.36)';
		div.style.fontSize = '30px';
		menu[0].style.background = 'rgba(154, 43, 43, 0.36)';
		menu[1].style.background = 'rgba(154, 43, 43, 0.36)';
		menu[2].style.background = 'rgba(154, 43, 43, 0.36)';

	}
};

