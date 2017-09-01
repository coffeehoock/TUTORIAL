
//    Cache
//=========================
var doc = document;
var BGbuttonType = "#e7e7e7";
var BGbuttonTypeTagging = "#c8c7c6";
//=========================

var input = doc.getElementsByTagName("input");

// запрет на ввод букв в инпут
function validate(inp) {

	inp.value = inp.value
		.replace(/[^\d.]*/g, '')
		.replace(/([.])[.]+/g, '$1')
		.replace(/^[^\d]*(\d+([.]\d{0,5})?).*$/g, '$1');
}

					//=== VARS ===
//============================================================
var num = doc.querySelectorAll('input[name="usernum"]');

var buttonUser = doc.querySelectorAll('.Selection-type_user');
var buttonType = doc.querySelectorAll('.Selection_type');
// ----------------------------------------------------------------
var typeInner = doc.querySelectorAll('input[name="type_inner"]');
var typeInner1 = doc.querySelectorAll('input[name="type_inner-1"]');
var typeInner2 = doc.querySelectorAll('input[name="type_inner-2"]');
var typeInner3 = doc.querySelectorAll('input[name="type_inner-3"]');
var typeInner4 = doc.querySelectorAll('input[name="type_inner-4"]');

// var calculateButton = doc.querySelector('#calculate-button');

var result = doc.querySelectorAll('.result');
// ===========================================================

function tagging(sels){
	var i = 0;

	while (i < buttonUser.length) {
		buttonUser[i].style.background = BGbuttonType; 
		// buttonUser[i].stopPropagation()
		i++;

	}

	sels.style.background = BGbuttonTypeTagging;
}


buttonUser[0].onclick = function() {
	var i = 1;

	while (i < buttonType.length) {
		buttonType[i].style.display = 'none';
		buttonType[i].style.background = BGbuttonType; 
		i++;
	}
				buttonType[0].style.display = 'block';
				typeInner4reset();
				tagging(this);
				g1 = 0;
				g2 = 0;
				g3 = 0;

				b4 = 0;
				b5 = 0;
				
				v4 = 0;
				v5 = 0;

}

buttonUser[1].onclick = function() {
	var i = 1;

	while (i < buttonType.length) {
		buttonType[i].style.display = 'none'
		i++;
	}
				buttonType[0].style.display = 'block';
				buttonType[1].style.display = 'block';
				typeInner4reset();
				tagging(this);
				
				g1 = 0;
				g2 = 0;
				g3 = 0;

				a1 = 0;
				a2 = 0;
				a3 = 0;

				v4 = 0;
				v5 = 0;

}

buttonUser[2].onclick = function() {
	var i = 1;

	while (i < buttonType.length) {
		buttonType[i].style.display = 'none'
		i++;
	}
				buttonType[0].style.display = 'block';
				buttonType[2].style.display = 'block';
				typeInner4reset();
				tagging(this);
				g1 = 0;
				g2 = 0;
				g3 = 0;
				
				a1 = 0;
				a2 = 0;
				a3 = 0;

}

buttonUser[3].onclick = function() {
	var i = 0;

	while (i < buttonType.length) {
		buttonType[i].style.display = 'none';
		i++;
	}
				buttonType[3].style.display = 'block';
				typeInner1reset();
				typeInner2reset();
				typeInner3reset();
				tagging(this);

				a1 = 0;
				a2 = 0;
				a3 = 0;
				b4 = 0;
				b5 = 0;
				v4 = 0;
				v5 = 0;
}
////////////////////////////////

/*
 * прямоугольное **************************************** 
 */
var a1 = 0;
typeInner1[0].onkeyup = function(){
	console.log('onkeyup');
	validate(this);
	a1 = parseFloat(typeInner1[0].value); // ширина помещения
	if (typeInner1[0].value === "") a1 = 0;
}

var a2 = 0;
typeInner1[1].onkeyup = function(){
	validate(this);
	a2 = parseFloat(typeInner1[1].value); // длина помещения
	console.log('onkeyup');
	if (typeInner1[1].value === "") a2 = 0;
}
var a3 = 0;
typeInner1[2].onkeyup = function(){
	validate(this);
	a3 = parseFloat(typeInner1[2].value); // высота помещения
	console.log('onkeyup');
	if (typeInner1[2].value === "") a3 = 0;
}

