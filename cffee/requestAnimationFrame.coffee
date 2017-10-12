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
