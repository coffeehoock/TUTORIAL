

// object ******************************************


var myOb1 = {
	name: "obj 1",
	getname: function(age){
		console.log("I love fucking coffee", this.name, age);
	}
};

var myOb2 = {
	name: "obj 2"
};
// bind method
// myOb1.getname.bind(myOb2)();
myOb1.getname.bind(myOb2)(33);

// call method
myOb1.getname.call(myOb2, 77);

// apply method and arguments
function bainding(newcontext, newfunction){
	return function(){
		newfunction.apply(newcontext, arguments);
	}
};
// все параметры (22) попадут в массив  arguments
bainding(myOb2, myOb1.getname)(22);



