/*........@оригинал...............*/
function admin(name, family, card) {
	this.name = name;
	this.family = family;
	this.card = 0;

/*........@публичный метод........*/
	this.public = function(){
		console.log('hy my nam is ' + this.name )
	};

	this.printPerson = function(n){
		console.log(n.name)
	};



/*........@приватный метод........*/
	function private(e){
		console.log('my private ' + this.name )
	}	
};






/*........@внешний метод..........*/
admin.prototype.global = function(){
		console.log('my global ' + this.name )
};

admin.printPerson2 = function(n){
		console.log(n.name)
	};



/*................................*/


var a1 = new admin("sergay", "kuza");
		// a1.card = 7777777;


admin.printPerson2(a1);

/*........@наследник..............*/
function user(){
// admin.apply(this)
};

// user.prototype = admin;

var a2 = new user("dima", "popov");
		a2.card = 888888888888;		
 
console.dir(admin.prototype);
console.dir(user.prototype);


