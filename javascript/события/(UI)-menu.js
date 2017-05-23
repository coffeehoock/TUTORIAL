https://www.w3schools.com/howto/howto_js_dropdown.asp


<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Pragma" content="no-cache">
  <title>menu</title>
</head> 
<style>
.container {
    overflow: hidden;
    background-color: #333;
    font-family: Arial;
}

.container a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.dropdown, .dropdown-2 {
    float: left;
    overflow: hidden;
}

.dropdown .dropbtn, .dropdown-2 .dropbtn-2 {
    cursor: pointer;
    font-size: 16px;    
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
}

.container a:hover, .dropdown:hover .dropbtn, .dropdown-2:hover .dropbtn-2 {
    background-color: red;
}

.dropdown-content, .dropdown-content-2 {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a, .dropdown-content-2 a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover, .dropdown-content-2 a:hover {
    background-color: #ddd;
}

.show {
    display: block;
}
</style>
<body>

<div class="container">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div class="dropdown">
    <button class="dropbtn" onclick="myFunction()">Dropdown</button>
    <div class="dropdown-content" id="myDropdown">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

    <div class="dropdown-2">
    <button class="dropbtn-2" onclick="myFunction2()">Dropdown</button>
    <div class="dropdown-content-2" id="myDropdown-2">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 

</div>

<h3>Dropdown Menu inside a Navigation Bar</h3>
<p>Click on the "Dropdown" link to see the dropdown menu.</p>

<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown-2").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
  if (!e.target.matches('.dropbtn-2')) {
    var myDropdown = document.getElementById("myDropdown-2");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}


</script>
</body>
</html>

