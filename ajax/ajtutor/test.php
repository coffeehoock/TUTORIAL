<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>test</title>
	<!-- iconio -->
	<link rel="stylesheet" href="iconio/css/font-awesome.min.css">
	<!-- ****************************************************************** -->

	<!-- jqwery -->
	<script src="jquery-3.1.1.min.js"></script>
</head>
<body>

<!-- *********************************************** -->
<style>
	body{background:white;transition:1s}
	.loder{color: red}

	input[placeholder="yo set name"]::-webkit-input-placeholder{
		text-indent: 0px;
		transition: text-indent 0.4s ease;
		color: rgba(0, 139, 139, 0.45)
	}
	input[placeholder="yo set name"]:focus::-webkit-input-placeholder{
		text-indent: 500px;
		transition: text-indent 1.4s ease;
	}
	.conaener{
		width: 100%;
		text-align: center;
	}
	.conaener *{
		margin: 10px auto;
		padding: 10px;
	}
</style>
<!-- *********************************************** -->
<!-- *********************************************** -->
<!-- *********************************************** -->
<!-- *********************************************** -->
<!-- *********************************************** -->
<!-- *********************************************** -->
<!-- *********************************************** -->
<!-- *********************************************** -->
<!-- *********************************************** -->
<!-- *********************************************** -->
<script>
	// метод 1 *******************************************************

		function funcBefore(){
			$(".loder").append("<i style=\"color:white;\" class=\"fa fa-refresh fa-spin fa-3x fa-fw\" id=\"load\"></i> "
				+"<style>"
					+"body{background:black;transition:1s;}"+
				+"</style>"
				)
		};
		function funcSuccess(data){
			$(".loder").text (data);
		};

			// главная функцыя
$(document).ready(function (){
	$("#load").bind("click", function(){
	var admin = "administrator";
	var numbers = 110;

	$.ajax({
		url: "content.php",
		type: "POST",
		data: ({name: admin, number:numbers}), //ввод данных
		dataTayp: "html",
		beforeSend:funcBefore,
		success:funcSuccess
		});
	});
});
		
</script>	
<div class="conaener">
	<button id="load">loding</button>
<div class="loder"></div>
</div>
<!-- метод 1 ******************************************************* -->
	















	

<script>
	// метод 2 *******************************************************
	

$(document).ready(function (){


$("#done").bind("click", function(){
	$.ajax({
		url: "check.php",
		type: "POST",
				data: ({name: $("#input-done").val()}), //ввод данных
				dataTayp: "html",
				beforeSend:function(){
					$("#infdo").append ("<i style=\"color:white;\" class=\"fa fa-refresh fa-spin fa-3x fa-fw\" id=\"load\"></i>"
				+"<style>"
					+"body{background:black;transition:1s;}"+
				+"</style>");
				},
				success:function(data){
					if (data == "falid") {
						alert("этот логин занят")
					}else{
						$("#infdo").text (data);
					}
				}
		});
	});
});

</script>
<div class="conaener">
	<input type="search" placeholder="yo set name" id="input-done">
	<input type="button" value="готово" id="done">
	<div id="infdo">введите логин</div>
</div>
<!-- метод 2 ******************************************************* -->















	<script>
	// метод 3 *******************************************************

		$(document).ready (function(){
			$("select[name='cantry']").bind("change", function(){
					$("select[name='cyty']").empty();
						$.get("cantrychek.php",{ country: $("select[name='cantry']").val()}, function(data){
											data = JSON.parse(data);

											for(var x in data){

												$("select[name='cyty']").append($("<option value=" + x + ">" + data[x] + "</option>"));
												// $("select[name='cyty']").append($("<option value='" + x + "'>" + data[x] + "</option>"));

											}
				});
			}); 
		});
		
	</script>

<div class="conaener">
	
	<label>укажите страну</label>
	<select name="cantry">
		<option value="0" selected="selected"></option>
		<option value="1">америка</option>
		<option value="2">францыя</option>
	</select>

	<label>города</label>
	<select name="cyty">
		<option value="0"></option>
	</select>

</div>
<!-- метод 3 ******************************************************* -->


</body>
</html>