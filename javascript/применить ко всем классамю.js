var h = {};
function retUrne(elcol){
  for (var y in document.getElementsByClassName('figure')){
    
    document.getElementsByClassName('figure')[y].style.color = elcol;
	var j = 'elem' + y; 
    G.h[j] = document.getElementsByClassName('figure')[y];

    y++;
    if(y === document.getElementsByClassName('figure').length){

        return G.h

    };
  }
}
