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
let europeCardTexts = ["Norwegian Fjords", "Stockholm", "Isle of Skye", "Krakow", "Brasov", "Vilnius", "Santorini", "Dubrovnik", "Pompeii", "Paris", "Amsterdam", "Barcelona", "Budapest",
                       "Vienna", "Prague"];
let europeCardImages = ["norwegianFjords.jpg", "stockholm.jpg", "isleOfSkye.jpg", "krakow.jpg", "brasov.jpg", "vilnius.jpg", "santorini.jpg",
                        "dubrovnik.jpg", "pompeii.jpg", "paris.jpg", "amsterdam.jpg", "barcelona.jpg", "budapest.jpg", "vienna.jpg", "prague.jpg"];
let americaCardIds = ["hNaPaliCoast", "hPololuValley", "hWaimeaCanyon", "kRockyMountainNPark", "kMaroonBells", "kGardenOfTheGods", "tYosemiteNPark",
                      "tBigSur", "tSanFrancisco", "oCraterLakeNPark", "oColumbiaRiverGorge", "oCannonBeach", "cNiagaraFalls", "cQuebecCity",
                      "cVancouver"];
let americaCardTexts = ["Na Pali Coast", "Pololu Valley", "Waimea Canyon", "Rocky Mountain National Park", "Maroon Bells", "Garden Of The Gods", "Yosemite National Park", "Big Sur",
                        "San Francisco", "Crater Lake National Park", "Columbia River Gorge", "Cannon Beach", "Niagara Falls", "Quebec City", "Vancouver"];
let americaCardImages = ["naPaliCoast.jpg", "pololuValley.jpg", "waimeaCanyon.jpg", "rockyMountainNPark.jpg", "maroonBells.jpg", "gardenOfTheGods.jpg",
                         "yosemiteNPark.jpg", "bigSur.jpg", "sanFrancisco.jpg", "craterLakeNPark.jpg", "columbiaRiverGorge.jpg", "cannonBeach.jpg",
                         "niagaraFalls.jpg", "quebecCity.jpg", "vancouver.jpg"];
let africaCardIds = ["nMarrakech", "nPyramidsoOfGiza", "nSaharaDeserts", "eSerengetiNPark", "eMountKilimanjaro", "eZanzibar", "sCapeTown", "sOkavangoDelta",
                     "sTableMountain", "wDakar", "wCapeVerde", "wGhanasGoldCoast", "cDzangaSanghaNPark", "cLakeKivu", "cZingaBeach"];
let africaCardTexts = ["Marrakech", "Pyramids of Giza", "Sahara Deserts", "Serengeti National Park", "Mount Kilimanjaro", "Zanzibar", "Cape Town", "Okavango Delta", "Table Mountain",
                       "Dakar", "Cape Verde", "Ghana's Gold Coast", "Dzanga-Sangha National Park", "Lake Kivu", "Zinga Beach"];
let africaCardImages = ["marrakech.jpg", "pyramidsOfGiza.jpg", "saharaDeserts.jpg", "serengetiNPark.jpg", "mountKilimanjaro.jpg", "zanzibar.jpg",
                        "capeTown.jpg", "okavangoDelta.jpg", "tableMountain.jpg", "dakar.jpg", "capeVerde.jpg", "ghanasGoldCoast.jpg", "DzangaSanghaNPark.jpg",
                        "lakeKivu.jpg", "zingaBeach.jpg"];
let asiaCardIds = ["nLakeBaikal", "nGobiDesert", "nKungurIceCave", "eMountFuji", "eTheGreatWallOfChina", "eTaipei", "sTajMahal", "sTheMaldives",
                   "sSigiriya", "wPetra", "wCappadocia", "wDubai", "cSamarkand", "cAlmaty", "cDushanbe"];
