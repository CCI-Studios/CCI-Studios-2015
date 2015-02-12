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
            });
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
    });
}(jQuery));
