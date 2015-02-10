(function($) {
    $(function(){
        if ($("body").hasClass("contact"))
        {
            createMap();
        }
    });

    function createMap()
    {
        var location = new google.maps.LatLng(42.971761, -82.407293);
        var mapOptions = {
            zoom: 16,
            center: location
        }
        var map = new google.maps.Map(document.getElementById('map'),
                        mapOptions);

        var image = '/sites/all/themes/cci/images/maps-marker.png';
        var beachMarker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title: "CCI Studios"
        });
    }
}(jQuery));