let asiaCardTexts = ["Lake Baikal", "Gobi Desert", "Kungur Ice Cave", "Mount Fuji", "The Great Wall of China", "Taipei", "Taj Mahal" ,"The Maldives", "Sigiriya", "Petra, Jordan", 
                     "Cappadocia", "Dubai", "Samarkand", "Almaty", "Dushanbe"];
let asiaCardImages = ["lakeBaikal.jpg", "gobiDesert.jpg", "kungurIceCave.jpg", "mountFuji.jpg", "theGreatWallOfChina.jpg", "taipei.jpg", "tajMahal.jpg",
                      "theMaldives.jpg", "sigiriya.jpg", "petra.jpg", "cappadocia.jpg", "dubai.jpg", "samarkand.jpg", "almaty.jpg", "dushanbe.jpg"];
let australiaCardIds = ["nkakaduNPark", "nNingalooReef", "nCableBeach", "eSydneyOperaHouse", "eBlueMountainsNPark", "eFraserIsland", "sGreatOceanRoad",
                        "sKangarooIsland", "sYorkePeninsula", "wPurnululuNPark", "wCoralBay", "wEsperance", "cKingsCanyon", "cAliceSprings", "cPalmValley"];
let australiaCardTexts = ["Kakadu National Park", "Ningaloo Reef", "Cable Beach", "Sydney Opera House", "Blue Mountains National Park", "Fraser Island", "Great Ocean Road", "Kangaroo Island",
                          "Yorke Peninsula", "Purnululu National Park", "Coral Bay", "Esperance", "Kings Canyon", "Alice Springs", "Palm Valley"];
let australiaCardImages = ["kakaduNPark.jpg", "ningalooReef.jpg", "cableBeach.jpg", "syndeyOperaHouse.jpg", "blueMountainsNPark.jpg", "fraserIsland.jpg",
                           "greatOceanRoad.jpg", "kangarooIsland.jpg", "yorkePeninsula.jpg", "purnululuNPark.jpg", "coralBay.jpg", "esperance.jpg",
                           "kingsCanyon.jpg", "aliceSprings.jpg", "palmValley.jpg"];

let europeCard = document.getElementById("europeCard");
let americaCard = document.getElementById("americaCard");
let africaCard = document.getElementById("africaCard");
let asiaCard = document.getElementById("asiaCard");
let australiaCard = document.getElementById("australiaCard");

let europeCardSelected = false;
let americaCardSelected = false;
let africaCardSelected = false;
let asiaCardSelected = false;
let australiaCardSelected = false;

europeCard.addEventListener("click", function() {
    hideAllCollectorCards();
    showEuropeCards();
    europeCardSelected = true;
});

americaCard.addEventListener("click", function() {
    hideAllCollectorCards();
    showAmericaCards();
    americaCardSelected = true;
});

africaCard.addEventListener("click", function() {
    hideAllCollectorCards();
    showAfricaCards();
    africaCardSelected = true;
});

asiaCard.addEventListener("click", function() {
    hideAllCollectorCards();
    showAsiaCards();
    asiaCardSelected = true;
});

australiaCard.addEventListener("click", function() {
    hideAllCollectorCards();
    showAustraliaCards();
    australiaCardSelected = true;
});

function backToCategories() {
    europeCard.style.display = "block";
    americaCard.style.display = "block";
    africaCard.style.display = "block";
    asiaCard.style.display = "block";
    australiaCard.style.display = "block";
    resCards = [];
    deleteAllCards(); 
}

function hideAllCollectorCards() {
    europeCard.style.display = "none";
    americaCard.style.display = "none";
    africaCard.style.display = "none";
    asiaCard.style.display = "none";
    australiaCard.style.display = "none";
}

