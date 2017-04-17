<?php 
sleep(2);

if ($_POST["name"] == "admin") 
		echo "falid";
	else if ($_POST["name"] == false) 
		echo "вы не ввели логин";

	else if ($_POST["name"] == true) 
		echo "логин [" . $_POST["name"] . "] свобден";


 ?>