<!-- 1 инпут -->
<!-- 2 алгоритм пузырьком -->
<!-- 3 таблицы -->


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>input</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
</head>
<style>
	#userform{
		background: #f0f0f0;
		margin: 0 auto;
		width: 400px;
		height: auto;
		border-radius: 6px;
		padding: 10px;
	}
	form{
		/*background: read;*/
	}
	input {
		outline:none;
		transition: all 1s;
		margin: 10px auto;
		display: block;
		color: red
	}
	input[value] {
		color: #70db7a;
	}
/*	input[placeholder ="@email"] {
		color: #70db7a;
	}*/


	input[name="registr"] {
		border: 1px solid #d8d6d6;
		border-radius: 3px;
		padding: 3px;
	}
	input[name="registr"]:focus {
		border: 1px solid #0685935e;
		border-radius: 3px;
		padding: 3px;
	}
	input[type="submit"],
	input[type="reset"] {
		border: 1px solid #d8d8d85e;
		border-radius: 3px;
		padding: 3px;
		background: #d8d8d85e;
		color: #838383;
	}
	input[type="file"] {

	}

	.loaded {
		display: none;
	}
	body {
		transition: .4s;
	}
	.body-activ {
		background: #f0f0f0;
	}


	input[type="checkbox"]{
		color: blue
	}
</style>
<body class="body-activ">
	<?php
		// phpinfo();
		$dir = opendir('/var/www/html/upload.file/');
		$count = 0;
		while($file = readdir($dir)){
		    if($file == '.' || $file == '..' || is_dir('/home/coffeehoock/desktop/testphp/' . $file)){
		        continue;
		    }
		    $count++;
		}
		$dirs = new DirectoryIterator(dirname('/var/www/html/upload.file/*'));
		foreach ($dirs as $fileinfo) {
	    if ($fileinfo->isFile()) {
	        // echo $fileinfo->getBasename() . "\n";
	        echo $fileinfo->getBasename('.jpg') . "\n";
	    }
		}
		echo 'Количество файлов: ' . $count . '</br>';
		// echo var_dump($dir);
		echo 'FILES ' . var_dump($_FILES) . '</br>';
		echo 'GET ' . print_r($_GET) . '</br>';
		echo 'POST ' . print_r($_POST) . '</br>';
		echo 'COOKIE ' . print_r($_COOKIE) . '</br>';
		echo 'REQUEST_URI ' . $_SERVER['REQUEST_URI'];
		// echo var_dump($_POST["registr"]). '</br>';;
		// echo var_dump($_REQUEST). '</br>';
		$email = trim($_POST["email"]);
		$password = trim($_POST['password']);
		$email = htmlspecialchars($email);
		$password = htmlspecialchars($password);
	 ?>
	<div id="userform" class="loaded">
		<!-- form -->
		<form autocomplete="off" action="form.php" method="POST">
			<!-- registr -->
			<input type="text" name="email" value="<?php echo $_POST["email"]; ?>" placeholder ="@email" autofocus>
			<input type="password" name="" value="">
			<input type="reset" name="">
			<input type="submit" name="">
		</form>

		<form method="post" enctype="multipart/form-data">
			<input type="file" name="image">
			<input type="submit" name="upload">
		</form>
	</div>
	<script>
		var form = document.getElementById('userform');
		var body = document.getElementsByTagName('body')[0];

		document.body.onload = function () {
			form.classList.remove('loaded');
			body.classList.remove('body-activ');

		}
	</script>
	<!-- <script src="../../../home/coffeehoock/desktop/stackoverflow.js"></script> -->
</body>
</html>
