var lowerUlEuropa = document.getElementById("lowerEuropa");
var lowerUlAmerika = document.getElementById("lowerAmerika");
var lowerUlAfrika = document.getElementById("lowerAfrika");
var lowerUlAzsia = document.getElementById("lowerAzsia");
var lowerUlAusztralia = document.getElementById("lowerAusztralia");
var lowerUlEuropaLi = document.getElementById("lowerEuropaLi");
var lowerUlAmerikaLi = document.getElementById("lowerAmerikaLi");
var lowerUlAfrikaLi = document.getElementById("lowerAfrikaLi");
var lowerUlAzsiaLi = document.getElementById("lowerAzsiaLi");
var lowerUlAusztraliaLi = document.getElementById("lowerAusztraliaLi");

console.log(lowerUlEuropaLi);

lowerUlEuropaLi.addEventListener("click", function() {
    if (lowerUlEuropa.classList.contains("lowerInactiveEuropa")) {
        lowerUlEuropa.classList.remove("lowerInactiveEuropa");
        lowerUlEuropa.classList.add("lowerActiveEuropa");
    } else {
        lowerUlEuropa.classList.add("lowerInactiveEuropa");
        lowerUlEuropa.classList.remove("lowerActiveEuropa");
    }
});

lowerUlAfrikaLi.addEventListener("click", function() {
    if (lowerUlAfrika.classList.contains("lowerInactiveAfrika")) {
        lowerUlAfrika.classList.remove("lowerInactiveAfrika");
        lowerUlAfrika.classList.add("lowerActiveAfrika");
    } else {
        lowerUlAfrika.classList.add("lowerInactiveAfrika");
        lowerUlAfrika.classList.remove("lowerActiveAfrika");
    }
});

lowerUlAmerikaLi.addEventListener("click", function() {
    if (lowerUlAmerika.classList.contains("lowerInactiveAmerika")) {
        lowerUlAmerika.classList.remove("lowerInactiveAmerika");
        lowerUlAmerika.classList.add("lowerActiveAmerika");
    } else {
        lowerUlAmerika.classList.add("lowerInactiveAmerika");
        lowerUlAmerika.classList.remove("lowerActiveAmerika");
    }
});

lowerUlAzsiaLi.addEventListener("click", function() {
    if (lowerUlAzsia.classList.contains("lowerInactiveAzsia")) {
        lowerUlAzsia.classList.remove("lowerInactiveAzsia");
        lowerUlAzsia.classList.add("lowerActiveAzsia");
    } else {
        lowerUlAzsia.classList.add("lowerInactiveAzsia");
        lowerUlAzsia.classList.remove("lowerActiveAzsia");
    }
});

lowerUlAusztraliaLi.addEventListener("click", function() {
    if (lowerUlAusztralia.classList.contains("lowerInactiveAusztralia")) {
        lowerUlAusztralia.classList.remove("lowerInactiveAusztralia");
        lowerUlAusztralia.classList.add("lowerActiveAusztralia");
    }  else {
        lowerUlAusztralia.classList.add("lowerInactiveAusztralia");
        lowerUlAusztralia.classList.remove("lowerActiveAusztralia");
    }
});

var europeCardIds = ["praga", "berlin", "roma", "madrid", "budapest"];
var europeCardImages = ["praga.jpg", "berlin.jpg", "roma.jpg", "madrid.jpg", "budapest.jpg"];
var cardCount = 0;
$(document).ready(function() {
    for (var i = 0; i < europeCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + europeCardIds[cardCount] + '" class="card"></div>');
            $("#" + europeCardIds[cardCount]).css({'background-image': 'url("Images/' + europeCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + europeCardIds[cardCount - 1]).after('<div id="' + europeCardIds[cardCount] + '" class="card"></div>');
            $("#" + europeCardIds[cardCount]).css({'background-image': 'url("Images/' + europeCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
})