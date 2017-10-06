@fun = ->
  G = window
  G = G.window
  G.i = 0
  G.b = 33
  u =  do ->
    while(G.i < G.b)
    	G.i++
  
  return G.i