/*
 * прямоугольное с углом *********************************
 */
var b4 = 0;
typeInner2[0].onkeyup = function(){
	validate(this);
	b4 = parseFloat(typeInner2[0].value); // длина выступающего угла
	console.log('onkeyup');
	if (typeInner2[0].value === "") b4 = 0;

}

var b5 = 0;
typeInner2[1].onkeyup = function(){
	validate(this);
	b5 = parseFloat(typeInner2[1].value); // ширина выступающего угла
	console.log('onkeyup');
	if (typeInner2[1].value === "") b5 = 0;
}
/*
 * прямоугольное с выступающим элементом типо колонны ***************
 */
var v4 = 0;
typeInner3[0].onkeyup = function(){
	validate(this); 
	v4 = parseFloat(typeInner3[0].value); // глубина колонны
	console.log('onkeyup');
	if (typeInner3[0].value === "") v4 = 0;
}


var v5 = 0;
typeInner3[1].onkeyup = function(){
	validate(this);
	v5 = parseFloat(typeInner3[1].value); // ширина колонны
	console.log('onkeyup');
	if (typeInner3[1].value === "") v5 = 0;
}
/*
 * нестандартное ***************************************************
 */
var g1 = 0;
typeInner4[0].onkeyup = function(){
	validate(this);
	g1 = parseFloat(typeInner4[0].value); // количество стен в помещении
	console.log('onkeyup');
	if (typeInner4[0].value === "") g1 = 0;
}

var g2 = 0;
typeInner4[1].onkeyup = function(){
	validate(this);
	g2 = parseFloat(typeInner4[1].value); // длина каждой стены по отделности
	console.log('onkeyup');
	if (typeInner4[1].value === "") g2 = 0;
}
var g3 = 0;
typeInner4[2].onkeyup = function(){
	validate(this);
	g3 = parseFloat(typeInner4[2].value); // высота помещения
	console.log('onkeyup');
	if (typeInner4[2].value === "") g3 = 0;
}
var nonStandard = (g3 * g2) * g1;
/*
 * размеры проемов *************************************************
 */
var h1 = 0;
typeInner[0].onkeyup = function(){
	validate(this);
	h1 = parseFloat(typeInner[0].value); // количество проемов
	console.log('onkeyup');
	if (typeInner[0].value === "") h1 = 0;
}

var h2 = 0;
typeInner[1].onkeyup = function(){
	validate(this);
	h2 = parseFloat(typeInner[1].value); // высота окна
	console.log('onkeyup');
	if (typeInner[1].value === "") h2 = 0;
}

var h3 = 0;
typeInner[2].onkeyup = function(){
	validate(this);
	h3 = parseFloat(typeInner[2].value); // ширина окна
	console.log('onkeyup');
	if (typeInner[2].value === "") h3 = 0;
}

var h4 = 0;
typeInner[3].onkeyup = function(){
	validate(this);
	h4 = parseFloat(typeInner[3].value); // высота балконной двери
	console.log('onkeyup');
	if (typeInner[3].value === "") h4 = 0;
}

var h5 = 0;
typeInner[4].onkeyup = function(){
	validate(this);
	h5 = parseFloat(typeInner[4].value); // ширина балконной двери
	console.log('onkeyup');
	if (typeInner1[4].value === "") h5 = 0;
}


// Awindow
var h6 = 0;
typeInner[5].onkeyup = function(){
	validate(this);
	h6 = parseFloat(typeInner[5].value); // высота окна
	console.log('onkeyup');
	if (typeInner[5].value === "") h6 = 0;
}

var h7 = 0;
typeInner[6].onkeyup = function(){
	validate(this);
	h7 = parseFloat(typeInner[6].value); // ширина окна
	console.log('onkeyup');
	if (typeInner[6].value === "") h7 = 0;
}
var Awindow = h6 * h7;

// Door
var h8 = 0;
typeInner[7].onkeyup = function(){
	validate(this);
	h8 = parseFloat(typeInner[7].value); // количество проемов
	console.log('onkeyup');
	if (typeInner[7].value === "") h8 = 0;
}

