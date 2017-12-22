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
	#form{
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
		echo var_dump($_GET) . '</br>';
		echo var_dump($_POST) . '</br>';
		echo var_dump($_COOKIE) . '</br>';
		echo $_SERVER['REQUEST_URI'];
		// echo var_dump($_POST["registr"]). '</br>';;
		// echo var_dump($_REQUEST). '</br>';
		$email = trim($_POST['name']);
		$password = trim($_POST['text']);
		$email = htmlspecialchars($email);
		$password = htmlspecialchars($password);
	 ?>
	<div id="form" class="loaded">
		<!-- form -->
		<form autocomplete="off" action="input.php" method="POST">
<!-- 			<input type="radio" name="radio-name">
			<input type="radio" name="radio-name">
			<input type="radio" name="radio-name">
			<input type="radio" name="radio-name"> -->
			
			<!-- checkbox -->
<!-- 			<input type="checkbox" name="checkbox-name" checked>
			<input type="checkbox" name="checkbox-name" value="a2">
			<input type="checkbox" name="checkbox-name">
			<input type="checkbox" name="checkbox-name"> -->
			
			<!-- registr -->
			<input type="text" name="email" value="<?php echo $email; ?>" placeholder ="@email" autofocus>
			<input type="password" name="password" value="">
			<input type="reset" name="">
			<input type="submit" name="">
			
			<!-- file -->
			<input type="<?php echo "file"; ?>" name="">

<!-- 			<select>
				<option value="">product - 1</option>
				<option value="">product - 2</option>
				<option value="">product - 3</option>
				<option value="">product - 4</option>
			</select>
			<select multiple="">
				<option value="">product - 1</option>
				<option value="">product - 2</option>
				<option value="">product - 3</option>
				<option value="">product - 4</option>
			</select> -->
		</form>
	</div>
	<script>
		var form = document.getElementById('form');
		var body = document.getElementsByTagName('body')[0];
		
		document.body.onload = function () {
			form.classList.remove('loaded');
			body.classList.remove('body-activ');

		}
	</script>
	<!-- <script src="../../../home/coffeehoock/desktop/stackoverflow.js"></script> -->
</body>
</html>