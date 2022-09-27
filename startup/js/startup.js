$(".fix1 .top").on("click", function() {
    $("html, body").stop().animate({
        scrollTop: 0
    });
})

$(".fix2 .top").on("click", function() {
    $("html, body").stop().animate({
        scrollTop: 0
    });
});

$(".header1 .toggle").on("click", function() {
    $(this).closest(".header1").toggleClass("opened");
});

$(".header1 nav > ul > li > a").on("click", function() {
    $(this).closest("li").toggleClass("on");
});
(function() {
    var swiper = new Swiper(".slider2 .swiper-container", {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})();