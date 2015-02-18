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

        var image = '/sites/all/themes/cci/images/maps-marker.svg';
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title: "CCI Studios"
        });
        
        
        var infowindow = new google.maps.InfoWindow({
            content: "<h2>This is where the Good Times happen</h2>",
            maxWidth: 200
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
            $(".gmap [style*='skewX']").css("background","#106232");
            $(".gmap").find('div[style*="rgb(255, 255, 255)"]').filter(function () { return this.innerHTML == "" }).css("background","#106232")
        });
    }
}(jQuery));
