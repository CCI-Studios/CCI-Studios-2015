(function($) {
    $(function(){
        $.ajax({
            "type":"GET",
            "url":"https://api.instagram.com/v1/users/409370993/media/recent?count=4&client_id=ce705d3ca7cb4da08a9006bfe66b80b2",
            "success":callback,
            "dataType":"jsonp"
        });
    });

    function callback(json)
    {
        if (json && json.data)
        {
            $(".block.instagram .feed").empty();
            for (var i=0; i<4; i++)
            {
                if (json.data[i] && json.data[i].images && json.data[i].images.low_resolution && json.data[i].images.low_resolution.url)
                {
                    var url = json.data[i].images.low_resolution.url;
                    $(".block.instagram .feed").append("<img src='"+url+"' />");
                }
            }
        }
    }
}(jQuery));
