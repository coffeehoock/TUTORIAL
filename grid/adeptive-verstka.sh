# модульная сетка
modular grid

# отзывчивый дизайн
responsive web design
$fluid grid # отзывчивая сетка
$flexible media # гипкое медиа
$media queries # запросы 

*{
    margin: 0;
    padding: 0;
}
body{
    font: 100%/1.5em arial,Helvetica,sans-serif;
    color: #000;
}
.container{
    background: #e2e2e2;
    width: 960px; /* ширины в проентах а шрифты в em */
    width: 90%;
    margin: 0 auto;
    font-size: 40px; /* 40 / 16 = 2,5 */ 
    font-size: 2,5em;
    display: table; /* для нерезиновых элементов */ /* для гибридной верстки */
}
section{

}
aside{
    background: #d1d1d1;
    width: 650px ;/* 650 / 960 = 0,677083333 * 100 =67,708333333 */
    width: 67,708333333% ;
    display: table-cell; /* для гибридной верстки */
}
footer{
    display: table-row; /* для гибридной верстки */
}



# 
mobile first


#книга adaptive web design
#книга mobile first
 


<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->



