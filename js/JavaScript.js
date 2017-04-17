//  var user  = prompt("вы готовы играть ?");
// var age = prompt("Каков ваш возраст ?");
// if(age < 13){
//     document.write("вы слишком молоды");
//     }
// else {
//     document.write("вы созрелми для этой игры");
//     }

// switch(user){
//     case"ok":
//     confirm("Я понимаю, подтвердить!");
//     break;
//     };

// for(i = 1; i<21; i++) {
//     if(i % 3 === 0 && i % 5 === 0){
//         document.write("FizzBuzz" + " ");
//     } else if(i % 3 === 0){
//         document.write("Fizz" + " ");
//     } else if(i % 5 === 0){
//         document.write("Buzz" + " ");
//     } else {
//         document.write(i);
//     }
// }



// var phonebookEntry = {};

// phonebookEntry.name = 'Oxnard Montalvo';
// phonebookEntry.number = '(555) 555-5555';
// phonebookEntry.phone = function() {
//   document.write('Calling ' + this.name + ' at ' + this.number );
// };

// phonebookEntry.phone();


// var languages = ["<br/>", "HTML", "<br/>", "CSS", "<br/>", "Java Script",  "<br/>","Python","<br/>", "Ruby"];
// for (var i = 0; i < languages.length; i++) {
//     document.write( languages[ i ] )
    
// };

// var bob = {
//   name: "Bob Smith",
//   age: 30
// };
// var susan = {
//   name: "Susan Jordan",
//   age: 25
// };
// // here we save Bob's information
// var name1 = bob.name;
// var age1 = bob.age;
// // finish this code by saving Susan's information
// var name2 =susan.name;
// var age2 =susan.age;


// var bicycle = new Object();
//       bicycle.speed = 0
//       bicycle.gear = 1
//       bicycle.frame_material = "carbon fiber"

// document.write(bicycle.frame_material  )



//     function Person(name,age) {
//   this.name = name;
//   this.age = age;
//   this.species = "Homo Sapiens";
// };

// var sally = new Person("Sally Bowles",39);
// var holden = new Person("Holden Caulfield",16);
// document.write("sally's species is " + sally.species + " and she is " + sally.age + " " + sally.name);
// document.write("holden's species is " + holden.species + " and he is " + holden.age + " " + holden.name);




// function Rectangle(height, width) {
//   this.height = height;
//   this.width = width;
//   this.calcArea = function() {
//       return this.height * this.width;
//   };
//   // put our perimeter function here!
//  this.calcPerimeter = function() {
//       return this.height *  2 + this.width * 2;
//   }; 
// };

// var rex = new Rectangle(7,3);
// var area = rex.calcArea();
// var perimeter = rex.calcPerimeter();

// document.write(perimeter)








// function Rabbit(adjective) {
//     this.adjective = adjective;
//     this.describeMyself = function() {
//         document.write("I am a " + this.adjective + "rabbit");
//     };
// }

// // now we can easily make all of our rabbits

// var rabbit1 = new Rabbit ("fluffy");
// var rabbit2 = new Rabbit ("happy");
// var rabbit3 = new Rabbit ("sleepy");








// Our Person constructor
// function Person (name , age){
//     this.name=name;
//     this.age=age;
//   }

// var family = new  Array ;{
// family[0] = new Person ("alice" , 40);
// family[1] = new Person ("bob" , 42);
// family[2] = new Person ("michelle" , 8);
// family[3] = new Person ("timmy" , 6);
// };
// loop through our new array
// document.write(family[0]);
// document.write(family[1]);
// document.write(family[2]);
// document.write(family[3]);









// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }


// var ageDifference = function(person1, person2) {
//     return person1.age - person2.age;
// }

// var alice = new Person("Alice", 30);
// var billy = new Person("Billy", 25);


// var diff = ageDifference(alice,billy); 
// document.write("разница в возросте " + "alice"  +"  and " +"billy " );
//     var diff = ageDifference(alice,billy); 
// document.write(alice.age - billy.age + "лет");











// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }


// var ageDifference = function(person1, person2) {
//     return person1.age - person1.age;
// };


// var olderAge = function(person1, person2) {
//     if(person1.age>person2.age){
//         return person1.age ;
//     } else {
//         return person2.age  ;
//     }

// };


// var alice = new Person("Alice", 30);
// var billy = new Person("Billy", 25);


// document.write("The older person is " + olderAge(alice, billy));


// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }


// var ageDifference = function(alice, billy) {
//     return alice.age - billy.age;
// };


// var olderAge = function(alice, billy) {
//     if(alice.age>billy.age){
//         return alice.age ;
//     } else {
//         return billy.age  ;
//     }

// };


// var alice = new Person("Alice", 30);
// var billy = new Person("Billy", 25);


