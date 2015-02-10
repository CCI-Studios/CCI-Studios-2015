(function($) {
    $(function(){
        $("h2").each(function(){
            var $h2 = $(this);
            var icon = "";
            if ($h2.hasClass("history"))
            {
                icon = "history";
            }
            else if($h2.hasClass("team"))
            {
                icon = "team";
            }
            else if($h2.hasClass("community"))
            {
                icon = "community";
            }
            else if($h2.hasClass("samples"))
            {
                icon = "samples";
            }
            else if($h2.hasClass("clients"))
            {
                icon = "clients";
            }
            else if($h2.hasClass("nice-things"))
            {
                icon = "nice-things";
            }
            else if($h2.hasClass("why"))
            {
                icon = "why";
            }
            else if($h2.hasClass("what"))
            {
                icon = "what";
            }
            else if($h2.hasClass("how"))
            {
                icon = "how";
            }

            if (icon)
            {
                var url = "/sites/all/themes/cci/images/icon-"+icon+".png";
                $h2.prepend("<img src='"+url+"' alt='' class='icon' />");
            }
        });

        var icon = "";
        if ($("body").hasClass("culture"))
        {
            icon = "culture";
        }
        else if ($("body").hasClass("work"))
        {
            icon = "work";
        }
        else if ($("body").hasClass("services"))
        {
            icon = "services";
        }
        else if ($("body").hasClass("good-times"))
        {
            icon = "good-times";
        }
        else if ($("body").hasClass("contact"))
        {
            icon = "contact";
        }
        else if ($("body").hasClass("start-a-project"))
        {
            icon = "start-a-project";
        }

        if (icon)
        {
            var url = "/sites/all/themes/cci/images/icon-"+icon+".png";
            $("#page-title").prepend("<img src='"+url+"' alt='' class='icon' />");
        }
    });
}(jQuery));
