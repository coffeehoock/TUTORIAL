function showPage(objThis, objPageHover) {
	if (showTimer) {
		clearTimeout(showTimer);
	}
	$('.content-tabs .tab').removeClass('select');
	objThis.addClass('select');
	$('#content-wrapper .border-left').addClass('select');
	$('#content-wrapper .border-top').addClass('select');
	$('#jquery-content .jquery-page').hide();
	$('#jquery-content .jquery-page[id='+objPageHover+']').show();
	showTimer = null
}

function hidePage(objCurrentTab, objCurrentPage) {
	if (showTimer) {
		clearTimeout(showTimer);
	}
	$('.content-tabs .tab').removeClass('select');
	$('#content-wrapper .border-left').removeClass('select');
	$('#content-wrapper .border-top').removeClass('select');
	if (objCurrentTab.length > 0) {
		$(objCurrentTab).addClass('select');
		$('#content-wrapper .border-left').addClass('select');
		$('#content-wrapper .border-top').addClass('select');
	}
	$('#jquery-content .jquery-page').hide();
	objCurrentPage.show();
	showTimer = null;
}

function addSection(id) {
    $.ajax({
        url: "/inc/addSection.php",
        type: "POST",
        data: "id="+id,
        success: function(response) {
                $("div.content-column.catalog-items").append(response);

        },
        error: function(response) {
            console.log("Ошибка"+response);
        }
    });
}

// // my test  ajax response
// var myvar = "/catalog/nasosy_irtysh/pogruzhnye_drenazhnye_nasosy_irtysh_pd/";
//
// function mytest() {
//
//     $.ajax({
//         url: "/catalog/nasosy_irtysh/pogruzhnye_drenazhnye_nasosy_irtysh_pd/",
//         type: "POST",
//         data: "id=",
//         success: function(response) {
//             $("div.content-column.catalog-items").html(response);
//
//         },
//         error: function(response) {
//             console.log("Ошибка"+response);
//         }
//     });
// }

