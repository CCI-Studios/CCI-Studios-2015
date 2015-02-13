(function($) {
    $(function(){        
        $(".block.home-header").height($(window).height());
        
        $(".block.home-header .content a, .home-arrow-down")
        .click(function(){
            var animationTime = parseInt(1000 * (($(window).height() - $("body").scrollTop()) / $(window).height()));
            $("html, body").animate({
                "scrollTop": $(window).height() - 51 + "px"
            }, animationTime);
            
            return false;
        });
    });
}(jQuery));
