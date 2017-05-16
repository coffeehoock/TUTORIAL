<?php  


//................................СТРОКИ


echo "Hello , " . " " .  " world " . "! </br>";

//................................ПОТОКИ


   $fruit = "Apple";
    
    switch ($fruit) {
        case 'Apple':
            echo "Yummy.";
            break;
        case 'App':
            echo "Yumсвmy.";
            break;
    default:
        echo "None of the above";
    }



$myNum = 2;

switch ($myNum) {
    case 1:
        echo "1";
        break;
    case 2:
        echo "2";
        break;
    case 3:
        echo "3";
        break;
    default:
        echo "None of the above";
}

//................................МАССИВЫ


$tens = array(10, 20, 30, 40, 50);
        echo $tens{2};
        echo $tens[2];

 $languages = array("HTML/CSS","JavaScript", "PHP", "Python", "Ruby");
        
        // измиекеия элемента массива
         $languages[1] = "SQL";
             

        //Удаление элемента массива
         unset($array[2]);

        //Удаление всего массива
         unset($array);

        //печать всех элементов массива

         foreach($languages as $lang) {
          print "<p>$lang</p>";
        }

//................................ЦЫКЛЫ


  for ($leap = 2004; $leap < 2050; $leap = $leap + 4) {
        echo "<p>$leap</p>";
      }      

                // ЦЫКЛЫ + массива

$langs = array("JavaScript","HTML/CSS", "PHP","Python", "Ruby");
        
          foreach ($langs as $lang) {
              echo "<li>$lang</li>";
          }
        
          unset($lang);

//вы не знаете , сколько раз цикл должен повторяться? В этом случае, вы можете использовать while петлю
//while Цикл будет выполняться до тех пор , пока определенное условие истинно. Например, цикл в редакторе будет симулировать монета переворачивается тех пор , пока число последовательных головок меньше , чем 3.

  $headCount = 0;
  $flipCount = 0;

  while ($headCount < 3) {
    $flip = rand(0,1);
    $flipCount ++;
    if ($flip){
      $headCount ++;
      echo "<div class=\"coin\">H</div>";
    }
    else {
      $headCount = 0;
      echo "<div class=\"coin\">T</div>";
    }
  }
  echo "<p>случайное число  равно {$flipCount}</p>";



    $flipCount = 0;

      do {
        $flip = rand(0,1);
        $flipCount ++;
        if ($flip){
            echo "<div class=\"coin\">H</div>";
        }
        else {
            echo "<div class=\"coin\">T</div>";
        }
    } while ($flip);
    $verb = "were";
    $last = "flips";
    if ($flipCount == 1) {
        $verb = "was";
        $last = "flip";
    }
    echo "<p>There {$verb} {$flipCount} {$last}!</p>";

//................................ВСТРОИННЫЕ ФУНКЦИИ


$my_name = strlen("Alecsey");

print $my_name;

    $myname = "David";
    $partial = substr($myname, 0, 3);
    print $partial;
    $uppercase = strtoupper($myname);
    print $uppercase;
    $lowercase = strtolower($uppercase);
    print $lowercase;

strpos("david", "e");   // 0
strpos("david", "y");   // 2
strpos("emily", "ily"); // 2
strpos("emily", "zxc"); // false
if (strpos("david","h") === false) {
  print "Sorry, no 'h' in 'david'";
}

$round_decimal = round(M_PI, 3);
    print $round_decimal;




$fav_bands = array();
array_push($fav_bands, "Maroon 5");
array_push($fav_bands, "Bruno Mars");
array_push($fav_bands, "Nickelback");
array_push($fav_bands, "Katy Perry");
array_push($fav_bands, "Macklemore");
print count($fav_bands);

foreach($fav_bands as $lang) {
          print "<p>$lang</p>";
        }


$the_array = array(5, 3, 7, 1);
sort($the_array);
print join(", ", $the_array);