function addSection(id) {
    $.ajax({
        url: "/inc/addSection.php",
        type: "POST",
        data: "id="+id,
        success: function(response) {
            $("div.content-column.catalog-items").append(response);

        },
        error: function(response) {
            console.log("Ошибка"+response);
        }
    });
}
$(document).ready(function(){
	
    $('#catalog_top_index').flexslider({
        selector: ".slides .item",  
        animation: "slide",
        animationLoop: false,
        controlNav: false,
        itemWidth: 160,
        itemMargin: 10,
        minItems: 5,
        maxItems: 5
    });

    $('a[href=#]').click(function(){
		return false;
	});
    
    $('.header-search input[type=text]').focus(function(){
		$(this).val('');
	});
    
    $("a.fancy-img").fancybox({
        'overlayOpacity' : '0.0',
        'overlayColor' : '#000',
        'centerOnScroll' : true,
        'padding' : 3
    });
    
    /**
     * POPUP-MENU
     */ 
     
    $('ul.main-menu li').hover(function(){  
        $(this).find('.popup-menu').css('left', -($(this).find('.popup-menu').innerWidth() - $(this).innerWidth())/2);
        $(this).find('.popup-menu').fadeIn(150);   
    }, function(){    
        $(this).find('.popup-menu').fadeOut(150);   
    });
    
	/**
	 * TABS
	 */
	 
	objCurrentPage = $('#jquery-content .jquery-page:visible');
	objCurrentTab = $('.content-tabs .tab.select');
	showTimer = null;
	
	/*$('.content-tabs .tab').hover(function(){
		objThis = $(this)
		objPageHover = objThis.attr('rel')
		showTimer = setTimeout("showPage(objThis, objPageHover)", 200)

        $('.close-tab-button').click(function(){
            hidePage(objCurrentTab, objCurrentPage)
        })
        
        
	}, function(){
		if ($('#content-wrapper #' + objPageHover + ':visible').length == 0) {		
			hidePage(objCurrentTab, objCurrentPage)
		} else {
			$('#content-wrapper').hover(function(){
				
			}, function(){
				
				if($('select#category:focus').length) {
				
				} else {			
					hidePage(objCurrentTab, objCurrentPage)
				}
			})		
		}	
	})*/
	
	$('.content-tabs .tab').click(function(){
		if($(this).is('.select')){
			hidePage(objCurrentTab, objCurrentPage);
		}else{
			objThis = $(this);
			objPageHover = objThis.attr('rel');
			showTimer = setTimeout("showPage(objThis, objPageHover)", 200);
		}

        /*$(this).click(function(){
            hidePage(objCurrentTab, objCurrentPage)
        })*/
	});
	/**
	 * CATALOG
	 */
	 
	/*$('.catalog-menu ul li').hover(function(event){
                event.stopPropagation();
		obj = $(this);
		curCatalogHover = obj.attr('rel');
                if(!obj.hasClass('subsectionItem')){
                    $('div.sectionLinkWrapper').removeClass('sectionSelect')
                }else{
                    $('.subsectionItem').removeClass('subsectionSelect');
                    obj.addClass('subsectionSelect')
                }
                obj.find('div.sectionLinkWrapper').addClass('sectionSelect');
                $('.catalog-items div.items').fadeOut("6000");
                if($("div.items[rel='"+curCatalogHover+"']").attr("rel") === undefined){
                    $.ajax({
                        url: "/inc/addSection.php", 
                        type: "POST", 
                        data: "id="+curCatalogHover, 
                        success: function(response) { 
                            if($("div.items[rel='"+curCatalogHover+"']").attr("rel") === undefined){
                                $("div#catalog-inner-items").append(response);
                                $('div.items[rel='+curCatalogHover+']').fadeIn("6000");
                            }
                        },
                        error: function(response) { 
                            console.log("Ошибка"+response);
                        }
                    });
                }else{
                    $('.catalog-items div.items[rel='+curCatalogHover+']').fadeIn("6000");
                }
	}, function(){		
	});*/
        
    $('.catalog-menu ul li').on("click", function(){
        $('.subsectionItem').removeClass('subsectionSelect');
    });

    var adjustment = 0;

    function adjust() {
        adjustment++;
        if(adjustment === 2){
            $('.emptySection .sectionLinkWrapper a[href*="/catalog/"]').removeClass('active2');
            adjustment = 0;
        }

    }

    $('.catalog-menu>ul>li:has(ul)').on("click", function(event){
        // $('.catalog-menu>ul>li:has(ul)').children("ul").slideUp(1500);
        event.preventDefault();
        adjust();
        if(!$(this).hasClass('emptySection')) {
            if ($(this).hasClass('openSection')) {
                $(this).find(".subsectionList li.openSubSection ul").slideUp(1500);//hide
                $(this).find("ul li span.listArrow img").attr("src", '/img/arrow_down1.png');
                $(this).find(".subsectionList li.openSubSection").removeClass('openSubSection');
                $(this).find(".subsectionList li.openSubSection").css("padding-bottom", "2px");
                $("#content-wrapper div.content-column.catalog-items").css("display", "none");

                // подозрение на баг
                $("#content-wrapper div.content-column.catalog-main").css("display", "table-cell");
                $(this).children("ul").slideUp(1500);//hide

                $(this).find(".sectionLinkWrapper span.listArrow img").attr("src", '/img/arrow_down.png');
                $(this).removeClass('openSection');
                $(this).find('.sectionLinkWrapper').removeClass('sectionSelect');
            } else {
                $('.openSection').click();
                $(this).find('.sectionLinkWrapper').addClass('sectionSelect');
                $(this).children("ul").slideToggle(1500);//show

                $(this).find(".sectionLinkWrapper span.listArrow img").attr("src", '/img/arrow_up.png');
                $(this).addClass('openSection');
            }
        } else {
            $("#content-wrapper div.content-column.catalog-main").css("display", "table-cell");
        }
    });

    $('.subsectionList li:has(ul)').on("click", function(event){
        event.stopPropagation();
        if($(this).hasClass('openSubSection')) {
            $(this).children("ul").slideUp(1500);//hide
            $(this).find("span.listArrow img").attr("src", '/img/arrow_down1.png');
            $(this).removeClass('openSubSection');
            $(this).css("padding-bottom", "2px");
            $("#content-wrapper div.content-column.catalog-items").css("display", "none");
            $("#content-wrapper div.content-column.catalog-main").css("display", "table-cell");
            return false; // выключаем стандартное действие
        } else {
            $('.openSubSection').click();
            $(this).children("ul").slideToggle(1500);//show
            $(this).find("span.listArrow img").attr("src", '/img/arrow_up1.png');
            $(this).addClass('openSubSection');
            $(this).css("padding-bottom", "0");
            $("#content-wrapper div.content-column.catalog-main").css("display", "none");
            $("div.content-column.catalog-items .my-cat").css("display", "none");
            $("#content-wrapper div.content-column.catalog-items").css("display", "table-cell");
            var obj = $(this);
            var curCatalogHover = obj.attr('rel');
            $('.catalog-items div.items').fadeOut("6000");
            if($("div.items[rel='"+curCatalogHover+"']").attr("rel") === undefined){
                $.ajax({
                    url: "/inc/addSection.php",
                    type: "POST",
                    data: "id="+curCatalogHover,
                    success: function(response) {
                        if($("div.items[rel='"+curCatalogHover+"']").attr("rel") === undefined){
                            $("div#catalog-inner-items").append(response);
                            $('div.items[rel='+curCatalogHover+']').fadeIn("6000");
                            redo_cat_click();
                        }
                    },
                    error: function(response) {
                        console.log("Ошибка"+response);
                    }
                });
            }else{
                $('.catalog-items div.items[rel='+curCatalogHover+']').fadeIn("6000");
            }
            if ($("#catalog").length != 0) {
                $('html, body').animate({ scrollTop: $("#catalog").offset().top }, 500);
            }
        }
    });

    $('.emptySection .sectionLinkWrapper a[href*="/catalog/"]').on("click", function(event){
        event.stopPropagation();
        event.preventDefault();
        $('.emptySection .sectionLinkWrapper a[href*="/catalog/"]').removeClass('active2');
        $(this).addClass('active2');
        $('.openSection').click();
    });
/////////////////////////////////////////////////
//     var singleCategory = document.querySelectorAll('li.subsectionItem.emptySubSection');



    // $('li.subsectionItem.emptySubSection').on("click", function(event){
    //     // singleCategory[0].style.background = '#fb7b13';
    //     $(this).css({'background':'#fb7b13 !important'});
    // });

    $('.subsectionItem a[href="javascript:void(0);"]').on("click", function(){
        $('.emptySection .sectionLinkWrapper a[href*="/catalog/"]').removeClass('active2');

    });


    $('.subsectionItem.emptySubSection[rel=*] a').on("click", function(){
        $('.emptySection .sectionLinkWrapper a[href*="/catalog/"]').removeClass('active2');

    });


    function redo_cat_click() {
        // $ = jQuery;
        // моя функцыя
        $('#catalog a[href*="/catalog/"]:not(.has-click)').each(function () {
            $(this).addClass('has-click');
            $(this).click(function(event){
                event.stopPropagation();
                event.preventDefault();
                $(this).addClass('active2');

                $('.subsectionItem.active1').removeClass('active1');
                $('.subsectionItem');
                var href_tmp = $(this).attr("href");
                $('.subsectionItem:has(a[href="' + href_tmp + '"])').addClass('active1');
                $.ajax({
                    url: href_tmp,
                    type: "POST",
                    success: function(response) {
                        if ($("div.content-column.catalog-items .my-cat").length == 0) {
                            $("div.content-column.catalog-items").append('<div class="my-cat"></div>');
                            $("#content-wrapper div.content-column.catalog-items").css("display", "table-cell");
                        }
                        $("div.content-column.catalog-items .my-cat").html($(response).find('.content-block'));
                        $("div.content-column.catalog-items .my-cat").css("display", "block");
                        $("#content-wrapper div.content-column.catalog-main").css("display", "none");
                        $("#content-wrapper div.content-column.catalog-items div.items").css("display", "none");
                        $('html, body').animate({ scrollTop: $("#catalog").offset().top }, 500);
                        // исправление бага
                        $("#content-wrapper div.content-column.catalog-items").css("display", "table-cell");


                        // $('.emptySection .sectionLinkWrapper a[href*="/catalog/"]').removeClass('active2');

                        redo_cat_click();
                    },
                    error: function(response) {
                        console.log("Ошибка"+response);
                    }
                });
                // document.location.href=$(this).attr('href');
            });
        });
    }
    redo_cat_click();

    // $('.catalog-item').click(function(event) {
    //
    //     event.stopPropagation();
    //     event.preventDefault();
    //     $.ajax({
    //         url: $(this).attr("href"),
    //         type: "POST",
    //         success: function(response) {
    //             $("div.content-column.catalog-items").append($(response).find('.content-block'));
    //         },
    //         error: function(response) {
    //             console.log("Ошибка"+response);
    //         }
    //     });
    // });
    //
    // $('.catalog-item p a[href*="/catalog/"]').on("click", function(event) {
    //     event.stopPropagation();
    //     event.preventDefault();
    //     $.ajax({
    //         url: $(this).attr("href"),
    //         type: "POST",
    //         success: function(response) {
    //             $("div.content-column.catalog-items").append($(response).find('.content-block'));
    //         },
    //         error: function(response) {
    //             console.log("Ошибка"+response);
    //         }
    //     });
    // };





    /*$('.catalog-menu ul li:has(ul)').on("click", function(){
        $('.catalog-menu ul li:not([rel='+$(this).attr('rel')+']) ul').slideUp(1500) //hide
        $(this).children("ul").slideToggle(1500) //show
        //console.log($(this).find(".sectionLinkWrapper span.listArrow").html())
        if($(this).find(".sectionLinkWrapper span.listArrow img").attr("src") == '/img/arrow_down.png'){
            $(this).find(".sectionLinkWrapper span.listArrow img").attr("src", '/img/arrow_up.png')
        }else{
            $(this).find(".sectionLinkWrapper span.listArrow img").attr("src", '/img/arrow_down.png')
        }
    });*/
	
	/**
	 * UNIFORM
	 */
	 
	$("#content-wrapper input, #content-wrapper select,#content-wrapper textarea").uniform();
	
});

