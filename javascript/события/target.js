
http://javascript.ru/tutorial/events/properties

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<style>
		
		#test{
			width: 300px;
			height: 300px;
			background: #000;
			transition: 0.4s;
		}
		.test{
			width: 300px;
			height: 300px;
			background: #000;
			transition: 0.4s;
			margin: 10px;
		}

		/*script interaction*/
		.foo{
			width: 400px !important;
			height: 400px !important;
			background: red !important;
		}
	</style>
	
	<!-- div id test and add dynamic class toggle -> foo -->
	<div id="test"></div>
	
	<div class="test"></div>
	<div class="test"></div>
	
	<script>

	var h = document.getElementsByClassName("test");
	h[0].onclick = function(e){
			
			this.classList.toggle("foo");
			e.stopPropagation();
			// test.classList.remove("foo");
			
		}
		
		// test.onclick = function(e){
		// 	this.classList.toggle("foo");
		// 	e.stopPropagation();
		// 	  if (e.target != test) {
  //   test.classList.toggle('foo');
  // }
			
		// }


// test.onclick = function(e) {
//   e.stopPropagation();
//   test.classList.add("foo");
// }

// document.body.onclick = function() {
//   test.classList.remove("foo");
// }

// document.addEventListener('click', listener, true);


test.parentElement.addEventListener("click",(e)=>{
	// e.stopPropagation();
	// e.preventDefault();
	// event.preventDefault();
	e = e.target;
	while(e)
		if (e == test)
			return
		else
			e = e.parentNode;
	test.classList.remove("foo");
});

test.addEventListener("click",function(t){
	// event.relatedTarget;
	// if () {}

	// t = event.target ||event.srcElement;
	// alert(t.className);

	this.classList.toggle("foo")
});


// test.parentNode.addEventListener("click",function(t){
// 	// event.relatedTarget;
// 	// if () {}

// 	// t = event.target ||event.srcElement;
// 	// alert(t.className);

// 	test.classList.remove("foo");
// });

// document.body.parentElement.onclick = function(e){
// 	// e = e.target;
// 	// e.stopPropagation();
// 	// e.preventDefault();
// 	// e.relatedTarget;
// 	if (test.className == "foo") {
// 			alert("true")
// 		test.classList.remove("foo")
// 	}
// }


// document.addEventListener("click",(e)=>{
// 	e.preventDefault();
// 	e = e.target;
// 	while(e)
// 		if (e == test)
// 			return
// 		else
// 			e = e.parentNode;
// 	test.classList.remove("foo");
// });

// test.addEventListener("click",function(){
// 	this.classList.add("foo");
// });


	</script>









</body>
</html>