$array = array(5, 3, 7 ,1);
rsort($array);
print join(":", $array);


$friend=array();
array_push($friend, "armus");
array_push($friend, "gadus");
array_push($friend, "parus");
// Sort the list
$sort=sort($friend);

    // Randomly select a winner!
    $rand=rand($sort, count($sort)-1);

    // Print the winner's name in ALL CAPS
    $upper = strtoupper ($friend[$sort]); 
    print $upper;


//................................ФУНКЦИИ
    

function hello() {
            echo "Hello world!";
          }
          
hello();

//Имя функции может содержать цифры, буквы, подчеркивание или дефиса


   $name = 30 ;
        function greetings ($name){
            echo "Greetings, " . $name . "!";
            }
    greetings($name);

        $name = "alex";
        $age = 33;
      function aboutMe($name , $age){
          echo "Hello! My name is $name, and I am $age years old.";
          }
          
          aboutMe($name , $age);


//................................объектно-ориентированное программирование


//классы
class Fruit {
  public $count = 3;
  public $type;
}

$apple = new Fruit();
$apple->type = "apple";//добавление свойства
print $apple->count; // 3
print $apple->type;  // apple



        class Person {
            public $isAlive = true;
            public $firstname;
            public $lastname;
            public $age;
            }
        $teacher = new Person();
        $student = new Person();
        echo $teacher->isAlive;



                class Person {
            public $isAlive = true;
            public $firstname;
            public $lastname;
            public $age;
            public function __construct($firstname, $lastname ,$age){
                $this->firstname = $firstname;
                $this->lastname = $lastname;
                $this->age = $age;
                }
            }
        $teacher = new Person("boring", "12345", 12345);
        $student = new Person("Alex", "popov", 33);
        echo $student->age;





class Person {
  public $isAlive = true; // сначало идет уровень доступа (приватность )
  public $firstname;
  public $lastname;
  public $age;
       
  public function __construct($firstname, $lastname, $age) { // конструктор обекта
    $this->firstname = $firstname;
    $this->lastname = $lastname;
    $this->age = $age;
    }
            
  public function greet() {   // потом методы
    return "Hello, my name is " . $this->firstname . " " . $this->lastname . ". Nice to meet you! :-)";
    }
}
          
$me = new Person('boring', '12345', 12345);
        
echo $me->greet(); 





class Person {
    public $isAlive = true;
    public $firstname;
    public $lastname;
    public $age;
    public function __construct($firstname, $lastname ,$age){
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->age = $age;
        }
    public function greet(){
        return "Hello, my name is " . $this->firstname . " " . $this->lastname . "Nice to meet you! :-)";
        }
    }
$teacher = new Person("boring" , "12345" , 12345);
$student = new Person("Alex" , "popov" , 33);
echo $student->greet();
echo $teacher->greet();



        class Dog{
            public $numLegs = 4;
            public $name;
            
            public function __construct($name){
                   $this->name = $name;
                }
            public function bark(){
                return "Woof!";
                }
            public function greet(){
                return "this naame dog" . " " . $this->name . "ok";
                }
            }
        $dog1 = new Dog("Barker");
        $dog2 = new Dog("Amigo");
        
        echo $dog1->bark();
        echo $dog1->greet();




//is_a() если конкретный объект является экземпляром данного класса
//property_exists() Чтобы увидеть , если объект имеет данное свойство
//method_exists() чтобы увидеть , если объект имеет данный метод

        class Person {
          public $isAlive = true;
          
          function __construct($name) {
              $this->name = $name;
          }
          
          public function dance() {
            return "I'm dancing!";
          }
        }
        
        $me = new Person("Shane");
        if (is_a($me, "Person")) {
          echo "I'm a person, ";
        }
        if (property_exists($me, "name")) {
          echo "I have a name, ";
        }
        if (method_exists($me, "dance")) {
          echo "and I know how to dance!";
        }



        


