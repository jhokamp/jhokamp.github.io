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

        // history is supported; do magical things

        // hijack the nav click event
        $("nav").delegate("a[internal]", "click", function () {
            event.preventDefault();
            _href = $(this).attr("href");

            // change the url without a page refresh and add a history entry.
            history.pushState(null, null, _href);

            // load the content
            loadContent(_href); // fear not! we're going to build this function in the next code block

        });
        $("body").delegate("button[href]", "click", function () {
            event.preventDefault();
            _href = $(this).attr("href");

            // change the url without a page refresh and add a history entry.
            history.pushState(null, null, _href);

            // load the content
            loadContent(_href); // fear not! we're going to build this function in the next code block

        });

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
            $mainContent.find("#guts").stop(true,true).fadeOut(400, function () { // fade out the content of the current page
                $mainContent.hide().load(href + " #guts", function () { // load the contents of whatever href is
                    $mainContent.stop(true,true).fadeIn(400, function () {
                        // bottom block was here
                    });
                    $pageWrap.stop(true,true).velocity({
                            easing: 'swing',
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