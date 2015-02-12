$(function () {
    $(".button-collapse").sideNav();
})
/*$(document).ready(function () {
    $(window).resize(function () {
        var bodyHeight = $("body").height();
        var vwptHeight = $(window).height();
        if (vwptHeight > bodyHeight) {
            $("footer").css("position", "absolute").css("bottom", 0);
        }
    });
    $(window).resize();
});*/

$(function () {

    if (Modernizr.history) {
        $("nav").delegate("a[internal]", "click", function () {
            event.preventDefault();
            _href = $(this).attr("href");
            history.pushState(null, null, _href);
            loadContent(_href);
        });
        $("body").delegate("button[href]", "click", function () {
            event.preventDefault();
            _href = $(this).attr("href");
            history.pushState(null, null, _href);
            loadContent(_href);
        });
//        $("body").delegate("div[href]", "click", function () {
//            event.preventDefault();
//            _href = $(this).attr("href");
//            history.pushState(null, null, _href);
//            loadContent(_href);
//        });

        // set up some variables
        var $mainContent = $("#main-content"),
            $pageWrap = $("#page-wrap"),
            baseHeight = 0,
            $el;

        // calculate wrapper heights to prevent jumping when loading new content
        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $mainContent.height();

        function loadContent(href) {
            console.log("click fired");
            $mainContent.find("#guts").stop(true,true).fadeOut(600, function () { // fade out the content of the current page
                $mainContent.hide().load(href + " #guts", function () { // load the contents of whatever href is
                    $('html, body').animate({scrollTop : 0},800);
                    $mainContent.stop(true,true).fadeIn(600, function () {
                    });
                    $pageWrap.stop(true,true).velocity({
                            easing: 'swing',
                            duratio: 100,
                            height: baseHeight + $mainContent.height() + "px"
                        });
                });
            });
        }
        $(window).bind("popstate", function () {
            link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
            loadContent(link);
        });
    } else {
        // history is not supported; nothing fancy here
        console.log("no support");
    }

});

$(document).ready(

  function() { 

    $("html").niceScroll({
        scrollspeed: 100,
        mousescrollstep: 72
    });

  }

);