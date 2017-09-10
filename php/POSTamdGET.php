<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Pragma" content="no-cache">
	<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
	<title>php</title>
</head>
<style>

::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

::-webkit-scrollbar-track-piece  {
  background-color: #C2D2E4;
}

::-webkit-scrollbar-thumb:vertical {
  height: 30px;
  background-color: #0A4C95;
}


  

  body{
    font-size: 41px;
    font-family: 'Titillium Web', sans-serif;
    font-family: 'Dosis', sans-serif;
    background: rgba(71, 156, 228, 0.69);
    color: rgba(255, 255, 255, 0.79);
    margin-top: 90px;

  }
  header {
    position: fixed;
    background: rgba(176, 189, 199, 0.74);
    width: 100%;
    top: 0;
    text-align: center;
    height: 70px;
    line-height: 64px;
  }
  a{
    margin: 0 10px 0 10px;
    padding: 0px 50px 4px 50px;
    text-align: center;
    text-shadow: 8px 9px 20px rgba(150, 150, 150, 0.64);
    color: #2b3640;
    text-decoration: none;
    border: 4px solid rgba(90, 152, 204, 0);
    border-radius: 30px;
    transition: all 0.7s;

  }
  a:hover{

    text-align: center;
    text-shadow: 8px 9px 20px rgba(150, 150, 150, 0.64);
    color: #e3effa;
    text-decoration: none;
    border: 4px solid rgb(227, 239, 250);
    border-radius: 30px;
    transition: all 0.7s;


  }
  a:active{
    transition: all 0.7s;
    border: 4px solid rgb(227, 239, 250);
    border-radius: 30px;
    color: #ffffff;
    background: rgb(0, 0, 0);


  }
  a:focus{
    transition: all 0.7s;
    border: 4px solid rgb(227, 239, 250);
    border-radius: 30px;
    color: #ffffff;


  }
/*  a:visited{
    text-align: center;
    text-shadow: 2px 5px 17px rgba(121, 61, 61, 0.64);
    color: #b7deff;
    text-decoration: overline;
    transition: all .5s;
    color: #ffffff;
  }*/

  .block{
    width: 50%;
    font-size: 30px;
    text-align: center;
    margin: 0 auto;
  }

  <?php $re = str_replace('.', '', $_GET['id']); ?>
  
  #<?php echo "link-$re"; ?>{
    transition: all 0.7s;
    color: #d29191;
    border: 4px solid rgb(227, 239, 250);
    border-radius: 30px;
    background: rgb(0, 0, 0);
      }
</style>

<!-- ************************************************************************ -->
<!-- ________________________________________________________________________ -->
<body>
  <?php 
    
    if (!isset($_GET['id'])) {
      exit("err - 404");
    };

    // $_GET - прочитать (stte/index.php?id=5) [?id=3&a=n]
    // $_POST - записать (заполнение формы input )2
    
// *******************************************************************
// *******************************************************************
// *******************************************************************
                                // $_GET
// *******************************************************************

  	// вывод текст файлов

    $id = $_GET['id'];
    
    $fles_arr = file_get_contents("/home/coffeehoock/desktop/testphp/$id"); //http://188.243.241.229/?id=3


    // echo nl2br($git_sh);

    // echo  print_r($_GET);


  ?>
<header>
<?php
  
  $files = scandir("/home/coffeehoock/desktop/testphp/");
  // echo $files;
  // var_dump($files);

// foreach ($files as $file) {
//   echo is_file($file );
// }


 
// for ($i=2; $i < count($files); $i++) { 
//   // echo $files[$i] . '<br>';
//   $r = str_replace('.', '', $files[$i]) . '<br>';
  
//   echo $r;
// }

  foreach ($files as $file) {

    if (is_file("/home/coffeehoock/desktop/testphp/" . $file )) {
      $name_id = str_replace('.', '', $file);
      echo "<a id=\"link-$name_id\" href=\"index.php?id=$file\">$file статья</a>";
    }
  }




// echo str_replace('.', '', $_GET['id']);

// адресс 
      // echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
      // echo $_SERVER['REQUEST_URI'];
?>
</header>
<!-- <hr> -->
<div class="block"><?php echo nl2br("<div>$fles_arr</div>"); ?></div>
<!-- <hr> -->
<?php 
// *******************************************************************
// *******************************************************************
// *******************************************************************
                                // $_POST скрытые данные в URL строке
// *******************************************************************
 
// в массив $_POST попадают только элементы со значением name

// пример   <input type="password" ->name="password">   (password) ключ массива


echo  print_r($_POST);
echo "<br>"; 
echo  $_POST[name];
echo  $_POST[password];
echo "<br>"; 
// echo  $_GET[id];
echo "<br>"; 

// if ($_GET[id] == $_GET[id]) {
//     echo "true";
// }


 ?>




<?php 
  // изначально мы на _GET если _POST  не пустой то переходим в пост
if (count($_POST) > 0) {
  # code...
  $name = trim($_POST["name"]);
  $password = trim($_POST["password"]);
  $dt = date("Y-m-d H:i:s");
  
  if (strlen($name) < 6) {
    $msg = "некорректное имя";
  }
  // elseif (is_numeric($name)){
  //   $msg = "имя не может быть с цыфрами";
  // }
  elseif (strlen($password) < 7) {
    $msg = "пароль не меньше 7 цыфр";
  }
  elseif (!is_numeric($password)) {
    $msg = "пароль должен состоять из чисел";
  }
  else{

  file_put_contents("/home/coffeehoock/desktop/testphp/apps.txt", "$dt $name $password\r\n", FILE_APPEND);
  $msg = "ваша заявка принята";
  }


}
// _GET
else{
  $name = " ";
  $password = "";


	// ревый заход на страницу методом $_GET
	$msg = "привет заполните форму";
}

 ?>

 <hr>
 <!-- value испльзуем для того что бы введенные данные не вводить заного -->

<form method="post" >
	  <label>имя</label>
	  <input type="text" name="name" value="<?php echo $name; ?>">
	  <br>
	  <label>пароль</label>
	  <input type="password" name="password" value="<?php echo $password; ?>">
	  <br>
	  <label>отправить</label>
	  <input type="submit" value="goo!!!">
</form>
 <?php echo $msg; ?>
</body>
</html>


