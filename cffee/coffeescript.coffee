#================================
#	@coment
#================================
###
contral tab
alt shift 1 - 5	Управление областей
###


#================================
#	@string
#================================
string =
	"yes not
	we wqe ew"
string =
	"""yes not
	we wqe ew"""


#================================
#	@interpolation
#================================
alex = "alex"
"hoello #{alex}"


#================================
#	@array
#================================
arr = [0...6] #normal
arr2 = [0..6]

arr3 = [0..62] #for
arr3[..6]  #slice
arr3[5...] #slice
arr3[..]   #slice

newArr = arr3[..] #clone arr


#================================
#	@reg
#================================
# visa =
# ///
# ^4 # Start widh 4
# [9-0]{12} # 12 digit
# (?:[9-0]{3}) # new cards have 16
# ///

masterCard =
///
	^/\d+/g
///


#================================
#	@paralel =
#================================
[a,b] = ["33",44]

car =
	make: 22
	model: "poeshe"
	engine:
		type: "V8"
		hp: 456
	cost: 600000

{model, engine: {type}} = car


#================================
#	@operator
#================================
# VARS and VARS #&&
# VARS or VARS #||
# not VSRS #!

# VSRS is VSRS #===
# VSRS isnt VSRS #!==

# B isnt B
# B is not B

# 10 < a < 10 var diapason

a = 6
# @update
y = ->
	l  a if 5 < a < 100 
do y

user = 
	name: "Alex"
	age: 33
	lastVisit: do Date.now
"age" of user

@range = [10..20]
14 in range    #true method indexOf

@cantry = ["RUSIA", "USA", "UK", "Germany"]
@cantry[0] in ["RUSIA", "USA", "UK", "Germany"]


#================================
#	@existential operator ?
#   ----проверки----
#   проверка на null и  undefined
#================================
###
так как 0 является false
###

open = ( param ) ->
	l param if param?
	### не одно и то же ###
	l param if param isnt null
###
если book равен нулю то
условие не выполнится
и по этому ставим ?
### 

book = 0

###
проверка open
является ли
функцией open?
###
open? book


#================================
#	@existential operator ?
#   ----присваевоние----
#   проверка на null и undefined
#================================

@object = {}
# Some actions on object

###
object.speed = 4565642
проверка на наличие значения
null и undefined
ПЕРЕД ТЕМ КАК ПРИСВОИТЬ 45
###

###
object == undefined
true

object === undefined
true

object == null
true

object === null
false
###

object.speed = 11
###
присвоить значение 
в том случае если
object.speed нет параметра speed
или  значение speed = null
###
object.speed ?= 45

object.speed = object.speed || 100
###
если speed истенное значение то
присвоить speed speed
###
object.speed = object.speed or= 100
###
если speed истенное значение то
пропустить
###


#================================
#	@existential operator ?
#   ----присваевоние----
#   проверка на "" == false и 0 == false
#================================
###
0 == false
true

0 === false
false

"" == false
true

"" === false
false
###
@config = {}
# Some actions on object

### *** без existential operator ?
если config.option не
равно  0, null, undefined тоесть
истинна
то привоить 10 без ?
###

### *** с existential operator ?
если config.option не
равно null, undefined но равно 0
тоесть "number" 
то присвоить option config.option
###

# config.option = 0
config.option = ->
	0

class @option
	constructor: ( option ) ->
		# @option = config.option || 10
		# @option = config.option ? 10
		@option = do config.option ? 10

# option = config.option || 10
# l option = config.option ? 10
# @option = do _config.option ? 10

@f = new option(config.option)


#================================
#	@Functuon
#================================
###
name = "Alex" в место
undefined вернуть "Alex"
###
saymyName = do ( name = "Alex" ) ->
	l "hello my name is #{name}"


notmyName = ( @name ) ->
	"hello my name is #{name}"
	return

normslize = ( langth, vectors... ) ->


#================================
#	@Сondition
#================================
###
then для записи
на одной строчке
###

### это ###
if notmyName? then do  normslize
### и это ###
if notmyName?
	do  normslize
### и еще ###
do  normslize if notmyName?
###
одно и то же
###


### это ###
if not notmyName
	do  normslize
### и это ###
unless notmyName
	do  normslize
###
одно и то же
###

#================================
#	@ternary operator ?
#================================

mode = "goodbye"
# myOperator = "hello"

l myOperator = if mode is "hello" then "goodbye" else "good"


#================================
#	@loop
#   while
#================================
isReady = 0
dosometting = -> undefined
### это ###
while isReady
	do dosometting
### и это ###
while isReady then do dosometting
### и еще ###
do dosometting while isReady
###
одно и то же
###

### это ###
while not isReady
	do dosometting
### и это ###
until isReady
	do dosometting
### и еще ###
do dosometting until isReady

until isReady then do dosometting
###
одно и то же
###