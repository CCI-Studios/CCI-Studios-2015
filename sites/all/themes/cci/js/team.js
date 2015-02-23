(function($) {
    $(function(){        
        $(".view-team .btn-bio, .view-team .thumb").click(function(){
            var $bio = $(this).parents(".thumb").next().filter(".bio");
            $(".view-team .bio.under").hide().removeClass("open under");
            $(".view-team .bio.open").not($bio).css("z-index","1").addClass("under");
            if ($bio.hasClass("open") && $(".view-team .bio.open").length > 1) $bio.hide();
            $bio.addClass("open").css({
                "z-index":"2",
                "background-image": "url("+$bio.find(".photo img").attr("src")+")"
            });
            if ($(".view-team .bio.under").length)
            {
                $bio.css({
                    "left":"-100%",
                    "right":"100%"
                }).show().animate({
                    "left":"0",
                    "right":"0"
                });
            }
            else
            {
                $bio.slideDown();
            }
            $(".view-team").animate({
                "margin-bottom":"520px"
            });
            var offset = $bio.offset();
            var top = offset.top;
            if (top + 520 > $(window).scrollTop() + $(window).height())
            {
                $("html, body").animate({
                    "scrollTop":(top - $(window).height() + 520)+"px"
                });
            }
            return false;
        });
        
        $(".view-team .bio .close").click(function(){
            $(".view-team .bio.open").slideUp().removeClass("open");
            $(".view-team").animate({
                "margin-bottom":"0"
            });
            return false;
        });
    });
}(jQuery));
