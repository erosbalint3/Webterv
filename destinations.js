let lowerUlEuropa = document.getElementById("lowerEuropa");
let lowerUlAmerika = document.getElementById("lowerAmerika");
let lowerUlAfrika = document.getElementById("lowerAfrika");
let lowerUlAzsia = document.getElementById("lowerAzsia");
let lowerUlAusztralia = document.getElementById("lowerAusztralia");
let lowerUlEuropaLi = document.getElementById("lowerEuropaLi");
let lowerUlAmerikaLi = document.getElementById("lowerAmerikaLi");
let lowerUlAfrikaLi = document.getElementById("lowerAfrikaLi");
let lowerUlAzsiaLi = document.getElementById("lowerAzsiaLi");
let lowerUlAusztraliaLi = document.getElementById("lowerAusztraliaLi");

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

let europeCardIds = ["nNorwegianFjords", "nStockholm","nIsleOfSkye", "eKrakow", "eBrasov", "eVilnius", "sSantorini", "sDubrovnik", "sPompeii",
                     "wParis", "wAmsterdam", "wBarcelona", "cBudapest", "cVienna", "cPrague"];
let europeCardImages = ["norwegianFjords.jpg", "stockholm.jpg", "isleOfSkye.jpg", "krakow.jpg", "brasov.jpg", "vilnius.jpg", "santorini.jpg",
                        "dubrovnik.jpg", "pompeii.jpg", "paris.jpg", "amsterdam.jpg", "barcelona.jpg", "budapest.jpg", "vienna.jpg", "prague.jpg"];
let americaCardIds = ["hNaPaliCoast", "hPololuValley", "hWaimeaCanyon", "cRockyMountainNPark", "cMaroonBells", "cGardenOfTheGods", "caYosemiteNPark",
                      "caBigSur", "caSanFrancisco", "oCraterLakeNPark", "oColumbiaRiverGorge", "oCannonBeach", "canNiagaraFalls", "canQuebecCity",
                      "canVancouver"];
let americaCardImages = ["naPaliCoast.jpg", "pololuValley.jpg", "waimeaCanyon.jpg", "rockyMountainNPark.jpg", "maroonBells.jpg", "gardenOfTheGods.jpg",
                         "yosemiteNPark.jpg", "bigSur.jpg", "sanFrancisco.jpg", "craterLakeNPark.jpg", "columbiaRiverGorge.jpg", "cannonBeach.jpg",
                         "niagaraFalls.jpg", "quebecCity.jps", "vancouver.jpg"];
let africaCardIds = ["nMarrakech", "nPyramidsoOfGiza", "nSaharaDeserts", "eSerengetiNPark", "eMountKilimanjaro", "eZanzibar", "sCapeTown", "sOkarangoDelta",
                     "sTableMountain", "wDakar", "wCapeVerde", "wGhanasGoldCoast", "cDzangaSanghaNPark", "cLakeKivu", "cZingaBeach"];
let africaCardImages = ["marrakech.jpg", "pyramidsOfGiza.jpg", "saharaDeserts.jpg", "serengetiNPark.jpg", "mountKilimanjaro.jpg", "zanzibar.jpg",
                        "capeTown.jpg", "okarango.jpg", "tableMountain.jpg", "dakar.jpg", "capeVerde.jpg", "ghanasGoldCoast.jpg", "DzangaSanghaNPark.jpg",
                        "lakeKivu.jpg", "zingaBeach.jpg"];
let asiaCardIds = ["nLakeBaikal", "nGobiDesert", "nKungurIceCave", "eMountFuji", "eTheGreatWallOfChina", "eTaipei", "sTajMahal", "sTheMaldives",
                   "sSigiriya", "wPetra", "wCappadocio", "wDubai", "cSamarkand", "cAlmaty", "cDushanbe"];
let asiaCardImages = ["lakeBaikal.jpg", "gobiDesert.jpg", "kungurIceCave.jpg", "mountFuji.jpg", "theGreatWallOfChina.jpg", "eTaipei.jpg", "tajMahal.jpg",
                      "theMaldives.jpg", "sigiriya.jpg", "petra.jpg", "cappadocio.jpg", "dubai.jpg", "samarkand.jpg", "almaty.jpg", "dushanbe.jpg"];
