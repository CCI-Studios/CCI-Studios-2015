(function($) {
    $(function(){
        var config = {
          "id": '565945598277214208',
          "maxTweets": 3
        };
        twitterFetcher.fetch(config, callback);
    });
    
    function callback(tweets)
    {
        for (var i in tweets)
        {
            var t = tweets[i];
            $(".block.twitter .feed").append("<div class='tweet'><div class='text'><a href='"+t.link+"' target='_blank'>"+t.text+"</a></div><div class='avatar'><a href='"+t.userLink+"' target='_blank'><img src='"+t.avatar+"' alt='"+t.name+"' /></a></div><div class='handle'><a href='"+t.userLink+"' target='_blank'>"+t.handle+"</a></div></div>");
        }
    }
}(jQuery));
