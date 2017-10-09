<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Project</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
	<style>
	#page{
		width:100%;
		background:#dec0de;
	}

	#map_canvas, #map_canvas_2{
		width:100%;
		height:500px;
		margin:0 auto;
	}
</style>
<div id="page">
	<div class="gMap-holder" id="map_canvas"></div>
</div>

<div id="page_2">
	<div class="gMap-holder" id="map_canvas_2"></div>
</div>

</body>

<script type="text/javascript">
    function loadScript() {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "http://maps.googleapis.com/maps/api/js?sensor=true&callback=initializeMap";
      document.body.appendChild(script);
    }
    if (window.addEventListener) window.addEventListener("load", loadScript, false);
    else if (window.attachEvent) window.attachEvent("onload", loadScript);
    function initializeMap(){
      var myLatlng = new google.maps.LatLng(56.7342973, 37.1636543);
      var uluru = {lat: 56.7332973, lng: 37.1759543};
      var myOptions = {
        zoom: 15,
        scrollwheel: false,
        center: uluru,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_LEFT
        }
      };
      var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
      var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions);

      var markerImage = new google.maps.MarkerImage(
        'images/pointMaps.png',
        new google.maps.Size(42,61)
        );
      var markerImageHover = new google.maps.MarkerImage(
        'images/pointMaps.png',
        new google.maps.Size(42,61)
        );

      var marker = new google.maps.Marker({
        icon: markerImage,
        position: myLatlng,
        map: map,
        title:"Hello World!"
      });

      var content = document.createElement('div');
      content.innerHTML = "<strong>Hello world</strong> + JS ^_^";
      var infowindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });

      google.maps.event.addListener(marker, 'mouseover', function() {
        marker.setIcon(markerImageHover);
      });

      google.maps.event.addListener(marker, 'mouseout', function() {
        marker.setIcon(markerImage);
      });
    }
</script>

</html>

