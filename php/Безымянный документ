<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Pragma" content="no-cache">
	<title>Document</title>
</head>
<body>
	<?php
 		// выодим с помощю foreach потому что мссив ассациативный
		$capital = [
			 "россия" => ['москва', 'санкт-питербург', 'новосибирск'], 
			"фраецыя" => ['париж', 'марсель', 'ница', 'лион'],
			 "англия" => ['лондон', 'риверпуль', 'ермак']
		];

		// ul-li-ol-li
		echo "<ul>";

		// iteration (итерация) один проход по цыклу
		foreach ($capital as $country => $towns) {
			echo "<li>";
			echo $country;
				
				echo "<ol>";

			foreach ($towns as $town){
				echo "<li>$town</li>";
			}
				echo "</ol>";
			echo "</li>";
		}
		
		echo "</ul>";
	 ?>
</body>
</html>