function deleteAllCards() {
        for (let i = 0; i < europeCardIds.length; i++) {
            document.getElementById(europeCardIds[i]) != null ? document.getElementById(europeCardIds[i]).remove() : "";
        }
        for (let i = 0; i < americaCardIds.length; i++) {
            document.getElementById(americaCardIds[i]) != null ? document.getElementById(americaCardIds[i]).remove() : "";
        }
        for (let i = 0; i < africaCardIds.length; i++) {
            document.getElementById(africaCardIds[i]) != null ? document.getElementById(africaCardIds[i]).remove() : "";
        }
        for (let i = 0; i < asiaCardIds.length; i++) {
            document.getElementById(asiaCardIds[i]) != null ? document.getElementById(asiaCardIds[i]).remove() : "";
        }
        for (let i = 0; i < australiaCardIds.length; i++) {
            document.getElementById(australiaCardIds[i]) != null ? document.getElementById(australiaCardIds[i]).remove() : "";
        }
}

function showEuropeCards() {
    let cardCount = 0;
    for (let i = 0; i < europeCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + europeCardIds[cardCount] + '" class="card"> <h2>' + europeCardTexts[cardCount] + '</h2></div>');
            $("#" + europeCardIds[cardCount]).css({'background-image': 'url("Images/' + europeCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + europeCardIds[cardCount - 1]).after('<div id="' + europeCardIds[cardCount] + '" class="card"> <h2>' + europeCardTexts[cardCount] + '</h2></div>');
            $("#" + europeCardIds[cardCount]).css({'background-image': 'url("Images/' + europeCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}

function showAmericaCards() {
    let cardCount = 0;
    for (let i = 0; i < americaCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + americaCardIds[cardCount] + '" class="card"> <h2>' + americaCardTexts[cardCount] + '</h2></div>');
            $("#" + americaCardIds[cardCount]).css({'background-image': 'url("Images/' + americaCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + americaCardIds[cardCount - 1]).after('<div id="' + americaCardIds[cardCount] + '" class="card"> <h2>' + americaCardTexts[cardCount] + '</h2></div>');
            $("#" + americaCardIds[cardCount]).css({'background-image': 'url("Images/' + americaCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}

function showAfricaCards() {
    let cardCount = 0;
    for (let i = 0; i < africaCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + africaCardIds[cardCount] + '" class="card"> <h2>' + africaCardTexts[cardCount] + '</h2></div>');
            $("#" + africaCardIds[cardCount]).css({'background-image': 'url("Images/' + africaCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + africaCardIds[cardCount - 1]).after('<div id="' + africaCardIds[cardCount] + '" class="card"> <h2>' + africaCardTexts[cardCount] + '</h2></div>');
            $("#" + africaCardIds[cardCount]).css({'background-image': 'url("Images/' + africaCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}

function showAsiaCards() {
    let cardCount = 0;
    for (let i = 0; i < asiaCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + asiaCardIds[cardCount] + '" class="card"> <h2>' + asiaCardTexts[cardCount] + '</h2></div>');
            $("#" + asiaCardIds[cardCount]).css({'background-image': 'url("Images/' + asiaCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + asiaCardIds[cardCount - 1]).after('<div id="' + asiaCardIds[cardCount] + '" class="card"> <h2>' + asiaCardTexts[cardCount] + '</h2></div>');
            $("#" + asiaCardIds[cardCount]).css({'background-image': 'url("Images/' + asiaCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}

function showAustraliaCards() {
    let cardCount = 0;
    for (let i = 0; i < australiaCardIds.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id="' + australiaCardIds[cardCount] + '" class="card"> <h2>' + australiaCardTexts[cardCount] + '</h2></div>');
            $("#" + australiaCardIds[cardCount]).css({'background-image': 'url("Images/' + australiaCardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + australiaCardIds[cardCount - 1]).after('<div id="' + australiaCardIds[cardCount] + '" class="card"> <h2>' + australiaCardTexts[cardCount] + '</h2></div>');
            $("#" + australiaCardIds[cardCount]).css({'background-image': 'url("Images/' + australiaCardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}

let nEur = document.getElementById("nEur");
let eEur = document.getElementById("eEur");
let sEur = document.getElementById("sEur");
let wEur = document.getElementById("wEur");
let cEur = document.getElementById("cEur");

let cAmer = document.getElementById("cAmer");
let hAmer = document.getElementById("hAmer");
let kAmer = document.getElementById("kAmer");
let tAmer = document.getElementById("tAmer");
let oAmer = document.getElementById("oAmer");

let nAfr = document.getElementById("nAfr");
let eAfr = document.getElementById("eAfr");
let sAfr = document.getElementById("sAfr");
let wAfr = document.getElementById("wAfr");
let cAfr = document.getElementById("cAfr");

let nAsia = document.getElementById("nAsia");
let eAsia = document.getElementById("eAsia");
let sAsia = document.getElementById("sAsia");
let wAsia = document.getElementById("wAsia");
let cAsia = document.getElementById("cAsia");

let nAus = document.getElementById("nAus");
let eAus = document.getElementById("eAus");
let sAus = document.getElementById("sAus");
let wAus = document.getElementById("wAus");
let cAus = document.getElementById("cAus");

nEur.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("nEur");
});
eEur.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("eEur");
});
sEur.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("sEur");
});
wEur.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("wEur");
});
cEur.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("cEur");
});

cAmer.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("cAmer");
});
hAmer.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("hAmer");
});
kAmer.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("kAmer");
});
tAmer.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("tAmer");
});
oAmer.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById('oAmer');
});

