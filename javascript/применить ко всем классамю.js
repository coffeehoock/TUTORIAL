function retUrne(elcol){
  for (var y in document.getElementsByClassName('figure')){
    document.getElementsByClassName('figure')[y].style.color = elcol
    
    y++; if(y === document.getElementsByClassName('figure').length) return elcol
  }
}
