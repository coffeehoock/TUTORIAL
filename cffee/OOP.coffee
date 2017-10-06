class @ABSOLUTE
	constructor: (@name, @age) ->
		@exct = 'унаследовал'
		#	@method _PRIV_
		ABSOLUTE.method = ->
			'helo'


#================================
#	@method _PUB_
#================================
ABSOLUTE::say = ->
	@name

#================================
#	@extends @method
#================================
class @Smail extends @ABSOLUTE
	# !extends @param 
	# constructor: ( {@s = 1} )->


@objABSOLUTE = new ABSOLUTE 'Alex-BIG', 33
@objSmail = new Smail 'Alex-Smail', 44