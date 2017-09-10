<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<?php $age  = 100; ?>
<style>
  body{
    font-size:  <?php echo $age; ?>px;
    background: #2b3238;
    color: rgba(255, 255, 255, 0.79);
  }
</style>
<body>
  <?php
    $arr = ["css","js","alax","gulp"];

    // echo count($arr) ;

    // for ($i=0; $i < count($arr) ; $i++) { 
    //   echo "$arr[$i]<br>";
    // }

    $arr_ass = [
        "q" => "css",
        "w" => "js",
        "e" => "alax",
        "b" => "gulp",
        "t" => [
          "1" => "css",
          "2" => "js",
          "3" => "alax",
          "4" => "gulp",
        ]
    ];

    // foreach ($arr_ass[t] as $key => $value) {
    //   echo "<li>$key $value</li>";

    // }

    // echo $arr_ass[b];
  ?>

  <ul>
    <?php 
      foreach ($arr_ass[t] as $key => $value) {
        echo "<li>$key $value</li>";
      }
     ?>
  </ul>
</body>
</html>



