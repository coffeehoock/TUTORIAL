<?php 

if ($_GET[country] == 1)
	echo  json_encode(array(

						"1" => "vashington",
						"2" => "sieto"


					 ))  ;

else if ($_GET[country] == 2)
	echo  json_encode(array(

						"3" => "parij",
						"4" => "marsel"


					 ))  ;

 ?>