nAfr.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("nAfr");
});
eAfr.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("eAfr");
});
sAfr.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("sAfr");
});
wAfr.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("wAfr");
});
cAfr.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("cAfr");
});

nAsia.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("nAsia");
});
eAsia.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("eAsia");
});
sAsia.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("sAsia");
});
wAsia.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("wAsia");
});
cAsia.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("cAsia");
});
nAus.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("nAus");
});
eAus.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("eAus");
});
sAus.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("sAus");
});
wAus.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById("wAus");
});
cAus.addEventListener("click", function() {
    hideAllCollectorCards();
    filterById('cAus');
});

function filterById(cat) {
    let cards = [];
    let cardText = [];
    let cardImages = [];
    deleteAllCards();
    
    switch(cat) {
        case "nEur":
            cards = getCardsById("n", "eur");
            cardText = getCardTextById("n", "eur");
            cardImages = getCardImagesById("n", "eur");
            break;
        case "eEur":
            cards = getCardsById("e", "eur");
            cardText = getCardTextById("e", "eur");
            cardImages = getCardImagesById("e", "eur");
            break;
        case "sEur":
            cards = getCardsById("s", "eur");
            cardText = getCardTextById("s", "eur");
            cardImages = getCardImagesById("s", "eur");
            break;
        case "wEur":
            cards = getCardsById("w", "eur");
            cardText = getCardTextById("w", "eur");
            cardImages = getCardImagesById("w", "eur");
            break;
        case "cEur":
            cards = getCardsById("c", "eur");
            cardText = getCardTextById("c", "eur");
            cardImages = getCardImagesById("c", "eur");
            break;
        case "cAmer":
            cards = getCardsById("c", "amer");
            cardText = getCardTextById("c", "amer");
            cardImages = getCardImagesById("c", "amer");
            break;
        case "hAmer":
            cards = getCardsById("h", "amer");
            cardText = getCardTextById("h", "amer");
            cardImages = getCardImagesById("h", "amer");
            break;
        case "kAmer":
            cards = getCardsById("k", "amer");
            cardText = getCardTextById("k", "amer");
            cardImages = getCardImagesById("k", "amer");
            break;
        case "tAmer":
            cards = getCardsById("t", "amer");
            cardText = getCardTextById("t", "amer");
            cardImages = getCardImagesById("t", "amer");
            break;
        case "oAmer":
            cards = getCardsById("o", "amer");
            cardText = getCardTextById("o", "amer");
            cardImages = getCardImagesById("o", "amer");
            break;
        case "nAfr":
            cards = getCardsById("n", "afr");
            cardText = getCardTextById("n", "afr");
            cardImages = getCardImagesById("n", "afr");
            break;
        case "eAfr":
            cards = getCardsById("e", "afr");
            cardText = getCardTextById("e", "afr");
            cardImages = getCardImagesById("e", "afr");
            break;
        case "sAfr":
            cards = getCardsById("s", "afr");
            cardText = getCardTextById("s", "afr");
            cardImages = getCardImagesById("s", "afr");
            break;
        case "wAfr":
            cards = getCardsById("w", "afr");
            cardText = getCardTextById("w", "afr");
            cardImages = getCardImagesById("w", "afr");
            break;
        case "cAfr":
            cards = getCardsById("c", "afr");
            cardText = getCardTextById("c", "afr");
            cardImages = getCardImagesById("c", "afr");
            break;
        case "nAsia":
            cards = getCardsById("n", "asia");
            cardText = getCardTextById("n", "asia");
            cardImages = getCardImagesById("n", "asia");
            break;
        case "eAsia":
            cards = getCardsById("e", "asia");
            cardText = getCardTextById("e", "asia");
            cardImages = getCardImagesById("e", "asia");
            break;
        case "sAsia":
            cards = getCardsById("s", "asia");
            cardText = getCardTextById("s", "asia");
            cardImages = getCardImagesById("s", "asia");
            break;
        case "wAsia":
            cards = getCardsById("w", "asia");
            cardText = getCardTextById("w", "asia");
            cardImages = getCardImagesById("w", "asia");
            break;
        case "cAsia":
            cards = getCardsById("c", "asia");
            cardText = getCardTextById("c", "asia");
            cardImages = getCardImagesById("c", "asia");
            break;
        case "nAus":
            cards = getCardsById("n", "aus");
            cardText = getCardTextById("n", "aus");
            cardImages = getCardImagesById("n", "aus");
            break;
        case "eAus":
            cards = getCardsById("e", "aus");
            cardText = getCardTextById("e", "aus");
            cardImages = getCardImagesById("e", "aus");
            break;
        case "sAus":
            cards = getCardsById("s", "aus");
            cardText = getCardTextById("s", "aus");
            cardImages = getCardImagesById("s", "aus");
            break;
        case "wAus":
            cards = getCardsById("w", "aus");
            cardText = getCardTextById("w", "aus");
            cardImages = getCardImagesById("w", "aus");
            break;
        case "cAus":
            cards = getCardsById("c", "aus");
            cardText = getCardTextById("c", "aus");
            cardImages = getCardImagesById("c", "aus");
            break;
    }

    let cardCount = 0;
    for (let i = 0; i < cards.length; i++) {
        if (cardCount == 0) {
            $("#cardSection").append('<div id = "' + cards[cardCount] + '" class="card"> <h2>' + cardText[cardCount] + '</h2></div>');
            $("#" + cards[cardCount]).css({'background-image': 'url("Images/' + cardImages[cardCount] + '")'});
            cardCount++;
        } else {
            $("#" + cards[cardCount - 1]).after('<div id="' + cards[cardCount] + '" class="card"> <h2>' + cardText[cardCount] + '</h2></div>');
            $("#" + cards[cardCount]).css({'background-image': 'url("Images/' + cardImages[cardCount] + '")'});
            cardCount++;
        }
    }
}

