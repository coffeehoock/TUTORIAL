(function(){


var delay = 170,
        i = 0;
var start = function(){

var     g = document.querySelector("div")
    height = g.offsetTop;
		console.log(height);
    
	if (i < 10) { 
		// console.log(g);
        setTimeout(start, delay);
        g.style.height = height + (20 + 'px') ;
	}

	i++;
};
var cycleTime = setTimeout(start, delay);










// var x = function(){
//  console.log(g)
//  };
       // console.log('функцыя' +(i+1)+ g );

// for(var i = 0; i<12; i++) {
//      setTimeout(x, 700);
//  };





 



})();
	