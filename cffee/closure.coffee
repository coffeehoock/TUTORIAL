G.getIt = ->
	@x
	# @y 

G.obj1 =	
	get : getIt
	x   : 1

G.obj2 =	
	get : getIt
	x   : 2	

G.obj1.x
G.obj1.get()