function getCardsById(cat, mainCat) {
    cards = [];
    let cardCount = 0;
    switch(mainCat) {
        case "eur":
            cardCount = 0;
            for (let i = 0; i < europeCardIds.length; i++) {
                if (europeCardIds[i].startsWith(cat)) {
                    cards[cardCount++] = europeCardIds[i];
                }
            }
            break;
        case "amer":
            cardCount = 0;
            for (let i = 0; i < americaCardIds.length; i++) {
                if (americaCardIds[i].substring(0, cat.length) == cat) {
                    cards[cardCount++] = americaCardIds[i];
                }
            }
            break;
        case "afr":
            cardCount = 0;
            for (let i = 0; i < africaCardIds.length; i++) {
                if (africaCardIds[i].startsWith(cat)) {
                    cards[cardCount++] = africaCardIds[i];
                }
            }
            break;
        case "asia":
            cardCount = 0;
            for (let i = 0; i < asiaCardIds.length; i++) {
                if (asiaCardIds[i].startsWith(cat)) {
                    cards[cardCount++] = asiaCardIds[i];
                }
            }
            break;
        case "aus":
            cardCount = 0;
            for (let i = 0; i < australiaCardIds.length; i++) {
                if (australiaCardIds[i].startsWith(cat)) {
                    cards[cardCount++] = australiaCardIds[i];
                }
            }
            break;
    }
    return cards;
}