// document.write("The older person is " + olderAge(alice, billy));







function Circle (radius) {
    this.radius = radius ;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    
    this.perimeter = function () {
        return Math.PI * this.radius * 2
    }
    
    
};

// var radiusOne = new Circle (33,44,66)
      
// document.write(radiusOne.radius);
// document.write(radiusOne.area);
// document.write(radiusOne.perimeter);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////1//////////////////////////////////////////////////////////



// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];


// var printPerson = function (person){
//     document.write(person.email +" "+ person.firstName +" "+ person.lastName + "<br/>");
//     };
//     printPerson(contacts[0]);
//     printPerson(contacts[1]);
   
///////////////////////////////////////////////////2/////////////////////////////////////////////////////////

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// function printPerson(person) {
//     document.write(person.firstName + " " + person.lastName);
// }

// function list() {
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++) {
//         printPerson (contacts[i]);
//         }
//       }  
    
    
// list ();
////////////////////////////////////////////////////3///////////////////////////////////////////////////////////






// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// function printPerson(person) {
//     document.write(person.firstName + " " + person.lastName);
// }

// function list() {
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++) {
//         printPerson(contacts[i]);
//     }
// }


// function search(lastName){
//     var contactsLength = contacts.length;
//     for(i = 0;i < contactsLength ;i++){
//         printPerson(contacts[i]);{
//         if(contacts[i].lastName === lastName){
            
//         }
//     }
// }

// search("Jones");

// }
// list();
/////////////////////////////////////////////////////4//////////////////////////////////////////////////////


// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary,];

// function printPerson(person) {
//     document.write(person.firstName + " " + person.lastName);
// }

// function list() {
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++) {
//         printPerson(contacts[i]);
//     }
// }

// function search(lastName){
//     var contactsLength = contacts.length;
//     for(i = 0;i < contactsLength ;i++){
//         printPerson(contacts[i]);{
//         if(contacts[i].lastName === lastName){
            
//         }
//     }
// }

// search("Jones");

// }


// function add (firstName, lastName, email, phoneNumber){
//     contacts[contacts.length] = {
//     firstName: firstName,
//     lastName: lastName,
//     phoneNumber: phoneNumber,
//     email: email
//   }
// }
    
// add("lizs","medvrdsevs","howwwmn@mzil.ru","7(363)3334455");
// add("lidwzs","medvrdevs","yyomn@mzil.ru","7(335)3334455");
// add("honomf","medvrrdevs","homvjkj@mzil.ru","7(833)3334455");
// list();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// var james = {
//     job: "programmer",
//     married: false,
//     speak: function(mood) {
//    return document.write("Hello, I am feeling" + " " + mood +"<br/>");
// }
// };

// james.speak("great");
// james.speak("just okay");
// james.speak("hellp");

// /////////////////////////////////////////////////////////////////////////////////////////////////////

var james = {
job: "programmer",
married: false,
sayJob: function() {
console.log( "Hi, I work as a "+this.job);
  }
};

// james.sayJob();
// james.job = "super programmer"; //переменная изменилась и второй james.sayJob(); изменился
// 

///////////////////////////////////////////////////////////////////////////////////////////////////
                                 //как выяснить какой тип переменной

var ranObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof ranObj ); // should print "object"
document.write( typeof aNumber); // should print "number"
document.write( aString       ); // should print "string"

//.....................................................................................................
//                             //как выяснить конкретный параметр true ,false
//  var myObj = {
//     // finish myObj
//     name: "jons"
// };

// document.write( myObj.hasOwnProperty('name') ); // should print true
// document.write( myObj.hasOwnProperty('nickname') ); // should print false                           
//.......................................................................................................
                                      //распечатать ссвойства 
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
for(var property in nyc) {
  console.log(property);
}
// //................................................................................................
//                                      //распечатка значений свойств

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var x in nyc) {
console.log(nyc[x]);
}

// ///////////////////////////////////////////////////////////////////////////////////////
//                   //добавление метода не в конструктор а к конкретному персонажу
// function Dog (breed) {
//   this.breed = breed;
// }
// //.............................................

// var buddy = new Dog("Golden Retriever");
// buddy.bark = function() {
//   document.write("Woof");
// };
// buddy.bark();
// //.............................................
// var snoopy = new Dog("Beagle");

// snoopy.bark = function(){
//     document.write("Woof","Woof");
//     }
// snoopy.bark();
// //................................................
//               //добавление метода не в конструктор а ко всем персонажам  
// function Dog (breed) {
//   this.breed = breed;
// };


// var buddy = new Dog("golden Retriever");
// Dog.prototype.bark = function() {
//   document.write("Woof");
// };
// buddy.bark();


// var snoopy = new Dog("Beagle");

