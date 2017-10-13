class animate
	constructor: ({timing, draw, duration}) ->
		start = do performance.now

		requestAnimationFrame animate = (time) ->

			timeFraction = (time - start) / duration
			timeFraction = 1 if timeFraction > 1


			progress = timing timeFraction

			draw progress

			requestAnimationFrame animate if timeFraction < 1




makeEaseOut = (timing) ->
	(timeFraction) ->
		return 1 - timing 1 - timeFraction


bounce = (timeFraction) ->
  a = 0
  b = 1
  result = undefined
  loop
    if timeFraction >= (7 - (4 * a)) / 11
      return -((11 - (6 * a) - (11 * timeFraction)) / 4) ** 2 + b ** 2
    a += b
    b /= 2
  return

bounceEaseOut = makeEaseOut bounce




figure.onclick = ->
	animate
		duration: 2000,
		timing: bounceEaseOut,
		draw: (progress) ->
			figure.style.transform = "scale(" + progress * 1 +")"
			return
	return




#=====================
# variant 2
#=====================
@recloop = ->
	if figure.style.display is "none"
		figure.style.display = "block"


	requestAnimationFrame ->
		if i <= 1
			# figure.style.transform ="translate(#{i}px,0)"
			figure.style.transform ="scale(#{i + 2})"
			figure.style.opacity ="#{i}"
			do recloop
			l i += 0.015
