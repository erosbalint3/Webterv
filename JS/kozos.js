$("#menuButton").click(function () {
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

$("#home").click(function() {
    window.location = "../HTML/index.html";
});
$("#dest").click(function() {
    window.location = "../HTML/destinations.html";
});
$("#messages").click(function() {
    window.location = "../HTML/messages.html";
});
$("#surveyLink").click(function() {
    window.location = "../HTML/survey.html";
});
$("#contact").click(function() {
    window.location = "../HTML/contact.html";
});
$("#profile").click(function() {
    window.location = "../HTML/profile.html";
});