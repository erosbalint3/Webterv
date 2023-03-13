$("#menuButton").click(function () {
    console.log("anyad");
    if ($("#links").css("display") == "none") {
        $("#links").css("display", "flex");
    } else {
        $("#links").css("display", "none");
    }
});

$(document).scroll(function () {
    if ($(document).scrollTop() >= 100 && !matchMedia('(pointer:coarse)').matches) {
        $("#desktopHeader").css("backdrop-filter", "blur(10px)");
    } else {
        $("#desktopHeader").css("backdrop-filter", "none");
    }
});