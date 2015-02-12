(function($) {
    $(function(){
        if ($(".gmap").length)
        {
            createMap();
        }
    });

    function createMap()
    {
        var location = new google.maps.LatLng(42.971760, -82.40737);
        var mapOptions = {
            zoom: 17,
            center: location,
            scrollwheel: false
        }
        var map = new google.maps.Map($(".gmap").get(0),
                        mapOptions);

        var image = '/sites/all/themes/cci/images/maps-marker.png';
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title: "CCI Studios"
        });
        
        
        var infowindow = new google.maps.InfoWindow({
            content: "<h2>CCI Studios</h2><p>136 Christina Street, Sarnia ON, N7T5T9</p><p>info@ccistudios.com</p><p>+1-519-337-8837</p>"
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
}(jQuery));
