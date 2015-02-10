(function($) {
    $(function(){
        $(".view-process-phase-headings .view-content a").click(phaseClick);
        $(".view-process-phase-headings .view-header a.previous").click(previous);
        $(".view-process-phase-headings .view-footer a.next").click(next);

        changePhase(0);
    });

    function phaseClick()
    {
        var i = $(this).parents(".views-row").index();
        changePhase(i);

        return false;
    }

    function changePhase(i)
    {
        $(".view-process-phase-headings .view-content a")
        .removeClass("active")
        .eq(i)
        .addClass("active");

        var $newRow = $(".view-process-phases .views-row").eq(i);
        $(".view-process-phases .views-row").not($newRow).fadeOut().removeClass("active");
        $newRow.fadeIn().addClass("active");
    }

    function getCurrentIndex()
    {
        return $(".view-process-phases .views-row.active").index();
    }

    function getNextIndex()
    {
        var i = getCurrentIndex();
        i++;
        if (i > max())
        {
            i = max();
        }
        return i;
    }
    function getPreviousIndex()
    {
        var i = getCurrentIndex();
        i--;
        if (i < min())
        {
            i = min();
        }
        return i;
    }

    function min()
    {
        return 0;
    }
    function max()
    {
        return $(".view-process-phases .views-row").length-1;
    }

    function next()
    {
        changePhase(getNextIndex());

        return false;
    }
    function previous()
    {
        changePhase(getPreviousIndex());

        return false;
    }
}(jQuery));
