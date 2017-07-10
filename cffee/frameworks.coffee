# #================================
# #	test
# #================================

# gui = new GUI


# myarr = []
# i = 0

# class blocs
# 	constructor: (@h) ->
# 		@wath = ->
# 			# window.myarr = []
# 			# myarr.push
# 			myarr[i] = @h
# 			console.log typeof myarr[i]
# 			++i
# 		@attr = ->
# 			@style.widht = 'dss'

# menu = new blocs 'menu'
# me = new blocs "asa"


# do menu.wath
# do me.wath

# console.log myarr[1].self

window.doc = document




window.el = (@element,color) ->
	# color = null
	save = doc.getElementById @element
	
	if color is color
		save.style.color = color

	if color is undefined or null or NaN
		save

	# # if !color
	# el element

	# @attr = (@param)->
	# 	el.style.color = @param