var h9 = 0;
typeInner[8].onkeyup = function(){
	validate(this);
	h9 = parseFloat(typeInner[8].value); // высота двери
	console.log('onkeyup');
	if (typeInner[8].value === "") h9 = 0;
}

var h10 = 0;
typeInner[9].onkeyup = function(){
	validate(this);
	h10 = parseFloat(typeInner[9].value);// ширина двери
	console.log('onkeyup');
	if (typeInner[9].value === "") h10 = 0;
}

var Door = (h10 * h9) * h8;

// calculateButton.onclick = function calculate() {
function calculate() {
    // расчет длинна откосов
	result[0].innerHTML = (h2 *2) + h3 + ' m2';
	
	// длинна подоконников
	if (h3 != 0) {
		result[1].innerHTML = h3 + 100 + ' m2';
		
	}else {
		result[1].innerHTML = 0 + ' m2';
	}
	
	// площадь проемов
	result[2].innerHTML = (h9 * h10) + (h2 * h3) + ' m2';
	
	// периметр помещения
	result[3].innerHTML = (a2 * 2) + (a1 * 2) + ' m2'; // ???????

	// площадь пола
	result[4].innerHTML = a2 * a1 + ' m2';

	// площадь стен
	result[5].innerHTML = (((a2 * 2) + (a1 * 2) ) * a3) - ((h9 * h10) + (h2 * h3)) + ' m2';

};


// сбросс параметров импут

function typeInnerreset(){
	var i = 0;
	while(i < typeInner.length){
		typeInner[i].value = "";
		i++;
	}
}

function typeInner1reset(){
	var i = 0;
	while(i < typeInner1.length){
		typeInner1[i].value = "";
		i++;
	}
}

function typeInner2reset(){
	var i = 0;
	while(i < typeInner2.length){
		typeInner2[i].value = "";
		i++;
	}
}

function typeInner3reset(){
	var i = 0;
	while(i < typeInner3.length){
		typeInner3[i].value = "";
		i++;
	}
}

function typeInner4reset(){
	var i = 0;
	while(i < typeInner4.length){
		typeInner4[i].value = "";
		i++;
	}
}

function resoutput(){

	var i = 0;
		while(i < result.length){
			result[i].innerHTML = '0';
			i++;
		}
}
	

var reset = function(){
	// сбросс параметров vars
	a1 = 0;
	a2 = 0;
	a3 = 0;
	b4 = 0;
	b5 = 0;
	v4 = 0;
	v5 = 0;
	g1 = 0;
	g2 = 0;
	g3 = 0;
	h1 = 0;
	h2 = 0;
	h3 = 0;
	h4 = 0;
	h5 = 0;
	h6 = 0;
	h7 = 0;
	h8 = 0;
	h9 = 0;
	h10 = 0;

	typeInnerreset();
	typeInner1reset();
	typeInner2reset();
	typeInner3reset();
	typeInner4reset();
	resoutput();


}

window.onload = reset();

var popup = doc.getElementById("popup");



function redirectPopup() {


    // jQuery(popup).css({'display' : 'block'});
    jQuery(popup).show(300).animate({opacity:1},300);
    window.open(e.target.href, '_blank');

    // jQuery(popup).show( 1000 );
}

function noPopup(){

    jQuery(popup).hide(300).animate({opacity:0},300);
}

    // $( "#popup" ).animate({
    //     opacity: 0.25,
    //     left: "+=50",
    //     height: "toggle"
    // }, 5000, function() {
    //     // Animation complete.
    // });

// function loginPopup(){
// 	doc.body.innerHTML = "<?php wp_register(); ?>";
// }



// jQuery('#aj').click(function(e){
// 		e.preventDefault();
// 		$.ajax(
// 			url: ''
// 	);
// });


jQuery('#aj').click(function(e){
    e.preventDefault();
	$.ajax({
        type: "GET",
        url: window.wp_data.ajax_url,
        // url: "http://smeta-calc.ma-emotion.ru/",
        data: {
            action : 'do_something'
        },
        success: function (response) {
            return ('AJAX response : ',response);
        }
    });
});