var nav =document.getElementsByClassName('navbar-wrapper')[0]
document.body.setAttribute("onscroll",'sc()')
function sc(){if(window.pageYOffset > 550){nav.style.position = "fixed"}else{nav.style.position = ""} }
undefined



var doc = document;


$(window).load(function() {
setTimeout(function() {
  // $('#preloader').fadeOut('slow', function() {});
  $('#preloader').fadeOut('slow', function() {});
}, 200);


    $(doc).on('scroll',function () {


        // var winTop = window.pageYOffset || document.documentElement.scrollTop;
            // return window.pageYOffset || document.documentElement.scrollTop;

            console.log(window.pageYOffset || document.documentElement.scrollTop)

            if (window.pageYOffset || document.documentElement.scrollTop > 0) {

                    // $( "header" ).addClass(function() {
                      $( 'header' ).css({
                        // top: '300px',
                        "padding": "0px",
                        'transition': '.5s'
                      }, 500, function() {
                        // Animation complete.
                      });
                    // });
            }

            // var save = window.pageYOffset || document.documentElement.scrollTop;

            else if (window.pageYOffset || document.documentElement.scrollTop === 0){
                      $( 'header' ).css({
                        // top: '300px',
                        "padding": "50px 0px",
                        'transition': '.5s'
                        
                      }, 500, function() {
                        // Animation complete.
                      });
            }
    })



});
