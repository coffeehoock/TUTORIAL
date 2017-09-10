
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  


<header>
<div test>1</div>
<div test>2</div>
<div test>3</div>
<div test>4</div>
<div test>5</div>
<div test>6</div>
  
</header>

<style>
  header{
    width: 500px;
    height: 300px;
    background: blue;
  }
  [Test]{
    width: 100%;
    height: 100%;
    background: #a8a8a8;
    margin: 20px;
    transition: 0.3s;
  }
  .foo{
    background: red !important;
    width: 200px;
    height: 200px;
    content: "hrllo";
  }

  .foo:after {
    content: "hello";
    display: table;
    clear: both;
    width: 100%;
    height: 10px;
    background: #e74c3c;
</style>

<script>

var result = [];

function findEl(){
    
    elems = document.getElementsByTagName( '*' );

for( var i =0, elem; elem = elems[ i++ ]; ) {
    if ( elem.getAttribute( 'test') == "" ) {
        result[ result.length ] = elem;
    }
  }
}
findEl();

for (var i = 0; i < result.length; i++){

   // result[i].setAttribute("test", i);
   result[i].onclick = function(){
    // alert("элемент №" + this.getAttribute("test") + " " + "Width " + this.clientWidth + "Height " + this.clientHeight)

      // if (this.style.background != 'red') {this.style.background = 'red'};
      this.classList.toggle("foo");

 }
}
  



</script>
</body>
</html>
