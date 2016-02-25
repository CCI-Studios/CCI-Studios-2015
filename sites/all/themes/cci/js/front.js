(function($) {
    $(function(){        
        $(window).on("ready resize", adjustHeaderHeight);
        
        $(".block.home-header .content .scroll-down, .home-arrow-down")
        .click(function(){
            var animationTime = parseInt(1000 * (($(window).height() - $("body").scrollTop()) / $(window).height()));
            $("html, body").animate({
                "scrollTop": $(window).height() - 51 + "px"
            }, animationTime);
            
            return false;
        });
        
        if ($("body").hasClass("front"))
        {
            $(window).on("scroll ready", scrollEvents);
        }
    });
    
    function adjustHeaderHeight()
    {
        $(".block.home-header").height($(window).height());
        $(".home-arrow-down").css("top", $(window).height()+"px");
    }
    
    function scrollEvents()
    {
        var $block = $(".block.home-how-we-do-it");
        if ($(window).scrollTop() > $block.offset().top + $block.height() - $(window).height() || $(window).scrollTop() > $block.offset().top - 51)
        {
            $block.addClass("green");
        }
        else
        {
            $block.removeClass("green");
        }
    }
}(jQuery));
