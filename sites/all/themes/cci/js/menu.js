(function($) {
    $(function(){        
        $("#btn-menu").click(menuToggle);
        $("#block-system-main-menu .contact").click(contactClick);
        $("#block-system-main-menu .good-times").click(goodTimesClick);
        $(window).on("scroll", scrollEffects);
        $(window).on("ready load resize", adjustFooterSize);
        $(window).on("ready resize", adjustTitleSize);
        
        $(".view-project [data-link]").each(function(){
            var link = $(this).data("link");
            $("#page-title").append("<a href='"+link+"' target='_blank' class='live-project'>View live project</a>");
        });
    });
    
    function menuToggle()
    {
        var animationTime = 250;
        var $menus = $("#block-system-main-menu, #block-menu-menu-social-menu");
        if ($("body").hasClass("menu-open"))
        {
            $menus.animate({
                "margin-left":"0"
            }, animationTime);
        }
        else
        {
            $menus.animate({
                "margin-left":"-210px"
            }, animationTime);
        }
        $("body").toggleClass("menu-open");
        return false;
    }
    
    function contactClick()
    {
        var offset = $("#contact").offset();
        var top = offset.top;
        $("html, body").animate({
            "scrollTop":(top-51)+"px"
        }, 800);
        return false;
    }
    function goodTimesClick()
    {
        var offset = $("#bottom1").offset().top+$("#bottom1").outerHeight();
        $("html, body").animate({
            "scrollTop":offset+"px"
        }, 800);
        return false;
    }
    
    function scrollEffects()
    {
        var green = false;
        if ($("body").hasClass("front"))
        {
            green = $(window).scrollTop() > $(window).height() - 65;
        }
        else
        {
            green = $(window).scrollTop() > 290;
        }
        
        if (green)
        {
            $("body").addClass("menu-green");
        }
        else
        {
            $("body").removeClass("menu-green");
        }
    }
    
    function adjustFooterSize()
    {
        $("#page-wrapper").css("padding-bottom", $("#bottom2").outerHeight(true)+"px");
    }
    function adjustTitleSize()
    {
        $("#page-title").css({
            "width": $(window).width()+"px",
            "display": "table-cell"
        });
    }
}(jQuery));