let australiaCardIds = ["nkakadoNPark", "nNingalooReef", "nCableBeach", "eSydneyOperaHouse", "eBlueMountainsNPark", "eFraserIsland", "sGreatOceanRoad",
                        "sKangarooIsland", "sTorkePeninsula", "wPurnululuNPark", "wCoralBay", "wEsperance", "cKingsCanyon", "cAliceSprings", "cPalmValley"];
let australiaCardImages = ["kakadoNPark.jpg", "ningalooReef.jpg", "cableBeach.jpg", "syndeyOperaHouse.jpg", "blueMountains.jpg", "fraserIsland.jpg",
                           "greatOceanRoad.jpg", "kangarooIsland.jpg", "torkePeninsula.jpg", "purnululuNPark.jpg", "coralBay.jpg", "esperance.jpg",
                           "kingsCanyon.jpg", "aliceSprings.jpg", "palmValley.jpg"];

let europeCard = document.getElementById("europeCard");
let americaCard = document.getElementById("americaCard");
let africaCard = document.getElementById("africaCard");
let asiaCard = document.getElementById("asiaCard");
let australiaCard = document.getElementById("australiaCard");

europeCard.addEventListener("click", function() {
    hideAllCollectorCards();
    europeCards();
});

americaCard.addEventListener("click", function() {
    hideAllCollectorCards();
    americaCards();
});

africaCard.addEventListener("click", function() {
    hideAllCollectorCards();
    africaCards();
});

asiaCard.addEventListener("click", function() {
    hideAllCollectorCards();
    asiaCards();
});

australiaCard.addEventListener("click", function() {
    hideAllCollectorCards();
    australiaCards();
});

function hideAllCollectorCards() {
    europeCard.remove();
    americaCard.remove();
    africaCard.remove();
    asiaCard.remove();
    australiaCard.remove();
}

function europeCards() {
    let cardCount = 0;
    for (let i = 0; i < europeCardIds.length; i++) {
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
}

function americaCards() {
    let cardCount = 0;
    for (let i = 0; i < americaCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + americaCardIds[cardCount] + '" class="card"></div>');
            $("#" + americaCardIds[cardCount]).css({'background-image': 'url("Images/' + americaCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + americaCardIds[cardCount - 1]).after('<div id="' + americaCardIds[cardCount] + '" class="card"></div>');
            $("#" + americaCardIds[cardCount]).css({'background-image': 'url("Images/' + americaCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}

function africaCards() {
    let cardCount = 0;
    for (let i = 0; i < africaCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + africaCardIds[cardCount] + '" class="card"></div>');
            $("#" + africaCardIds[cardCount]).css({'background-image': 'url("Images/' + africaCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + africaCardIds[cardCount - 1]).after('<div id="' + africaCardIds[cardCount] + '" class="card"></div>');
            $("#" + africaCardIds[cardCount]).css({'background-image': 'url("Images/' + africaCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}

function asiaCards() {
    let cardCount = 0;
    for (let i = 0; i < asiaCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + asiaCardIds[cardCount] + '" class="card"></div>');
            $("#" + asiaCardIds[cardCount]).css({'background-image': 'url("Images/' + asiaCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + asiaCardIds[cardCount - 1]).after('<div id="' + asiaCardIds[cardCount] + '" class="card"></div>');
            $("#" + asiaCardIds[cardCount]).css({'background-image': 'url("Images/' + asiaCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}

function australiaCards() {
    let cardCount = 0;
    for (let i = 0; i < australiaCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + australiaCardIds[cardCount] + '" class="card"></div>');
            $("#" + australiaCardIds[cardCount]).css({'background-image': 'url("Images/' + australiaCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + australiaCardIds[cardCount - 1]).after('<div id="' + australiaCardIds[cardCount] + '" class="card"></div>');
            $("#" + australiaCardIds[cardCount]).css({'background-image': 'url("Images/' + australiaCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}