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
  $m = date("s");
  // echo $m;

function endings($m, $variant)
{
  $m0 = $m % 10;
  $m1 = $m % 100;
    if ($m1 >= 5 && $m1 <= 20) {
      $res = $variant[0];
    }elseif ($m0 == 1) {
      $res = $variant[1];
    }elseif ($m0 >= 2 && $m0 <= 4) {
      $res = $variant[2];
    }else{
      $res = $variant[0];
    }
    return $res;
}

// echo $m . " " . endings($m) ;
//  $m = ["минут","минута","минуты"];

// for ($i=0; $i < 61 ; $i++) { 
//   echo $i . " " . endings($i,$m) . "<br>" ;
// }

//  $m = ["секунд","секунда","секунды"];

// for ($i=0; $i < 61 ; $i++) { 
//   echo $i . " " . endings($i,$m) . "<br>" ;
// }


//  $m = ["часов","час","часа"];

// for ($i=0; $i < 24 ; $i++) { 
//   echo $i . " " . endings($i,$m) . "<br>" ;
// }

 $m = ["дней","день","дня"];

for ($i=0; $i < 601 ; $i++) { 
  echo $i . " " . endings($i, $m) . "<br>" ;
}

// endings($m);

  ?>
</body>
</html>




