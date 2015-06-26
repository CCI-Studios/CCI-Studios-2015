(function($) {
    $(function(){
        if ($(".block.services-how-we-do-it").length)
        {
            $(window).on("scroll ready", scrollEvents);
        }
    });
    
    function scrollEvents()
    {
        var $block = $(".block.services-how-we-do-it");
        if ($(window).scrollTop() > $block.offset().top + $block.height() - $(window).height() || $(window).scrollTop() > $block.offset().top - 51)
        {
            $block.addClass("green");
        }
    }
}(jQuery));
