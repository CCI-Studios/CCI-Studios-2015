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
        
        if ($("body").hasClass("front"))
        {
            $(window).on("scroll ready", scrollEvents);
        }
    });
    
    function scrollEvents()
    {    
        if ($(window).scrollTop() > $(".block.home-how-we-do-it").offset().top - 51)
        {
            $(".block.home-how-we-do-it").addClass("green");
        }
        else
        {
            $(".block.home-how-we-do-it").removeClass("green");
        }
    }
}(jQuery));