// snoopy.bark();


// ////////////////////////////////////////////////////////////////////////////////////
//                             //функцыя рыспечатки параментра 
// function Person(name,age) {
//   this.name = name;
//   this.age = age;
// }
// //....................................
// var printPersonName = function (p) {
//   document.write(p.name);
// };
// //......................................
// var bob = new Person("Bob Smith", 30);
// printPersonName(bob);

// //...................................
// var me = new Person("alex raz",33);
// printPersonName(me)                            

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// function Animal(name,numLegs) {
//       this.name = name;
//       this.numLegs = numLegs;
//     }



// Animal.prototype.sayName = function(){
//     document.write("Hi my name is" +" "+ this.name)
//     }


// var penguin = new Animal("Captain Cook", 2);
// penguin.sayName();

//....................................................
              //наследие класса
              
// function Animal(name, numLegs) {
//     this.name = name;
//     this.numLegs = numLegs;
// }
// Animal.prototype.sayName = function() {
//     document.write("Hi my name is " + this.name);
// };


// function Penguin(name, numLegs) {
//     this.name = name;
//     this.numLegs = 2;
// }

// Penguin.prototype = new Animal();
// /////////////////////////////////////////////////////////////////
// function Penguin(name) {
//     this.name = name;
//     this.numLegs = 2;
// }
// Emperor.col=function(){
//     console.log(this.numLegs)
//     }
// // у конструктора император нету параметра numLegs но за счет Emperor.prototype = new Penguin();
// // он унаследовался 
// function Emperor(name){
//     this.name = name;
//     }


// Emperor.prototype = new Penguin();
// var emperor = new Emperor ("coco")
// document.write(emperor.numLegs);
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//публичные данные 
// function Person(first,last,age) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
// }

// var john = new Person('John','Smith',30);
// var myFirst = john.firstName;
// var myLast = john.lastName;
// var myAge = john.age;
// //закрытые данные var bankBalance 
// function Person(first,last,age) {
//    this.firstname = first;
//    this.lastname = last;
//    this.age = age;
//    var bankBalance = 7500;
// }

// var john = new Person ("alex","raz",33,7777);

// document.write(john.bankBalance)
// //...........................................
//взлом закрытых параметров
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      
     return bankBalance;
   };
}

var john = new Person('John','Smith',30);
document.write(john.bankBalance);


// var myBalance = john.getBalance();
// document.write(myBalance); 
// //взлом пароля 
// function Person(first,last,age) {
//    this.firstname = first;
//    this.lastname = last;
//    this.age = age;
//    var bankBalance = 7500;
  
//    this.askTeller = function(pass) {
//      if (pass == 1234) return bankBalance;
//      else return "Wrong password.";
//    };
// }

// var john = new Person('John','Smith',30);

// var myBalance = john.askTeller(1234);
// document.write(myBalance);




// выыести только данные определенного типа . в данном случае string

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};


for (var x in languages) {
if (typeof(languages[x])==="string"){
document.write(languages[x]);
  }
};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};

cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

document.write('Your bill is '+cashRegister.total);
//////////////////////////////////////////////////////////////////////////
var cashRegister = {
total: 0,
//insert the add method here 
add: function (itemCost) {
this.total += itemCost;
},

scan: function (item) {
    switch (item) { 
    case "eggs": 
        this.add(0.98); 
        break;

    case "milk": 
        this.add(1.23); 
        break;
    case "magazine": 
        this.add(4.99); 
        break;
    case "chocolate": 
        this.add(0.45); 
        break;


    //Add other 2 items here


    }
    return true;
  }
};

//купили яйцо три 2 раза
cashRegister.scan('eggs')
cashRegister.scan('eggs')
cashRegister.scan('magazine')
cashRegister.scan('magazine')
cashRegister.scan('magazine')
//Show the total bill
document.write('Your bill is '+cashRegister.total);
//...................................................
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item ,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
       
        }
    }
} 

// scan each item 4 times
cashRegister.scan('eggs',4)
cashRegister.scan('milk',4)
cashRegister.scan('magazine',4)
cashRegister.scan('chocolate',4)



//Show the total bill
document.write('Your bill is '+cashRegister.total); 
///////////////////////////////////////////////////////////
var cashRegister = {
    total:0,
    //Dont forget to add your property
    
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction : function() {
        return this.total -= this.lastTransactionAmount;
        }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);



//................................................
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("alx",20);
// Create yourself again as 'me' with a staff discount of 20%


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(employee){
        this.total -= this.total * (employee.discountPercent / 100);
    },
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);


// Show the total bill
document.write('Your bill is '+cashRegister.total.toFixed(2));


var calculetor = function(a,y){return a*y}
undefined
calculetor(4,7)
28


