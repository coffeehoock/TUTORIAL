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
	arguments.length



# замыкания это доступ к переменным функии котороя завершила работу

G.getVar = do -> 
	count = 'clousure var'

	-> # обращение к переменной count в тот момет когда ее не существует
		count


# создание функии на лету

G.greeting = ( name ) ->
	text = "Hello " + name
	greet = ->
		console.log text
	greet

a1 = greeting 'alex'
a2 = greeting 'raxmat'