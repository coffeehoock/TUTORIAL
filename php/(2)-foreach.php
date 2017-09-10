<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Pragma" content="no-cache">
	<title>Document</title>
</head>
<body>
	
	<?= 
		$capital = [
			 "россия" => ['москва', 'санкт-питербург', 'новосибирск'], 
			"фраецыя" => ['париж', 'марсель', 'ница', 'лион'],
			 "англия" => ['лондон', 'риверпуль', 'ермак']
		];
	 ?>
<?=$capital["россия"][0];?>
	<!-- foreach open : close endforeach -->
		<ul>
		<?foreach ($capital as $country => $towns): ?>
			<li><?=$country?>
				<ol>
					<? foreach($towns as $town):?>
						<li><?=$town?></li>
					<? endforeach; ?>
				</ol>
			</li>
		<? endforeach; ?>
	</ul>


</body>
</html>
