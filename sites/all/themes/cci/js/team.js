(function($) {
    $(function(){
        $(".view-team-members-names .view-content a").click(function(){
            var i = $(this).parents(".views-row").index();
            var $newRow = $(".view-team-members .views-row").eq(i);
            $(".view-team-members .views-row").not($newRow).fadeOut();
            $newRow.fadeIn();
            return false;
        });
    });
}(jQuery));
