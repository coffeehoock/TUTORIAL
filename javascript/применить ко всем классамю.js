var h = {};
function retUrne(elcol){
  for (var y in document.getElementsByClassName(elcol)){

    document.getElementsByClassName(elcol)[y] //add style
	     var j = 'elem' + y;
    h[j] = document.getElementsByClassName(elcol)[y];

    y++;
    if(y === document.getElementsByClassName(elcol).length){

        return h

    };
  }
}
