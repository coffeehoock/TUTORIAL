$('img[data-src]').each(function() { // перебираем все img с атрибутом data-src
  var img = $(this);
  img.attr('src', img.attr('data-src')); // подставляем адрес в src
  img.on('load', function() { // после загрузки изображения
    img.removeAttr('data-src'); // убираем атрибут data-src, после чего отображается загруженное изображение 
  });
});


[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) { // перебираем все img с атрибутом data-src
  img.setAttribute('src', img.getAttribute('data-src')); // подставляем адрес в src
  img.onload = function() { // после загрузки изображения
    img.removeAttribute('data-src'); // убираем атрибут data-src, после чего отображается загруженное изображение 
  };
});

img {
  max-width: 200px;
  float: left;
  display: block;
  -webkit-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

img[data-src] {
  opacity: 0;
}
