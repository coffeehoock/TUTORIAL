<!-- filfer upload.file -->

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>upload-file</title>
</head>
<body>
<?php
		// sleep(100);
		// echo "<pre>";
		// echo print_r($_POST["myfile"]) . "<br>";
		// echo print_r($_FILES);
		// echo "</pre>";
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

			if ($_FILES["myfile"]["error"] == 0 and $_FILES["myfile"]["size"] < 700) {
				$filename = $_FILES["myfile"]["name"];

				echo "<pre>";
					echo print_r($_FILES);
				echo "</pre>";

				$tmpname = $_FILES["myfile"]["tmp_name"];
				// if(copy($tmpname, "./upload.file/" . $filename)){
				if(move_uploaded_file($tmpname, "./upload.file/" . $filename)){
					echo "файл: " . $filename . " загружен !!!!";
				}else{
					echo "файл: " . $filename . " не загружен";
				}


			}else{

				echo "error: " . $_FILES["myfile"]["error"];

			}
	}
?>
	<form method="post" enctype="multipart/form-data">
		<!-- <input type="hidden" name="MAX_FILE_SIZE" value="2454"> -->
		<input type="file" name="myfile">
		<button>upload</button>
	</form>
</body>
</html>
