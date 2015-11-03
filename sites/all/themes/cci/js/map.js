(function($) {
    $(function(){
        if ($(".gmap").length)
        {
            createMap();
        }
    });

    function createMap()
    {
        var mapOptions = {
            zoom: getDefaultZoom(),
            center: new google.maps.LatLng(43.401992, -80.886841),
            scrollwheel: false
        }
        var map = new google.maps.Map($(".gmap").get(0),
                        mapOptions);

        var image = '/sites/all/themes/cci/images/maps-marker.svg';
        var sarnia = new google.maps.Marker({
            position: new google.maps.LatLng(42.971760, -82.40737),
            map: map,
            icon: image,
            title: "CCI Studios"
        });
        var toronto = new google.maps.Marker({
            position: new google.maps.LatLng(43.6434672,-79.39400),
            map: map,
            icon: image,
            title: "CCI Studios"
        });
        
        google.maps.event.addListener(sarnia, 'click', function() {
            map.setCenter(sarnia.getPosition());
            map.setZoom(15);
        });
        google.maps.event.addListener(toronto, 'click', function() {
            map.setCenter(toronto.getPosition());
            map.setZoom(15);
        });
    }
    function getDefaultZoom() {
        var w = $(window).width();
        if (w > 760) {
            return 8;
        }
        if (w > 480) {
            return 7;
        }
        return 6;
    }
}(jQuery));
