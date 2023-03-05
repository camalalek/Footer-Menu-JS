$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    
    if (scrollPos >= 100) {
        $(".menu").fadeOut();
    } else {
        $(".menu").fadeIn();
    }
});