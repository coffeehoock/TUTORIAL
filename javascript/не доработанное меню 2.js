menu.onclick = function(event) {
  if (event.target.nodeName != 'A') return;

  var href = event.target.getAttribute('href');
  alert( href ); // может быть подгрузка с сервера, генерация интерфейса и т.п.

  return false; // отменить переход по url
};


*************************************************

<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="menu.css" />
</head>

<body>

  <ul id="menu" class="menu">
    <li><a href="/php">PHP</a></li>
    <li><a href="/html">HTML</a></li>
    <li><a href="/javascript">JavaScript</a></li>
    <li><a href="/flash">Flash</a></li>
  </ul>

  <script src="menu.js"></script>

</body>

</html>






+++++++++++++++++++++++++++++++++++++++++++++++++++]


.menu li {
  display: inline-block;
  margin: 0;
}

.menu > li a {
  display: inline-block;
  margin: 0 2px;
  outline: none;
  text-align: center;
  text-decoration: none;
  font: 14px/100% Arial, Helvetica, sans-serif;
  padding: .5em 2em .55em;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .3);
  border-radius: .5em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  color: #d9eef7;
  border: solid 1px #0076a3;
  background: #0095cd;
}

.menu > li:hover a {
  text-decoration: none;
  background: #007ead;
}
