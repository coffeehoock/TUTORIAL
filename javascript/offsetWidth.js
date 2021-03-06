  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">




<img src="https://www.luxresorts.com/media/2880398/Maldives_Hotels_Resorts_LUX_Maldives.jpg" alt="" id="dynamics-bg">
<a href="https://www.luxresorts.com/media/2880398/Maldives_Hotels_Resorts_LUX_Maldives.jpg" id="dynamics-link">maldives</a>

<script>
  
var dynamicsBg = document.getElementById("dynamics-bg");
var dynamicsLink = document.getElementById("dynamics-link");


window.onload = function(e) {
  if (document.body.offsetWidth < 700) {
    dynamicsLink.href = "http://luxuryportfolio.com/photos/property/full/PRIRSSBR-9_Manual_p5.jpg";
    dynamicsBg.src = "http://luxuryportfolio.com/photos/property/full/PRIRSSBR-9_Manual_p5.jpg";
  }
  if (document.body.offsetWidth >= 700) {
    dynamicsLink.href = "https://www.luxresorts.com/media/2880398/Maldives_Hotels_Resorts_LUX_Maldives.jpg";
    dynamicsBg.src = "https://www.luxresorts.com/media/2880398/Maldives_Hotels_Resorts_LUX_Maldives.jpg";
  }
}

window.onresize = function(e) {
  if (document.body.offsetWidth < 700) {
    dynamicsLink.href = "http://luxuryportfolio.com/photos/property/full/PRIRSSBR-9_Manual_p5.jpg";
    dynamicsBg.src = "http://luxuryportfolio.com/photos/property/full/PRIRSSBR-9_Manual_p5.jpg";
  }
  if (document.body.offsetWidth >= 700) {
    dynamicsLink.href = "https://www.luxresorts.com/media/2880398/Maldives_Hotels_Resorts_LUX_Maldives.jpg";
    dynamicsBg.src = "https://www.luxresorts.com/media/2880398/Maldives_Hotels_Resorts_LUX_Maldives.jpg";
  }
}

</script>


<style>
  a{
    font-size: 100px;
    text-decoration: none;
    color: #c0cdd5;
  }
</style>




<picture>
  <source media="(media-query-1)" sizes="(media-query-1.1) x, y" srcset="images/ordinary.jpg">
  <source media="(media-query-2)" sizes="(media-query-2.1) z, w" srcset="images/ordinary-2.jpg">
  <img src="images/ordinary.jpg">
</picture>


<!-- Допустим, вы хотите, чтобы на экранах до 400 пикселей было одно изображение, а на экранах больше другое. Делаем так: -->
<picture>
  <source media="(max-width: 400px)" srcset="images/ordinary.jpg">
  <source media="(min-width: 401px)" srcset="images/ordinary2.jpg">
  <img src="images/ordinary2.jpg">
</picture>



<!-- Также вы хотите, чтобы принималась в учет плотность пикселей. Тогда необходимо в атрибуте srcset указывать несколько путей изображений, через пробел писать 1x, 2x и, если необходимо, то и 3x. x позволяет обратиться к device-pixel-ratio. -->
<picture>
  <source media="(max-width: 400px)" srcset="images/ordinary.jpg 1x, images/ordinary-retina.jpg 2x, images/ordinary-hd.jpg 3x">
  <source media="(min-width: 401px)" srcset="images/ordinary2.jpg 1x, images/ordinary2-retina.jpg 2x, images/ordinary2-hd.jpg 3x">
  <img src="images/ordinary2.jpg">
</picture>

<!-- Также вы хотите для разных брейкпоинтов разный размер изображения,
       тут придет на выручку атрибут sizes. У нас будет реализовываться
      следующий сценарий: 1) для экранов меньше 800 пикселей будет изображение 
      ordinary.jpg, 1.1) для экранов 400 и меньше пикселей изображение будет 
      иметь ширину 100vw, в остальных случаях оно будет занимать 70vw; 2) для экранов
      больше 800 пикселей ordinary2.jpg, 2.2) для экранов больше 1400 пикселей у 
      него будет ширина 40vw, в остальных случаях 50vw -->
<picture>
  <source media="(max-width: 800px)" sizes="(max-width: 400px) 100vw, 50vw" srcset="images/ordinary.jpg 1x, images/ordinary-retina.jpg 2x, images/ordinary-hd.jpg 3x">
  <source media="(min-width: 801px)" sizes="(min-width: 1400px) 40vw, 50vw" srcset="images/ordinary2.jpg 1x, images/ordinary2-retina.jpg 2x, images/ordinary2-hd.jpg 3x">
  <img src="images/ordinary2.jpg">
</picture>
