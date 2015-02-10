(function($) {
    $(function(){
        $(".view-work-sample-logos .view-content a").click(logoClick);
        $(".view-work-sample-logos .view-header a").click(filterClick);
        filterSetup();
        showFirstSample();
    });

    function filterSetup()
    {
        $(".view-work-samples .views-row, .view-work-sample-logos .views-row").each(function(){
            var $row = $(this);

            $row.find(".views-field-field-sample-type li").each(function(){
                $row.addClass("all");
                if ($(this).text() == "Website Design")
                {
                    $row.addClass("website-design");
                }
                else if ($(this).text() == "Branding")
                {
                    $row.addClass("branding");
                }
                else if ($(this).text() == "Graphic Design")
                {
                    $row.addClass("graphic-design");
                }
            });
        });
    }

    function showFirstSample()
    {
        $(".view-work-samples .views-row-first").addClass("active");
        $(".view-work-sample-logos .view-header a.all").addClass("active")
    }

    function logoClick()
    {
        var $row = $(this).parents(".views-row");
        var i = $row.index();
        $(".view-work-samples .views-row").removeClass("active").eq(i).addClass("active");

        return false;
    }

    function filterClick()
    {
        var filter = $(this).attr("class");

        $(".view-work-sample-logos .view-header a").removeClass("active");
        $(this).addClass("active");

        var resetSample = false;
        if (!$(".view-work-samples .views-row.active").hasClass(filter))
        {
            resetSample = true;
        }

        $(".view-work-sample-logos .views-row")
        .hide()
        .filter("."+filter)
        .show();

        if (resetSample)
        {
            $(".view-work-samples .views-row")
            .removeClass("active")
            .filter("."+filter)
            .eq(0)
            .addClass("active");
        }

        return false;
    }
}(jQuery));
