<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Pragma" content="no-cache">
	<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
	<title>coments</title>
</head>
<body>
<?php 
$db = new PDO('mysql:host=localhost;dbname=sitetest', 'root','123123qq');
$db->exec("SET NAMES UTF8");

if(count($_POST) > 0){
	$name = trim($_POST['name']);
	$text = trim($_POST['text']);

	//strip_tags  htmlspecialchars

	// $name = strip_tags($name);
	// $text = strip_tags($text);
// защита от xss atac
	$name = htmlspecialchars($name);
	$text = htmlspecialchars($text);

	if ($name != '' && $text != '' ) {
		// $query = $db->prepare("INSERT INTO `comments` SET name='$name', text='$text'");
// защита от sql inection
		$query = $db->prepare("INSERT INTO `comments` SET name=:name, text=:text");
		$params = ['name' => $name, 'text' => $text];

		// "INSERT INTO `comments` SET name='namewdwdw', text='textwwewe\', is_moderate=\'1'"
		// "namewdwdw"
		// "textwwewe\', is_moderate=\'1"
		$query->execute($params);

		header("location: comments.php");
		exit();
	}

}
// сортировка по дате ORDER BY dt DESC
$query = $db->prepare("SELECT * FROM `comments` WHERE is_moderate='0' ORDER BY dt DESC");
$query->execute();
// fetchAll() вывод массива в виде таблицы
$comments = $query->fetchAll();
// echo "<pre>";
// 	print_r($comments);
// echo "</pre>";



$ref = $_GET[ref]; 
$ref = htmlspecialchars($ref); 

?>


<form method="post">
	имя<br>
	<input type="text" name="name" value="<?php echo $name; ?>"><br>
	соментарий<br>
	<textarea name="text"><?php echo $text; ?></textarea><br>
	<input type="submit" value="отправить">
<!-- добавляем в браузер к адрессу -->
<!-- ?ref=76767676767 -->
<!-- .php?ref=123"><div>hello -->
	<input name="ref" type="hidden" value="<?=$ref?>">
	<!-- получаем -->
	<!-- <input name="ref" type="hidden" value="76767676767"> -->

</form>
<div class="comments">
<?php 
			foreach ($comments as $one) {
			echo "<div class=\"item\">";
				echo "<span class=\"user-dt\">$one[dt]".'  '."</span>";
				echo "<strong class=\"user-name\">$one[name]</strong>";
				echo "<div class=\"user-text\">$one[text]</div>";
			echo "</div>";
			// echo "<hr>";
		}
?>
</div>
</body>
<style>
	.item {
    background: cornsilk;
    margin: 14px;
    border-radius: 5px;
    border: 1px solid #e2ddc9;
	}

	.comments{
    margin: 80px auto;
    width: 50%;
    overflow: overlay;
	}
	.user-text{
		color: #939393;
	}
	.user-name{
		color: #fe2700;
	}
	.user-dt{
		color: #6c6ca6;
	}
</style>
</html>
<!-- <script>while(true){alert("idiot")}</script> -->
<!-- http://188.243.241.229/comments.php?ref=123"><script>while(true){alert("idiot")}</script> -->