l = console.log

document.onclick = ( event ) -> 
	l	event # @target свойство
	event = event or window.event
	if event.target.tagName == 'DIV'
		l 'div'

document.onmousemove = ( event ) -> 
	event = event or window.event
	l	"clientX  #{event.clientX}  clientY  #{event.clientY}"
	# if event.target.tagName == 'DIV'
	# 	l 'div'


# do event.stopPropagation
# do event.preventDefault

if event.target.matches 'div#figure2'
if event.target.closest 'div#figure2'

# pageX/Y координаты относительно верхнего левого угла
# всей отображаемой страницы (включая части, скрытые прокруткой),
# в то время как координаты clientX/Y относятся к верхнему
# левому углу видимой части страницы, «видны» через окно браузера.


# polifill @matches

# ​(function(e){

# e.matches || (e.matches=e.matchesSelector||function(selector){
#   var matches = document.querySelectorAll(selector), th = this;
#   return Array.prototype.some.call(matches, function(e){
#      return e === th;
#   });
# });

# })(Element.prototype);