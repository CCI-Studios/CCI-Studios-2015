(function($) {
    $(function(){
        var config = {
            "profile": {"screenName": 'ccistudios'},
            "maxTweets": 3,
            "enableLinks": true, 
            "showUser": true,
            "showTime": false,
            "showImages": true,
            "lang": "en",
            "dataOnly": true,
            "customCallback": callback
          };
        twitterFetcher.fetch(config);
    });
    
    function callback(tweets) {
        $(".block.twitter .feed").empty();
        for (var i in tweets)
        {
            var t = tweets[i];
            var link = t.permalinkURL;
            var text = t.tweet;
            var userLink = t.author_data.profile_url;
            var avatar = t.author_data.profile_image;
            var name = t.author_data.name;
            var handle = t.author_data.screen_name;
            $(".block.twitter .feed").append("<div class='tweet'><div class='text'><a href='"+link+"' target='_blank'>"+text+"</a></div><div class='avatar'><a href='"+userLink+"' target='_blank'><img src='"+avatar+"' alt='"+name+"' /></a></div><div class='handle'><a href='"+userLink+"' target='_blank'>"+handle+"</a></div></div>");
        }
    }
}(jQuery));
