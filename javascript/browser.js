var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


if(isMobile.any()){
//действие, которое нужно сделать, если браузер мобильный
}

if(isMobile.iOS()){
//действие, которое нужно сделать, если браузер iOS
}



            function getInternetExplorerVersion()
            {
                var rv = -1;
                if (navigator.appName == 'Microsoft Internet Explorer')
                {
                    var ua = navigator.userAgent;
                    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                    if (re.exec(ua) != null)
                        rv = parseFloat( RegExp.$1 );
                }
                else if (navigator.appName == 'Netscape')
                {
                    var ua = navigator.userAgent;
                    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                    if (re.exec(ua) != null)
                        rv = parseFloat( RegExp.$1 );
                }
                return rv;
            }
            if(getInternetExplorerVersion()!==-1 || navigator.userAgent.match(/Edge/i) != null){
                jQuery(function($) {
                    if (!Modernizr.touch) {
                        $.srSmoothscroll({
                            ease: 'easeOutQuart'
                        });
                    }
                });

            }



// scipt.js
    

    if (navigator.userAgent.match(/Edge/i) != null){
        $scrollEl = $('body');
    }
