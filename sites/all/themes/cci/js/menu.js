(function($) {
    var animationTime = 250;
    
    $(function(){        
        $("#btn-menu").click(function(){
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
        });
        
        $("#block-system-main-menu .contact").click(function(){
            var offset = $("#contact").offset();
            var top = offset.top;
            $("html, body").animate({
                "scrollTop":(top-51)+"px"
            }, 800);
            return false;
        });
        $("#block-system-main-menu .good-times").click(function(){
            var offset = $("#bottom1").offset().top+$("#bottom1").outerHeight();
            $("html, body").animate({
                "scrollTop":offset+"px"
            }, 800);
            return false;
        });
        
        $(window).scroll(function(){
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
        });
        
        $(window).on("ready load resize", adjustFooterSize);
        $(window).on("ready resize", adjustTitleSize);
        
        $(".view-project [data-link]").each(function(){
            var link = $(this).data("link");
            $("#page-title").append("<a href='"+link+"' target='_blank' class='live-project'>View live project</a>");
        });
    });
    
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
