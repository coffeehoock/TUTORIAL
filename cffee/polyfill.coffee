if typeof Object.create isnt "function"
  Object.create = (o, props) ->
    F = ->
    F:: = o
    if typeof (props) is "object"
      for prop of props
        F[prop] = props[prop]  if props.hasOwnProperty((prop))
    new F()