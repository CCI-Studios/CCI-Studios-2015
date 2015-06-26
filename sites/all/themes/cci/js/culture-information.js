(function($) {
    $(function(){
        if ($("body").hasClass("culture"))
            setActive(0);

        getHeadings().find(".focusable").each(function(index){
            $(this).click(function(){
                setActive(index);
            })
            .on("keydown", function(e){
				if (e.keyCode == 13)
				{
					setActive(index);
				}
			});
        });
    });

    function getHeadings()
    {
        return $(".view-culture-information-headings .views-row");
    }
    function getRows()
    {
        return $(".view-culture-information .views-row");
    }

    function setActive(index)
    {
        //fade in the content
        var $newRow = getRows().eq(index);
        getRows().not($newRow).css("z-index","0").animate({
            "opacity":"0"
        });
        $newRow.css("z-index","1").animate({
            "opacity":"1"
        });

        //move the underline marker to the correct heading
        var $marker = $(".view-culture-information-headings .marker");
        var $headingRow = getHeadings().eq(index);
        var headingOffset = $headingRow.position();
        var left = headingOffset.left + ($headingRow.outerWidth(true)/2);
        var top = headingOffset.top + $headingRow.height();

        $marker.animate({
            "left":left+"px",
            "top":top+"px"
        }, 400, "easeOutCirc");
    }
}(jQuery));
