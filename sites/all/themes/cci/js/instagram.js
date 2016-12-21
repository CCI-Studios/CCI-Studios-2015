(function($) {
    $(function(){
        $.ajax({
            "type":"GET",
            "url":"https://api.instagram.com/v1/users/self/media/recent?count=4&access_token=409370993.1677ed0.9fe33b89c1284829a529b6db07ff55ad",
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
