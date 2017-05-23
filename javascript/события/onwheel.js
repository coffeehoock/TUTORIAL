onwheel


element.onclick = function(event) {
  event = event || window.event;

  if (event.preventDefault) { // если метод существует
    event.preventDefault(); // то вызвать его
  } else { // иначе вариант IE8-:
    event.returnValue = false;
  }
}

...
event.preventDefault ? event.preventDefault() : (event.returnValue=false);
...

return false;
event.preventDefault();

