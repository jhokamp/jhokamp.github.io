function calcScrollr() {

    var _diff = 5;
    var _margin = 80;
    var $_e = $(".scroll-1");

    var cardht = 0;
    var totalht = _margin;
    var count = 0;
    var dataval;

    $_e.each(function () {
        if((count+1)%2==0)
        {
            $_e.eq(count).find(".card").addClass("darken-1");
        }
        dataval = 0;
        var i = _margin;
        cardht = $(this).height();
        var temp = totalht;
        $_e.eq(count).attr("style", "top:" + (temp + count * _diff) + "px");
        for (var j = 0; temp - _margin + count * _diff >= 0; j++) {
            $_e.eq(count).attr("data-" + dataval, "top:" + (temp + count * _diff) + "px");
            dataval = dataval + cardht;
            temp = temp - cardht;
        }
        count++;
        totalht += cardht;
        i += cardht;
    });
    $(".page-footer").attr("style", "margin-top: "+(dataval+1000)+"px");
}




var s;
$(function () {

    $("html").niceScroll({
        scrollspeed: 100,
        mousescrollstep: 72
    });

    $(".scroll-1").find(".card-content").niceScroll({
        scrollspeed: 100,
        mousescrollstep: 72
    });

    $.scrolline({
        reverse: false,
        position: 'top',
        backColor: '#2980b9',
        frontColor: '#f1c40f',
        weight: 5
    });
});

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

        // set up some variables
        var $mainContent = $("#main-content"),
            $pageWrap = $("#page-wrap"),
            baseHeight = 0,
            $el;

        // calculate wrapper heights to prevent jumping when loading new content
        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $mainContent.height();

        function loadContent(href) {
            $mainContent.find("#guts").stop(true, true).fadeOut(600, function () { // fade out the content of the current page
                $mainContent.hide().load(href + " #guts", function () { // load the contents of whatever href is
                    $('html, body').animate({
                        scrollTop: 0
                    }, 800);

                    $(".scroll-1").find(".card-content").niceScroll({
                        scrollspeed: 100,
                        mousescrollstep: 72
                    }).resize();

                    $mainContent.stop(true, true).fadeIn(800, function () {
                    

                    
                    });
                    
                    calcScrollr();
                    s = skrollr.init();
                    s.refresh();
                    
                    
                    $pageWrap.velocity({
                        easing: 'swing',
                        duration: 100,
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


//scrolltotop1
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});

//preloader hide on load
$(window).load(function () {
    $(".preloader").fadeOut();
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    calcScrollr();
    s = skrollr.init();
});