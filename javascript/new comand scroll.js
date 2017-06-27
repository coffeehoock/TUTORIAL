menu.b[0].getBoundingClientRect()

function consoleLogoScroll(){
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  console.log( scrolled + 'px')
    }
    
}

window.pageYOffset || document.documentElement.scrollTop

Ширина/высота видимой части окна
	clientWidth/Height

anim.scrollIntoView(top)
anim.scrollIntoView(false)


document.documentElement
document.documentElement.clientHeight
document.documentElement.clientTop

document.documentElement.scrollHeight
высота с учетом прокрутки

document.documentElement.clientHeight
видимая высота



Свойства clientWidth/Height, 
если есть полоса прокрутки, возвращают именно ширину/высоту внутри неё, доступную для документа, а window.innerWidth/Height – игнорируют её наличие

Для получения размеров всей длинны страницы
var scrollHeightfull = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

Для получения размеров видимой части окна
document.documentElement.clientWidth


scrollBy(x,y) прокручивает страницу относительно текущих координат
scrollTo(pageX,pageY) прокручивает страницу к указанным координатам 



window.scrollTo(0,100000)
document.scrollingElement.scrollTop = 38888
window.scroll(0,1000)
scrollBy(0,[i]+10)

t.classList.toggle('jhjhjh');
t.classList.add('jhjhjh');
t.classList.remove('jhjhjh');
t.classList.contains("jhjhjh") true/false


scroll(0,10000)

scrollbars

document.body.setAttribute("onscroll",'sc()')


/*replace*/

var myStr = "helo yo luser";

myStr.replace("yo","yo not");

myStr = myStr.replace("yo","yo not");

/*split*/
myStr.split(" ")
(4) ["helo", "yo", "not", "luser"]


myStr[2]
"l"

Boolean(2)
true


Boolean(undefined)
false
Boolean(null)
false
Boolean(0)
false
Boolean(NaN)
false
Boolean("")
false


// если переменная не пустая то значение истенное 

var s;

if (s){console.log("yes")}
undefined

s = "str";

if (s){console.log("yes")}
yes





var i

for (i = 10; i--;){console.log(i)}


var i = 10

while(i--){ console.log(i) }
