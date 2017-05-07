
	<!-- jqwery -->
	<script src="jquery-3.1.1.min.js"></script>

<script>
	// метод 2 *******************************************************
	

//******************************************** done
$(document).ready(function (){


$("#done").bind("click", function(){
	$.ajax({
		url: "check.php",
		type: "POST",
				data: ({name: $("#input-done").val()}), //ввод данных
				dataTayp: "html",
				beforeSend:function(){
					$("#infdo").append ("<i style=\"position: absolute;color:white;\" class=\"fa fa-refresh fa-spin fa-3x fa-fw\" id=\"load\"></i>"
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