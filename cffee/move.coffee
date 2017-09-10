# paper = Snap 800, 400
paper = Snap "#svg"
	
style =
  stroke: '#fff'
  fill: '#4db5e3'
  strokeWidth: 5

path = paper
	.path ""
	.attr
		stroke: '#d0a2a2'
		fill: 'transparent'
		strokeWidth: 3
		strokeOpacity: .6
		# d: "M 0,0 L 27,34"
		# opacity: 0.3

pathArray = []

updatePath = ->
	#redray path
	first = pathArray[0]
	pathString = "M #{first.x},#{first.y}"

	for node in pathArray.slice 1
		pathString += "T #{node.x},#{node.y}"
	
	path.attr d: pathString
	console.log pathArray



paper.click (e) ->
	# принажатии на фон
	if e.target.tagName is "svg"
		paper
			.circle e.offsetX, e.offsetY, 115
			.attr style
			.data 'i', pathArray.length
			.mouseover ->
				@stop().animate {r:25}, 1300, mina.elastic
			.mouseout ->
				@stop().animate {r:15}, 300, mina.easeinout
			.drag ((dx, dy, x, y) ->
				@transform "r#{dx}"
				@attr
					cx: x
					cy: y
				currentNode = pathArray[@data 'i']
				currentNode.x = x
				currentNode.y = y
				do updatePath),
			-> path.stop().animate {opacity: .2}, 200, mina.easeinout
			-> path.stop().animate {opacity: 1}, 1000, mina.easeinout

		pathArray.push
			x: e.offsetX
			y: e.offsetY

		do updatePath

		# pathString = path.attr 'd'
		# coords = "#{e.offsetX},#{e.offsetY}"
		# path.attr
		# 	d: if pathString then pathString + "L #{coords}" else "M #{coords}"

myel = Snap "div#cont"

myel.drag (dx, dy) ->
	# @transform "t#{dx}r#{dx}"
	@attr
		style: "transform: translate(#{dx}px,#{dy}px)"
	# transform: matrix(0.9336,-0.3584,0.3584,0.9336,339,0)
	
	# console.log "t#{dx}r#{dx}"
	# updatr = ->
	# 	myel.style.c
	# 	myel.style = "#{c}"

	# do updatr
# scale(1)

f = style: "transform"

myel
	.mouseover ->
		@stop().animate {f:scale(1)}, 1300, mina.elastic
	.mouseout ->
		@stop().animate {style:15}, 300, mina.easeinout

$ "#cont"
	.stop ->
