$(document).ready(function(){
//-------------------------
/*
*  @Cache------------------
*/
var margin,
    width,
    height;

var viz = $('.vizitka');
var i = 0;
//-------------------------

// viz.find('img').stop().css({
//     width:'0px',
//     height: height +'px',
//     marginLeft: margin +'px',
//     // opacity:'0.5'
//   });


var autoassignment = function(f){

        this.f = f || 0;

        while(f > -viz.length){

              var vizOnly = $(viz.get( f ));
              var b = vizOnly.children('img');

              margin  = $(b.get(0)).width()/2;
              width   = $(b.get(0)).width();
              height  = $(b.get(0)).height();

              // mouseover ________________________________
              $(b.get(0)).mouseover(function(callback){

                          var self = $(this);

                          self.stop().animate({

                                  width:'0px',
                                  height: height + 'px',
                                  marginLeft: margin +'px',
                                  opacity:'0.5'

                          },{duration:500});

                          window.setTimeout(function() {

                                        self.stop().animate({

                                                width: width + 'px',
                                                height: height + 'px',
                                                marginLeft: '0px',
                                                opacity: '1'

                                          },{duration:500});

                          },500);
              });

              // mouseout ________________________________
              $(b.get(1)).mouseout(function(callback){

                          var self = $(this);

                          self.stop().animate({

                                  width:'0px',
                                  height: height +'px',
                                  marginLeft: margin +'px',
                                  opacity:'0.5'

                          },{duration:500});

                          window.setTimeout(function() {

                                      self.stop().animate({

                                              width: width + 'px',
                                              height: height + 'px',
                                              marginLeft: '0px',
                                              opacity:'1'

                                      },{duration:500});

                          },500);
              });

              // $(b.get(1)).stop().css({
              //     width:'0px',
              //     height: height +'px',
              //     marginLeft: margin +'px',
              //     opacity:'0.5'
              //   });

          f--;
        }
  };

  autoassignment( i );

}); //document ready
