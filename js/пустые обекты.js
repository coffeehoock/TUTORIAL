o = {} ;
o.mame = 'petya';
o.age  = 22;

o[0] = 'j';
o[1] = 't';
o.name или o['name']



a = [] ;
a.mymame = 'petya';
a.age  = 22;

a[0] = 'j';
a[1] = 't';


a.mymame или a['mymame']

o = {

	set : function(){

		console.log('hello world')
	}
}


o.set()


for(var p in o) {
  document.writeln(o[p]);
}

for(var p in o) {
  document.writeln(p);
}

for(var p in o) {
  document.writeln(p + " = " + g[p] + "<br>");
}




var g = {
	
	infoA : 'leon',
	infoB : 'fskoff',	
	infoV : '77',
	infoN : 78,
	  set : function() {

for(var p in g) {
  document.writeln(p + " = " + g[p] + "<br>");
			}
		}
};

g.set()



var g = {
	
	infoA : 'leon',
	infoB : 'fskoff',	
	infoV : '77',
	infoN : 78,
};

		function set() {

for(var p in g) {
  document.writeln(p + " = " + g[p] + "<br>");
			}
		}

	set()