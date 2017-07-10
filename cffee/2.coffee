# console.dir paper
# paper = Snap 600, 400
paper = Snap "#svg"

# cricle = paper.circle 150,150,100

# cricle.attr
  # fill: '#387'
  # stroke: '#aaa'
  # strokeOpacity: .3
  # strokeWidth: 20
	
style =
  fill: '#387'
  stroke: '#aaa'
  strokeOpacity: .3
  strokeWidth: 20

cricle = paper
	.circle 150,150,100
	.attr style
	.drag()

# rect   = paper
# 	.rect 300,50,300,200
# 	.attr style

path = paper
	# .path "M 300,50 L 500,300 L 700,150 L 600,100 L 500,150  Z"
	# сокращенный вариант
	.path "M 300,50,500,300,700,150,600,100,500,150  Z"
	.attr style
	.drag()
