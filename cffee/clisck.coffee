paper = Snap "#svg"
	
style =
  stroke: '#222'
  fill: '#387'
  strokeWidth: 5

path = paper
	.path ""
	.attr
		stroke: '#222'
		# fill: '#222'
		strokeWidth: 3

paper.click (e) ->
	# принажатии на фон
	if e.target.tagName is "svg"
		paper
			.circle e.offsetX, e.offsetY, 15
			.attr style
			.drag()
		pathString = path.attr 'd'
		coords = "#{e.offsetX},#{e.offsetY}"
		console.log coords
		path.attr
			d: if pathString then pathString + "L #{coords}" else "M #{coords}"



