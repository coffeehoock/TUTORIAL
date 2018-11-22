class User
    constructor: (@accent, options) ->
        @typeName = "User"
        @banned = ->
            console.log "fuck me as #{@accent} BEATCh !!!!!!!!"
        @extPub = ->
            console.log "@extPub"

    init: ->
        console.log "#{ @typeName } Init"
    
    ext: ( $that ) ->
        console.log "ext #{$that.typeName}"

class Admin
    constructor: (@accent, options) ->
        @typeName = "Admin"
        @banned = ->
            console.log "Yo ban #{ @accent }"

    init: ->
        console.log "#{ @typeName } Init"

#$.extend {}, defaults, options


user = new  User('user')
admin = new  Admin('admin')



fun = ->
    console.log "my name is #{ @name }"

reeves = {}
reeves.name = 'reeves'
reeves.fun = fun

statham ={}
statham.name = 'statham'
statham.fun = fun



User::init.call new Admin
Admin::init.call user

user.banned.call admin

reeves.fun.call statham

User::ext new User '$that'
user.constructor::ext new User '$that'

Admin::__proto__.constructor.call User::ext new Admin
Admin.call User::ext(new Admin)

#$.extend {}, User, Admin
