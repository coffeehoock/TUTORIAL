jQuery('#calculate').mousedown(function (e) {
	e.preventDefault()
	jQuery(this).css({
		'background': '#333333',
		'color': 'white'
	});
});
jQuery('#reset').mousedown(function (e) {
	e.preventDefault()
	jQuery(this).css({
		'background': '#333333',
		'color': 'white'
	});
});

jQuery('#calculate').mouseup(function (e) {
	e.preventDefault()
	jQuery(this).css({
		'background': '#c1c0c0',
		'color': 'currentColor'
	});
});
jQuery('#reset').mouseup(function (e) {
	e.preventDefault()
	jQuery(this).css({
		'background': '#c1c0c0',
		'color': 'currentColor'
	});
});


// запрет на ввод букв в инпут
function validate(inp) {

	inp.value = inp.value
		.replace(/[^\d.]*/g, '')
		.replace(/([.])[.]+/g, '$1')
		.replace(/^[^\d]*(\d+([.]\d{0,5})?).*$/g, '$1');
};

jQuery(function ($) {
	$('#reset').click(function (e) {
		e.preventDefault();
		$("#data-input")[0].reset();
		$("#type-user")[0].reset();
	})
});
jQuery('#type-user input').keyup(function(){
	validate(this);
});


jQuery('#data-input input').keyup(function(){
	validate(this);
});

// 'background': 'rgb(255, 255, 255)',
// 'color': 'rgb(125, 125, 125)'

//........................-------------------------------------------
jQuery('#pramougolnoe').click(function () {
	jQuery('#pramougolnoe_s_uglom').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery('#pramougolnoe_s_vistup-colonnoy').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery('#nestandartnoe').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery(this).css({
		'background': '#464646',
		'color': '#c8cacc'
	});

	jQuery('#type-cont-1').css({'display': 'block'});
	jQuery('#type-cont-2').css({'display': 'none'});
	jQuery('#type-cont-3').css({'display': 'none'});
	jQuery('#type-cont-4').css({'display': 'none'});
});

jQuery('#pramougolnoe_s_uglom').click(function () {
	jQuery('#pramougolnoe').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery('#pramougolnoe_s_vistup-colonnoy').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery('#nestandartnoe').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery(this).css({
		'background': '#464646',
		'color': '#c8cacc'
	});
	jQuery('#type-cont-1').css({'display': 'block'});
	jQuery('#type-cont-2').css({'display': 'block'});
	jQuery('#type-cont-3').css({'display': 'none'});
	jQuery('#type-cont-4').css({'display': 'none'});
});

jQuery('#pramougolnoe_s_vistup-colonnoy').click(function () {
	jQuery('#pramougolnoe_s_uglom').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery('#pramougolnoe').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery('#nestandartnoe').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery(this).css({
		'background': '#464646',
		'color': '#c8cacc'
	});
	jQuery('#type-cont-1').css({'display': 'block'});
	jQuery('#type-cont-3').css({'display': 'block'});
	jQuery('#type-cont-2').css({'display': 'none'});
	jQuery('#type-cont-4').css({'display': 'none'});
});


jQuery('#nestandartnoe').click(function () {
	jQuery('#pramougolnoe_s_uglom').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery('#pramougolnoe_s_vistup-colonnoy').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery('#pramougolnoe').css({'background': 'rgb(243, 241, 241)', 'color': 'rgb(125, 125, 125)'});
	jQuery(this).css({
		'background': '#464646',
		'color': '#c8cacc'
	});

	jQuery('#type-cont-1').css({'display': 'none'});
	jQuery('#type-cont-2').css({'display': 'none'});
	jQuery('#type-cont-3').css({'display': 'none'});
	jQuery('#type-cont-4').css({'display': 'block'});
});



// var reset = function(){
// 	// сбросс параметров vars
//
// 	h10 = 0;
//
// 	typeInnerreset();
// }
//
// window.onload = reset();




function redirectPopup() {

    jQuery('#popup').show(300).animate({opacity:1},300);
}

function noPopup(){

    jQuery('#popup').hide(300).animate({opacity:0},300);
}

// jQuery('#my-button').click(function (e) {
// 	e.preventDefault();
// 	calculate();
// })

jQuery('#calculate').click(function(e){
	e.preventDefault();

	jQuery.ajax({
        type: "GET",
				url: window.wp_data.ajax_url,

				data: {
		            action : 'my',

		      // тип помешения
					shirinaPomeseniya     : parseFloat(jQuery('#shirina-pomeseniya').val()),
					dlinnaPomeseniya      : parseFloat(jQuery('#dlinna-pomeseniya').val()),
					visotaPomeseniya      : parseFloat(jQuery('#visota-pomeseniya').val()),

					dlinnaUgla            : parseFloat(jQuery('#dlinna-ugla').val()),
					shirinaUgla           : parseFloat(jQuery('#shirina-ugla').val()),

					gubinaKolonniy        : parseFloat(jQuery('#gubina-kolonniy').val()),
					sirinaKolonniy        : parseFloat(jQuery('#sirina-kolonniy').val()),

					kolihestvoSten        : parseFloat(jQuery('#kolihestvo-sten').val()),
					dlinnaSten            : parseFloat(jQuery('#dlinna-sten').val()),
					visotaPomesenia       : parseFloat(jQuery('#visota-pomesenia').val()),

					// Размеры проемов //

					// оконный проем
					kolihestvoProemov     : parseFloat(jQuery('#kolihestvo-proemov').val()),
					visotaOkna            : parseFloat(jQuery('#visota-okna').val()),
					sirinaOkna            : parseFloat(jQuery('#sirina-okna').val()),
					// Балконный блок
					visotaBalkonDveri     : parseFloat(jQuery('#visota-balkon-dveri').val()),
					sirinaBalkkonDveri    : parseFloat(jQuery('#sirina-balkkon-dveri').val()),
					visotaBalkonOkna      : parseFloat(jQuery('#visota-balkon-okna').val()),
					sirinaBalkonOkna      : parseFloat(jQuery('#sirina-balkon-okna').val()),
					// Дверной проем
					kolihestvoDverProemov : parseFloat(jQuery('#kolihestvo-dver-proemov').val()),
					visotaDveri           : parseFloat(jQuery('#visota-dveri').val()),
					shirinaDveri          : parseFloat(jQuery('#shirina-dveri').val())

		        },

        success: function (response) {

			if (response != 'not_reg') {
				var results = JSON.parse(response);

				// resyltat
				jQuery('#dlinna-otkosov + .result').html(results.dlinna_otkosov + ' mm');
				jQuery('#dlinna-podokonnikov + .result').html(results.dlinna_podokonnikov + ' mm');
				jQuery('#ploshad-proemov + .result').html(results.ploshad_proemov + ' mm');
				jQuery('#perimetor-pomesenia + .result').html(results.perimetor_pomesenia + ' mm');
				jQuery('#ploshad-pola + .result').html(results.ploshad_pola + ' mm');
				jQuery('#ploshad-sten + .result').html(results.ploshad_sten + ' mm');

			} else {
				redirectPopup();
			}
        }
    });
});

