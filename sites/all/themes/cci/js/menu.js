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
    });
}(jQuery));
