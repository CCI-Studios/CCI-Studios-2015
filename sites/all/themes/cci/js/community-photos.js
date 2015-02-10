(function($) {
    var current = 0;

    $(function(){
        fixSizes();
        $(window).resize(fixSizes);

        getContainer().find(".previous").click(prevClick);
        getContainer().find(".next").click(nextClick);
    });

    function getContainer()
    {
        return $(".view-community-photos");
    }

    function getNumPerGroup()
    {
        return 2;
    }

    function fixSizes()
    {
        var width = getContainer().width()/getNumPerGroup();
        getContainer().find(".views-row").width(width);
    }

    function getMin()
    {
        return 0;
    }
    function getMax()
    {
        return Math.floor(getContainer().find(".views-row").length/getNumPerGroup());
    }
    function getNextIndex()
    {
        var next = current+1;
        if (next > getMax())
            next = getMax();
        return next;
    }
    function getPrevIndex()
    {
        var prev = current-1;
        if (prev < 0)
            prev = 0;
        return prev;
    }

    function moveToCurrent()
    {
        getContainer().find(".view-content > div").animate({
            "left":current*-100+"%"
        });
    }

    function prevClick()
    {
        current = getPrevIndex();
        moveToCurrent();
        return false;
    }
    function nextClick()
    {
        current = getNextIndex();
        moveToCurrent();
        return false;
    }
}(jQuery));
