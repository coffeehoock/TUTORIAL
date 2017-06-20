<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Pragma" content="no-cache">
	<title>admin</title>
</head>

<body>
<?php 

// вывод PDO

  $db = new PDO('mysql:host=localhost;dbname=sitetest', 'root','123123qq');
  $db->exec("SET NAMES UTF8");

  $query = $db->prepare("SELECT * FROM `apps`");
  $query->execute();

  $apps = $query->fetchAll(PDO::FETCH_ASSOC);

  // echo "<pre>";
  // 	print_r($apps);
  // echo "</pre>";
echo "<table>";
  foreach ($apps as $app) {
  	echo "<tr>";
  	    echo "<td>$app[dt]</td>";
    		echo "<td>$app[name]</td>";
    		echo "<td>$app[password]</td>";
  	echo "</tr>";
  }
echo "</table>";







// // вывод sql
// 		// function print_db($info){
// 		// 	while (($row = $info->fetch_assoc()) != false ) {
// 		// 		print_r($row);
				
// 		// 		echo "<br>";


// 		// 		// echo $row[name];
// 		// 	}
// 		// 	echo "количество записей равно - ".$info->num_rows;
// 		// }

	

//     $db = new mysqli("localhost", "root", "123123qq", "sitetest" );
//     $db->query("SET NAMES 'utf8'");

//     $apps = $db->query("SELECT * FROM `apps`");
//     // print_db($info);

//     // print_r($apps);
// echo "<table>";
//     foreach ($apps as $key => $app) {
//     	echo "<tr>";
//     		echo "<td>$app[dt]</td>";
//     		echo "<td>$app[name]</td>";
//     		echo "<td>$app[password]</td>";
// 			// foreach ($key) {
// 		 // 		echo "<td>$app[$key]</td>";	
// 		 // 	}

//     	echo "</tr>";
//     }
// echo "</table>";

// 		$db->close();









// вывод файла

//  $apps = file("/home/coffeehoock/desktop/testphp/apps.txt");

// echo '<table>';

//  foreach ($apps as $line) {
//  	$arr = explode('-|-', $line);
 
//  	echo "<tr>";	
 	
// 		 	foreach ($arr as $i) {
// 		 	echo "<td>". $i ."</td>";	
// 		 	}
//  	echo "</tr>";	
//  }
// echo '</table>';
 ?>

<style>
	table, td{
    border: 3px solid #00c4ff;
		border-collapse: collapse;
		padding: 5px;
		font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
		font-size: 40px;

	}
</style>

</body>
</html>