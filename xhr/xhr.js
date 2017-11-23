__FILE_INDEX__ = "resp.php";
========
jQuery
========
$.get( __FILE_INDEX__, { mynum: 77711144} , function( data ) {
  console.log(JSON.parse(data));
});

========
axios
========
axios.post(__FILE_INDEX__, { mynum: 44})
  .then(function (response) {
    console.log(response.data.foo);
  })

========
XMLHttpRequest
========
var xhr = new XMLHttpRequest();
xhr.open('GET', __FILE_INDEX__, false);
xhr.send();
  
========
php resp and data
========
  
<?php 
$mypost = $_REQUEST['mynum'];
$my_array = array(
    "foo" => $mypost,
    "bar" => "foo",
);
echo json_encode($my_array);