//................................наследие класса extends
        



        class Shape {
          public $hasSides = true;
        }
        
        class Square extends Shape {
        
        }
        
        $square = new Square();
        // Add your code below!
        if ( property_exists($square , "hasSides") ) {
          echo "I have sides!";

//................................Переопределение методов 

         class Vehicle {
          public function honk() {
            return "HONK HONK!";
          }
        }
        // Add your code below!
         class Bicycle extends Vehicle{
            public function honk() {
            return "Beep beep!";
          }
             }
        $bicycle = new  Bicycle();
        echo $bicycle->honk();

        //родительский класс может предотвратить его методы от быть переопределены его детьми
        				//            final

                 class Vehicle {
           final public function honk() {
            return "HONK HONK!";
          }
        }
        // Add your code below!
         class Bicycle extends Vehicle{
            public function honk() {
            return "Beep beep!";
          }
             }
        $bicycle = new  Bicycle();
        echo $bicycle->honk();

        		//const константа переменная которая не меняется 


      class Person {
          
      }
      class Ninja extends Person {
        // Add your code here...
        const stealth ="MAXIMUM" ;
      }
      // ...and here!
      echo Ninja::stealth



      //Вы , наверное , заметили , что мы могли бы получить доступ к Ninjaпостоянной класса без фактического создания экземпляра Ninja, и если вы особенно скороспелый, вы можете быть удивлены, можно ли получить доступ к свойствам или методам класса без создания экземпляра класса. Ответ: да! 

      									echo Ninja::stealth

      //static Ключевых слов позволяет использовать свойство класса 'или метод без необходимости создавать экземпляр этого класса. Вот как это работает:

      									       

        class King {
          // Modify the code on line 10...
          public static function  proclaim() {
            echo "A kingly proclamation!";
          }
        }
        // ...and call the method below!
        King::proclaim();



      class Person{
          public function say(){
              echo "Here are my thoughts!";
              }
          }
      class Blogger extends Person{
          const cats = 50;
          }
        echo  Blogger::say();
        echo  Blogger::cats;



//................................продвинутое знание массивов

        $fruits = array('bananas', 'apples' , 'pears')  ;            
        echo 'I love eating ' . $fruits[1] . ' too!';



//................................Ассоциативные массивы


        $myArray = array(2012, 'blue', 5);

        $myAssocArray = array(
          'year'   => 2012,
          'colour' => 'blue',
          'doors'  => 5
          'doors'  => 5,
          'make'   => 'BMW'
                             );
            
  
        echo $myArray[1];
        echo '<br />';
        echo $myAssocArray['colour'];

        echo 'I have a ' . $myAssocArray['year'] . ' ' . '. It is ' . $myAssocArray['colour'] . ' and has ' . $myAssocArray['doors'] . ' doors.';

                   //Ассоциативный массив так же называется карта



                $food = array('pizza', 'salad', 'burger');
        
        
        $salad = array(
                  'lettuce' => 'with',
                   'tomato' => 'without',
                   'onions' => 'with'
                      );
    
      // Looping through an array using "for".
      // First, let's get the length of the array!
      $length = count($food);
    
      // Remember, arrays in PHP are zero-based:
      for ($i = 0; $i < $length; $i++) {
        echo $food[$i] . '<br />';
      }
    
      echo '<br /><br />I want my salad:<br />';
    
      // Loop through an associative array using "foreach":
      foreach ($salad as $ingredient=>$include) {
        echo $include . ' ' . $ingredient . '<br />';
      }
    
      echo '<br /><br />';

      				//Многомерные Массивы

        $deck = array(array('2 of Diamonds', 2),
                      array('5 of Diamonds', 5),
                      array('7 of Diamonds', 7),
                      array('8 of Diamonds', 8)
                      );
        
      // Imagine the first chosen card was the 7 of Diamonds.
      // This is how we would show the user what they have:
      echo 'You have the ' . $deck[2][0] . '!';


// логические операторы or или and и
