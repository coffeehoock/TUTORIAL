class @ABSOLUTE
	constructor: (@name, @age) ->
		if not (@ instanceof ABSOLUTE)
			return new ABSOLUTE arguments

		@exct = 'унаследовал'
		
		#	@method _PRIV_
		ABSOLUTE.method = ->
			'helo'
		
		#	@method _PUB_
		@methodPub = ->
			'helo'
#================================
#	@method _HIDDEN_ 1 variant
#================================
	say: ->
		super


#================================
#	@method _HIDDEN_ 2 variant
#================================
# ABSOLUTE::say = ->
# 	@name

#================================
#	@extends @method
#================================
class @Smail extends @ABSOLUTE
	# !extends @param 
	# constructor: ( {@s = 1} )->


@objABSOLUTE = new ABSOLUTE 'Alex-BIG', 33
@objSmail    = new Smail 'Alex-Smail', 44



class @A
	constructor: (@one, @two) ->

	method: (three) ->
		@one + @two + three

instance = new A 1, 2

@object = (callback) ->
	callback.call instance, 3

object instance.method # 6
