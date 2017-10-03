G = window

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


G.average = ->
	i   = 0
	sum = 0
	for i in [0...arguments.length]
		sum = sum + arguments[i]
	sum/arguments.length