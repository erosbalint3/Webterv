$(document).scroll(function () {
    if ($(document).scrollTop() >= 100) {
        $("header").css("backdrop-filter", "blur(10px)");
    } else {
        $("header").css("backdrop-filter", "none");
    }
});