function getCardTextById(cat, mainCat) {
    let cardText = [];
    let cardCount = 0;
    switch(mainCat) {
        case "eur":
            cardCount = 0;
            for (let i = 0; i < europeCardIds.length; i++) {
                if (europeCardIds[i].startsWith(cat)) {
                    cardText[cardCount++] = europeCardTexts[i];
                }
            }
            break;
        case "amer":
            cardCount = 0;
            for (let i = 0; i < americaCardIds.length; i++) {
                if (americaCardIds[i].startsWith(cat)) {
                    cardText[cardCount++] = americaCardTexts[i];
                }
            }
            break;
        case "afr":
            cardCount = 0;
            for (let i = 0; i < africaCardIds.length; i++) {
                if (africaCardIds[i].startsWith(cat)) {
                    cardText[cardCount++] = africaCardTexts[i];
                }
            }
            break;
        case "asia":
            cardCount = 0;
            for (let i = 0; i < asiaCardIds.length; i++) {
                if (asiaCardIds[i].startsWith(cat)) {
                    cardText[cardCount++] = asiaCardTexts[i];
                }
            }
            break;
        case "aus":
            cardCount = 0;
            for (let i = 0; i < australiaCardIds.length; i++) {
                if (australiaCardIds[i].startsWith(cat)) {
                    cardText[cardCount++] = australiaCardTexts[i];
                }
            }
            break;
    }
    return cardText;
}

function getCardImagesById(cat, mainCat) {
    let cardImages = [];
    let cardCount = 0;
    switch(mainCat) {
        case "eur":
            cardCount = 0;
            for (let i = 0; i < europeCardIds.length; i++) {
                if (europeCardIds[i].startsWith(cat)) {
                    cardImages[cardCount++] = europeCardImages[i];
                }
            }
            break;
        case "amer":
            cardCount = 0;
            for (let i = 0; i < americaCardIds.length; i++) {
                if (americaCardIds[i].startsWith(cat)) {
                    cardImages[cardCount++] = americaCardImages[i];
                }
            }
            break;
        case "afr":
            cardCount = 0;
            for (let i = 0; i < africaCardIds.length; i++) {
                if (africaCardIds[i].startsWith(cat)) {
                    cardImages[cardCount++] = africaCardImages[i];
                }
            }
            break;
        case "asia":
            cardCount = 0;
            for (let i = 0; i < asiaCardIds.length; i++) {
                if (asiaCardIds[i].startsWith(cat)) {
                    cardImages[cardCount++] = asiaCardImages[i];
                }
            }
            break;
        case "aus":
            cardCount = 0;
            for (let i = 0; i < australiaCardIds.length; i++) {
                if (australiaCardIds[i].startsWith(cat)) {
                    cardImages[cardCount++] = australiaCardImages[i];
                }
            }
            break;
    }
    return cardImages;
}

function removeCardById(cards) {
    for (let i = 0; i < cards.length; i++) {
        document.getElementById(cards[i]).remove();
    }
}