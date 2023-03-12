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

lowerUlEuropaLi.addEventListener("click", function () {
  if (lowerUlEuropa.classList.contains("lowerInactiveEuropa")) {
    lowerUlEuropa.classList.remove("lowerInactiveEuropa");
    lowerUlEuropa.classList.add("lowerActiveEuropa");
  } else {
    lowerUlEuropa.classList.add("lowerInactiveEuropa");
    lowerUlEuropa.classList.remove("lowerActiveEuropa");
  }
});

lowerUlAfrikaLi.addEventListener("click", function () {
  if (lowerUlAfrika.classList.contains("lowerInactiveAfrika")) {
    lowerUlAfrika.classList.remove("lowerInactiveAfrika");
    lowerUlAfrika.classList.add("lowerActiveAfrika");
  } else {
    lowerUlAfrika.classList.add("lowerInactiveAfrika");
    lowerUlAfrika.classList.remove("lowerActiveAfrika");
  }
});

lowerUlAmerikaLi.addEventListener("click", function () {
  if (lowerUlAmerika.classList.contains("lowerInactiveAmerika")) {
    lowerUlAmerika.classList.remove("lowerInactiveAmerika");
    lowerUlAmerika.classList.add("lowerActiveAmerika");
  } else {
    lowerUlAmerika.classList.add("lowerInactiveAmerika");
    lowerUlAmerika.classList.remove("lowerActiveAmerika");
  }
});

lowerUlAzsiaLi.addEventListener("click", function () {
  if (lowerUlAzsia.classList.contains("lowerInactiveAzsia")) {
    lowerUlAzsia.classList.remove("lowerInactiveAzsia");
    lowerUlAzsia.classList.add("lowerActiveAzsia");
  } else {
    lowerUlAzsia.classList.add("lowerInactiveAzsia");
    lowerUlAzsia.classList.remove("lowerActiveAzsia");
  }
});

lowerUlAusztraliaLi.addEventListener("click", function () {
  if (lowerUlAusztralia.classList.contains("lowerInactiveAusztralia")) {
    lowerUlAusztralia.classList.remove("lowerInactiveAusztralia");
    lowerUlAusztralia.classList.add("lowerActiveAusztralia");
  } else {
    lowerUlAusztralia.classList.add("lowerInactiveAusztralia");
    lowerUlAusztralia.classList.remove("lowerActiveAusztralia");
  }
});

let europeCardIds = ["nNorwegianFjords", "nStockholm", "nIsleOfSkye", "eKrakow", "eBrasov", "eVilnius", "sSantorini", "sDubrovnik", "sPompeii",
  "wParis", "wAmsterdam", "wBarcelona", "cBudapest", "cVienna", "cPrague"];
let europeCardTexts = ["Norwegian Fjords", "Stockholm", "Isle of Skye", "Krakow", "Brasov", "Vilnius", "Santorini", "Dubrovnik", "Pompeii", "Paris", "Amsterdam", "Barcelona", "Budapest",
  "Vienna", "Prague"];
let europeCardImages = ["norwegianFjords.jpg", "stockholm.jpg", "isleOfSkye.jpg", "krakow.jpg", "brasov.jpg", "vilnius.jpg", "santorini.jpg",
  "dubrovnik.jpg", "pompeii.jpg", "paris.jpg", "amsterdam.jpg", "barcelona.jpg", "budapest.jpg", "vienna.jpg", "prague.jpg"];
let americaCardIds = ["hNaPaliCoast", "hPololuValley", "hWaimeaCanyon", "kRockyMountainNPark", "kMaroonBells", "kGardenOfTheGods", "tYosemiteNPark",
  "tBigSur", "tSanFrancisco", "oCraterLakeNPark", "oColumbiaRiverGorge", "oCannonBeach", "cNiagaraFalls", "cQuebecCity",
  "cVancouver"];
let americaCardTexts = ["Na Pali Coast", "Pololu Valley", "Waimea Canyon", "Rocky Mountain National Park", "Maroon Bells", "Garden of the Gods", "Yosemite National Park", "Big Sur",
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
let asiaCardTexts = ["Lake Baikal", "Gobi Desert", "Kungur Ice Cave", "Mount Fuji", "The Great Wall of China", "Taipei", "Taj Mahal", "The Maldives", "Sigiriya", "Petra, Jordan",
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

europeCard.addEventListener("click", function () {
  hideAllCollectorCards();
  showEuropeCards();
  europeCardSelected = true;
});

americaCard.addEventListener("click", function () {
  hideAllCollectorCards();
  showAmericaCards();
  americaCardSelected = true;
});

africaCard.addEventListener("click", function () {
  hideAllCollectorCards();
  showAfricaCards();
  africaCardSelected = true;
});

asiaCard.addEventListener("click", function () {
  hideAllCollectorCards();
  showAsiaCards();
  asiaCardSelected = true;
});

australiaCard.addEventListener("click", function () {
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
      $("#cardSection").append('<div id="' + europeCardIds[cardCount] + '" title = "' + europeCardTexts[cardCount] + '" class="card"> <div class="cardOverlay"> <h2>' + europeCardTexts[cardCount] + '</h2></div></div>');
      $("#" + europeCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + europeCardImages[cardCount] + '")' });
      cardCount++;
    } else {
      $("#" + europeCardIds[cardCount - 1]).after('<div id="' + europeCardIds[cardCount] + '" title = "' + europeCardTexts[cardCount] + '" class="card"> <div class="cardOverlay"> <h2>' + europeCardTexts[cardCount] + '</h2></div></div>');
      $("#" + europeCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + europeCardImages[cardCount] + '")' });
      cardCount++;
    }
  }
  makeCardClickable();
}

function showAmericaCards() {
  let cardCount = 0;
  for (let i = 0; i < americaCardIds.length; i++) {
    if (cardCount == 0) {
      $("#cardSection").append('<div id="' + americaCardIds[cardCount] + '" title = "' + americaCardTexts[cardCount] + '" class="card"> <div class="cardOverlay"> <h2>' + americaCardTexts[cardCount] + '</h2></div></div>');
      $("#" + americaCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + americaCardImages[cardCount] + '")' });
      cardCount++;
    } else {
      $("#" + americaCardIds[cardCount - 1]).after('<div id="' + americaCardIds[cardCount] + '" title = "' + americaCardTexts[cardCount] + '" class="card">  <div class="cardOverlay"><h2>' + americaCardTexts[cardCount] + '</h2></div></div>');
      $("#" + americaCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + americaCardImages[cardCount] + '")' });
      cardCount++;
    }
  }
  makeCardClickable();
}

function showAfricaCards() {
  let cardCount = 0;
  for (let i = 0; i < africaCardIds.length; i++) {
    if (cardCount == 0) {
      $("#cardSection").append('<div id="' + africaCardIds[cardCount] + '" title = "' + africaCardTexts[cardCount] + '" class="card">  <div class="cardOverlay"><h2>' + africaCardTexts[cardCount] + '</h2></div></div>');
      $("#" + africaCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + africaCardImages[cardCount] + '")' });
      cardCount++;
    } else {
      $("#" + africaCardIds[cardCount - 1]).after('<div id="' + africaCardIds[cardCount] + '" title = "' + africaCardTexts[cardCount] + '" class="card">  <div class="cardOverlay"><h2>' + africaCardTexts[cardCount] + '</h2></div></div>');
      $("#" + africaCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + africaCardImages[cardCount] + '")' });
      cardCount++;
    }
  }
  makeCardClickable();
}

function showAsiaCards() {
  let cardCount = 0;
  for (let i = 0; i < asiaCardIds.length; i++) {
    if (cardCount == 0) {
      $("#cardSection").append('<div id="' + asiaCardIds[cardCount] + '" title = "' + asiaCardTexts[cardCount] + '" class="card"> <div class="cardOverlay"><h2>' + asiaCardTexts[cardCount] + '</h2></div></div>');
      $("#" + asiaCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + asiaCardImages[cardCount] + '")' });
      cardCount++;
    } else {
      $("#" + asiaCardIds[cardCount - 1]).after('<div id="' + asiaCardIds[cardCount] + '" title = "' + asiaCardTexts[cardCount] + '" class="card">  <div class="cardOverlay"><h2>' + asiaCardTexts[cardCount] + '</h2></div></div>');
      $("#" + asiaCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + asiaCardImages[cardCount] + '")' });
      cardCount++;
    }
  }
  makeCardClickable();
}

function showAustraliaCards() {
  let cardCount = 0;
  for (let i = 0; i < australiaCardIds.length; i++) {
    if (cardCount == 0) {
      $("#cardSection").append('<div id="' + australiaCardIds[cardCount] + '" title = "' + australiaCardTexts[cardCount] + '" class="card"> <div class="cardOverlay"> <h2>' + australiaCardTexts[cardCount] + '</h2></div></div>');
      $("#" + australiaCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + australiaCardImages[cardCount] + '")' });
      cardCount++;
    } else {
      $("#" + australiaCardIds[cardCount - 1]).after('<div id="' + australiaCardIds[cardCount] + '" title = "' + australiaCardTexts[cardCount] + '" class="card"> <h2>' + australiaCardTexts[cardCount] + '</h2></div></div>');
      $("#" + australiaCardIds[cardCount]).css({ 'background-image': 'url("../Images/' + australiaCardImages[cardCount] + '")' });
      cardCount++;
    }
  }
  makeCardClickable();
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

nEur.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("nEur");
});
eEur.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("eEur");
});
sEur.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("sEur");
});
wEur.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("wEur");
});
cEur.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("cEur");
});

cAmer.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("cAmer");
});
hAmer.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("hAmer");
});
kAmer.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("kAmer");
});
tAmer.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("tAmer");
});
oAmer.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById('oAmer');
});

nAfr.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("nAfr");
});
eAfr.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("eAfr");
});
sAfr.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("sAfr");
});
wAfr.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("wAfr");
});
cAfr.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("cAfr");
});

nAsia.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("nAsia");
});
eAsia.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("eAsia");
});
sAsia.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("sAsia");
});
wAsia.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("wAsia");
});
cAsia.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("cAsia");
});
nAus.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("nAus");
});
eAus.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("eAus");
});
sAus.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("sAus");
});
wAus.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById("wAus");
});
cAus.addEventListener("click", function () {
  hideAllCollectorCards();
  filterById('cAus');
});

function filterById(cat) {
  let cards = [];
  let cardText = [];
  let cardImages = [];
  deleteAllCards();

  switch (cat) {
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
      $("#" + cards[cardCount]).css({ 'background-image': 'url("../Images/' + cardImages[cardCount] + '")' });
      cardCount++;
    } else {
      $("#" + cards[cardCount - 1]).after('<div id="' + cards[cardCount] + '" class="card"> <h2>' + cardText[cardCount] + '</h2></div>');
      $("#" + cards[cardCount]).css({ 'background-image': 'url("../Images/' + cardImages[cardCount] + '")' });
      cardCount++;
    }
  }
}

function getCardsById(cat, mainCat) {
  cards = [];
  let cardCount = 0;
  switch (mainCat) {
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
  switch (mainCat) {
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
  switch (mainCat) {
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

const details = [
  {
    "DESTINATION": "Na Pali Coast",
    "DETAILS": "Na Pali Coast: Located in Kauai, Hawaii, Na Pali Coast is a stunning coastline that features dramatic sea cliffs, lush green valleys, and hidden beaches. It is a popular destination for hiking, kayaking, and boat tours.",
    "PRICE": "200$"
  },
  {
    "DESTINATION": "Pololu Valley",
    "DETAILS": "Pololu Valley: Located on the north coast of the Big Island of Hawaii, Pololu Valley is a beautiful valley that is surrounded by steep cliffs and features a black sand beach. It is a popular destination for hiking and scenic drives.",
    "PRICE": "300$"
  },
  {
    "DESTINATION": "Waimea Canyon",
    "DETAILS": "Waimea Canyon: Also known as the Grand Canyon of the Pacific, Waimea Canyon is located on the island of Kauai, Hawaii. It is a stunning natural wonder that features deep canyons, colorful cliffs, and lush green forests. It is a popular destination for hiking and scenic drives.",
    "PRICE": "250$"
  },
  {
    "DESTINATION": "Rocky Mountain National Park",
    "DETAILS": "Rocky Mountain National Park: Located in Colorado, Rocky Mountain National Park is a natural wonder that features soaring peaks, alpine lakes, and vast forests. It is a popular destination for hiking, camping, and wildlife viewing.",
    "PRICE": "400$"
  },
  {
    "DESTINATION": "Maroon Bells",
    "DETAILS": "Maroon Bells: Located in the Elk Mountains of Colorado, the Maroon Bells are two peaks that are surrounded by stunning alpine scenery. It is a popular destination for hiking, photography, and scenic drives.",
    "PRICE": "500$"
  },
  {
    "DESTINATION": "Garden of the Gods",
    "DETAILS": "Garden of the Gods: Located in Colorado Springs, Colorado, Garden of the Gods is a stunning natural wonder that features towering red rock formations. It is a popular destination for hiking, rock climbing, and photography.",
    "PRICE": "524$"
  },
  {
    "DESTINATION": "Yosemite National Park",
    "DETAILS": "Yosemite National Park: Located in California, Yosemite National Park is a breathtaking natural wonder that features towering granite cliffs, thundering waterfalls, and vast meadows. It is a popular destination for hiking, camping, and wildlife viewing.",
    "PRICE": "327$"
  },
  {
    "DESTINATION": "Big Sur",
    "DETAILS": "Big Sur: Located on the central coast of California, Big Sur is a rugged stretch of coastline that features towering cliffs, hidden beaches, and beautiful redwood forests. It is a popular destination for hiking, camping, and scenic drives.",
    "PRICE": "768$"
  },
  {
    "DESTINATION": "San Francisco",
    "DETAILS": "San Francisco: Located in northern California, San Francisco is a vibrant city that is known for its iconic landmarks, including the Golden Gate Bridge, Alcatraz Island, and Fisherman's Wharf. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "912$"
  },
  {
    "DESTINATION": "Crater Lake National Park",
    "DETAILS": "Crater Lake National Park: Located in Oregon, Crater Lake National Park is a stunning natural wonder that features a deep blue lake that was formed by a volcanic eruption. It is a popular destination for hiking, camping, and scenic drives.",
    "PRICE": "293$"
  },
  {
    "DESTINATION": "Columbia River Gorge",
    "DETAILS": "Columbia River Gorge: Located in Oregon and Washington, the Columbia River Gorge is a stunning river canyon that features towering cliffs, thundering waterfalls, and beautiful forests. It is a popular destination for hiking, sightseeing, and photography.",
    "PRICE": "558$"
  },
  {
    "DESTINATION": "Cannon Beach",
    "DETAILS": "Cannon Beach: Located on the Oregon coast, Cannon Beach is a beautiful seaside town that features a stunning beach that is known for its iconic Haystack Rock. It is a popular destination for beachcombing, hiking, and sightseeing.",
    "PRICE": "145$"
  },
  {
    "DESTINATION": "Niagara Falls",
    "DETAILS": "Niagara Falls: Located on the border of Ontario, Canada, and New York, United States, Niagara Falls is a breathtaking natural wonder that features thundering waterfalls and stunning views. It is a popular destination for sightseeing, boat tours, and outdoor activities.",
    "PRICE": "667$"
  },
  {
    "DESTINATION": "Quebec City",
    "DETAILS": "Quebec City: Located in Quebec, Canada, Quebec City is a charming and historic city that features stunning architecture, cobblestone streets, and a beautiful old town. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "830$"
  },
  {
    "DESTINATION": "Vancouver",
    "DETAILS": "Vancouver: Located in British Columbia, Canada, Vancouver is a vibrant city that features stunning natural beauty, including mountains, beaches, and forests. It is a popular destination for sightseeing, outdoor activities, and dining.",
    "PRICE": "443$"
  },
  {
    "DESTINATION": "Norwegian Fjords",
    "DETAILS": "Norwegian Fjords: Located in Norway, the Norwegian Fjords are a stunning natural wonder that features towering cliffs, deep blue waters, and beautiful forests. It is a popular destination for hiking, kayaking, and scenic cruises.",
    "PRICE": "652$"
  },
  {
    "DESTINATION": "Stockholm",
    "DETAILS": "Stockholm: Located in Sweden, Stockholm is a beautiful city that features stunning architecture, historic landmarks, and beautiful waterways. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "187$"
  },
  {
    "DESTINATION": "Isle of Skye",
    "DETAILS": "Isle of Skye: Located in Scotland, the Isle of Skye is a stunning island that features rugged landscapes, beautiful beaches, and historic landmarks. It is a popular destination for hiking, sightseeing, and photography.",
    "PRICE": "723$"
  },
  {
    "DESTINATION": "Krakow",
    "DETAILS": "Krakow: Located in Poland, Krakow is a historic city that features beautiful architecture, charming streets, and a rich cultural heritage. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "579$"
  },
  {
    "DESTINATION": "Brasov",
    "DETAILS": "Brasov: Located in Romania, Brasov is a beautiful city that features stunning architecture, historic landmarks, and beautiful landscapes. It is a popular destination for sightseeing, hiking, and winter sports.",
    "PRICE": "265$"
  },
  {
    "DESTINATION": "Vilnius",
    "DETAILS": "Vilnius: Located in Lithuania, Vilnius is a charming city that features beautiful architecture, historic landmarks, and a vibrant cultural scene. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "384$"
  },
  {
    "DESTINATION": "Santorini",
    "DETAILS": "Santorini: Located in Greece, Santorini is a stunning island that features beautiful white-washed buildings, turquoise waters, and stunning sunsets. It is a popular destination for sightseeing, beachcombing, and romantic getaways.",
    "PRICE": "856$"
  },
  {
    "DESTINATION": "Dubrovnik",
    "DETAILS": "Dubrovnik: Located in Croatia, Dubrovnik is a beautiful city that features stunning architecture, historic landmarks, and a beautiful coastline. It is a popular destination for sightseeing, beachcombing, and boat tours.",
    "PRICE": "559$"
  },
  {
    "DESTINATION": "Pompeii",
    "DETAILS": "Pompeii: Located in Italy, Pompeii is an ancient Roman city that was buried by the eruption of Mount Vesuvius. It is a popular destination for sightseeing and learning about ancient history.",
    "PRICE": "638$"
  },
  {
    "DESTINATION": "Paris",
    "DETAILS": "Paris: Located in France, Paris is a romantic and historic city that features stunning architecture, iconic landmarks, and world-class museums. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "310$"
  },
  {
    "DESTINATION": "Amsterdam",
    "DETAILS": "Amsterdam: Located in the Netherlands, Amsterdam is a charming city that features beautiful canals, historic landmarks, and a vibrant cultural scene. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "798$"
  },
  {
    "DESTINATION": "Barcelona",
    "DETAILS": "Barcelona: Located in Spain, Barcelona is a vibrant city that features stunning architecture, historic landmarks, and beautiful beaches. It is a popular destination for sightseeing, beachcombing, and dining.",
    "PRICE": "483$"
  },
  {
    "DESTINATION": "Budapest",
    "DETAILS": "Budapest: Located in Hungary, Budapest is a beautiful city that features stunning architecture, historic landmarks, and beautiful waterways. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "619$"
  },
  {
    "DESTINATION": "Vienna",
    "DETAILS": "Vienna: Located in Austria, Vienna is a beautiful city that features stunning architecture, historic landmarks, and a rich cultural heritage. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "415$"
  },
  {
    "DESTINATION": "Prague",
    "DETAILS": "Prague: Located in the Czech Republic, Prague is a historic city that features stunning architecture, beautiful landmarks, and a vibrant cultural scene. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "953$"
  },
  {
    "DESTINATION": "Marrakech",
    "DETAILS": "Marrakech: Located in Morocco, Marrakech is a vibrant city that features beautiful architecture, historic landmarks, and a rich cultural heritage. It is a popular destination for sightseeing, shopping, and dining.",
    "PRICE": "105$"
  },
  {
    "DESTINATION": "Pyramids of Giza",
    "DETAILS": "Pyramids of Giza: Located in Egypt, the Pyramids of Giza are ancient wonders that feature stunning architecture and a rich cultural history. They are a popular destination for sightseeing and learning about ancient history.",
    "PRICE": "743$"
  },
  {
    "DESTINATION": "Sahara Deserts",
    "DETAILS": "Sahara Desert: Located in North Africa, the Sahara Desert is a stunning natural wonder that features vast sand dunes, beautiful landscapes, and a unique cultural heritage. It is a popular destination for desert safaris, stargazing, and cultural tours.",
    "PRICE": "218$"
  },
  {
    "DESTINATION": "Serengeti National Park",
    "DETAILS": "Serengeti National Park: Located in Tanzania, Serengeti National Park is a breathtaking natural wonder that features endless savannahs, diverse wildlife, and a unique cultural heritage. It is a popular destination for wildlife safaris, hot air balloon rides, and cultural tours.",
    "PRICE": "991$"
  },
  {
    "DESTINATION": "Mount Kilimanjaro",
    "DETAILS": "Mount Kilimanjaro: Located in Tanzania, Mount Kilimanjaro is the highest peak in Africa and a popular destination for hiking and climbing.",
    "PRICE": "754$"
  },
  {
    "DESTINATION": "Zanzibar",
    "DETAILS": "Zanzibar: Located off the coast of Tanzania, Zanzibar is a beautiful island that features stunning beaches, historic landmarks, and a rich cultural heritage. It is a popular destination for beachcombing, water sports, and cultural tours.",
    "PRICE": "423$"
  },
  {
    "DESTINATION": "Cape Town",
    "DETAILS": "Cape Town: Located in South Africa, Cape Town is a stunning city that features beautiful beaches, historic landmarks, and a vibrant cultural scene. It is a popular destination for sightseeing, beachcombing, and cultural tours.",
    "PRICE": "576$"
  },
  {
    "DESTINATION": "Okavango Delta",
    "DETAILS": "Okavango Delta: Located in Botswana, the Okavango Delta is a unique natural wonder that features a diverse range of wildlife and stunning landscapes. It is a popular destination for wildlife safaris, boat tours, and cultural tours.",
    "PRICE": "268$"
  },
  {
    "DESTINATION": "Table Mountain",
    "DETAILS": "Table Mountain: Located in South Africa, Table Mountain is a stunning natural wonder that features beautiful landscapes and stunning views of the city of Cape Town. It is a popular destination for hiking, sightseeing, and cultural tours.",
    "PRICE": "983$"
  },
  {
    "DESTINATION": "Dakar",
    "DETAILS": "Dakar: Located in Senegal, Dakar is a vibrant city that features stunning architecture, beautiful beaches, and a rich cultural heritage. It is a popular destination for sightseeing, beachcombing, and cultural tours.",
    "PRICE": "144$"
  },
  {
    "DESTINATION": "Cape Verde",
    "DETAILS": "Cape Verde: Located off the coast of West Africa, Cape Verde is a beautiful archipelago that features stunning beaches, diverse wildlife, and a unique cultural heritage. It is a popular destination for beachcombing, water sports, and cultural tours.",
    "PRICE": "637$"
  },
  {
    "DESTINATION": "Ghana's Gold Coast",
    "DETAILS": "Ghana's Gold Coast: Located in Ghana, the Gold Coast features stunning beaches, historic landmarks, and a rich cultural heritage. It is a popular destination for beachcombing, water sports, and cultural tours.",
    "PRICE": "362$"
  },
  {
    "DESTINATION": "Dzanga-Sangha National Park",
    "DETAILS": "Dzanga-Sangha National Park: Located in the Central African Republic, Dzanga-Sangha National Park is a stunning natural wonder that features diverse wildlife, beautiful landscapes, and a unique cultural heritage. It is a popular destination for wildlife safaris, hiking, and cultural tours.",
    "PRICE": "763$"
  },
  {
    "DESTINATION": "Lake Kivu",
    "DETAILS": "Lake Kivu: Located in Rwanda, Lake Kivu is a beautiful lake that features stunning landscapes, beautiful beaches, and a unique cultural heritage. It is a popular destination for water sports, beachcombing, and cultural tours.",
    "PRICE": "528$"
  },
  {
    "DESTINATION": "Zinga Beach",
    "DETAILS": "Zinga Beach: Located in Tanzania, Zinga Beach is a beautiful beach that features stunning landscapes and a unique cultural heritage. It is a popular destination for beachcombing, water sports, and cultural tours.",
    "PRICE": "704$"
  },
  {
    "DESTINATION": "Lake Baikal",
    "DETAILS": "Lake Baikal: Located in Russia, Lake Baikal is a stunning natural wonder that features crystal-clear waters, diverse wildlife, and beautiful landscapes. It is a popular destination for hiking, wildlife safaris, and cultural tours.",
    "PRICE": "916$"
  },
  {
    "DESTINATION": "Gobi Desert",
    "DETAILS": "Gobi Desert: Located in Mongolia, the Gobi Desert is a stunning natural wonder that features vast sand dunes, diverse wildlife, and beautiful landscapes. It is a popular destination for desert safaris, stargazing, and cultural tours.",
    "PRICE": "875$"
  },
  {
    "DESTINATION": "Kungur Ice Cave",
    "DETAILS": "Kungur Ice Cave: Located in Russia, Kungur Ice Cave is a breathtaking natural wonder that features stunning ice formations and beautiful landscapes. It is a popular destination for sightseeing and cultural tours.",
    "PRICE": "351$"
  },
  {
    "DESTINATION": "Mount Fuji",
    "DETAILS": "Mount Fuji: Located in Japan, Mount Fuji is a stunning natural wonder that features beautiful landscapes and a unique cultural heritage. It is a popular destination for hiking, sightseeing, and cultural tours.",
    "PRICE": "424$"
  },
  {
    "DESTINATION": "The Greate Wall of China",
    "DETAILS": "The Great Wall of China: Located in China, the Great Wall is an iconic landmark that features stunning architecture and a rich cultural history. It is a popular destination for sightseeing and learning about ancient history.",
    "PRICE": "456$"
  },
  {
    "DESTINATION": "Taipei 101",
    "DETAILS": "Taipei 101: Located in Taiwan, Taipei 101 is a skyscraper that features stunning architecture and breathtaking views of the city. It is a popular destination for sightseeing and shopping.",
    "PRICE": "619$"
  },
  {
    "DESTINATION": "Taj Mahal",
    "DETAILS": "Taj Mahal: Located in India, the Taj Mahal is a stunning mausoleum that features beautiful architecture and a rich cultural history. It is a popular destination for sightseeing and learning about ancient history.",
    "PRICE": "103$"
  },
  {
    "DESTINATION": "The Maldives",
    "DETAILS": "The Maldives: Located in the Indian Ocean, the Maldives is a beautiful archipelago that features stunning beaches, crystal-clear waters, and a unique cultural heritage. It is a popular destination for beachcombing, water sports, and cultural tours.",
    "PRICE": "502$"
  },
  {
    "DESTINATION": "Sigiriya",
    "DETAILS": "Sigiriya: Located in Sri Lanka, Sigiriya is an ancient fortress that features stunning architecture and a rich cultural history. It is a popular destination for sightseeing and learning about ancient history.",
    "PRICE": "618$"
  },
  {
    "DESTINATION": "Petra",
    "DETAILS": "Petra: Located in Jordan, Petra is an ancient city that features beautiful architecture and a rich cultural history. It is a popular destination for sightseeing and learning about ancient history.",
    "PRICE": "876$"
  },
  {
    "DESTINATION": "Cappadocia",
    "DETAILS": "Cappadocia: Located in Turkey, Cappadocia is a stunning natural wonder that features beautiful landscapes and a unique cultural heritage. It is a popular destination for hot air balloon rides, hiking, and cultural tours.",
    "PRICE": "293$"
  },
  {
    "DESTINATION": "Dubai",
    "DETAILS": "Dubai: Located in the United Arab Emirates, Dubai is a vibrant city that features stunning architecture, beautiful beaches, and a rich cultural heritage. It is a popular destination for sightseeing, shopping, and beachcombing.",
    "PRICE": "650$"
  },
  {
    "DESTINATION": "Samarkand",
    "DETAILS": "Samarkand: Located in Uzbekistan, Samarkand is an ancient city that features beautiful architecture and a rich cultural history. It is a popular destination for sightseeing and learning about ancient history.",
    "PRICE": "148$"
  },
  {
    "DESTINATION": "Almaty",
    "DETAILS": "Almaty: Located in Kazakhstan, Almaty is a stunning city that features beautiful architecture, stunning landscapes, and a unique cultural heritage. It is a popular destination for sightseeing, skiing, and cultural tours.",
    "PRICE": "437$"
  },
  {
    "DESTINATION": "Dushanbe",
    "DETAILS": "Dushanbe: Located in Tajikistan, Dushanbe is a vibrant city that features stunning architecture, beautiful parks, and a rich cultural heritage. It is a popular destination for sightseeing and cultural tours.",
    "PRICE": "764$"
  },
  {
    "DESTINATION": "Kakadu National Park",
    "DETAILS": "Kakadu National Park: Located in Australia, Kakadu National Park is a stunning natural wonder that features diverse wildlife, beautiful landscapes, and a unique cultural heritage. It is a popular destination for wildlife safaris, hiking, and cultural tours.",
    "PRICE": "174$"
  },
  {
    "DESTINATION": "Ningaloo Reef",
    "DETAILS": "Ningaloo Reef: Located in Australia, Ningaloo Reef is a beautiful reef that features stunning coral formations and diverse marine life. It is a popular destination for snorkeling, diving, and beachcombing.",
    "PRICE": "907$"
  },
  {
    "DESTINATION": "Cable Beach",
    "DETAILS": "Cable Beach: Located in Australia, Cable Beach is a stunning beach that features beautiful landscapes and crystal-clear waters. It is a popular destination for beachcombing, water sports, and cultural tours.",
    "PRICE": "732$"
  },
  {
    "DESTINATION": "Sydney Opera House",
    "DETAILS": "Sydney Opera House: Located in Australia, the Sydney Opera House is a stunning landmark that features beautiful architecture and a rich cultural history. It is a popular destination for sightseeing and learning about the arts.",
    "PRICE": "200$"
  },
  {
    "DESTINATION": "Blue Mountains National Park",
    "DETAILS": "Blue Mountains National Park: Located in Australia, the Blue Mountains National Park is a beautiful park that features stunning landscapes and diverse wildlife. It is a popular destination for hiking, wildlife safaris, and cultural tours.",
    "PRICE": "818$"
  },
  {
    "DESTINATION": "Fraser Island",
    "DETAILS": "Fraser Island: Located in Australia, Fraser Island is a stunning natural wonder that features beautiful landscapes and diverse wildlife. It is a popular destination for hiking, wildlife safaris, and beachcombing.",
    "PRICE": "277$"
  },
  {
    "DESTINATION": "Great Ocean Road",
    "DETAILS": "Great Ocean Road: Located in Australia, the Great Ocean Road is a scenic drive that features stunning coastal landscapes and beautiful beaches. It is a popular destination for sightseeing and beachcombing.",
    "PRICE": "953$"
  },
  {
    "DESTINATION": "Kangaroo Island",
    "DETAILS": "Kangaroo Island: Located in Australia, Kangaroo Island is a stunning natural wonder that features diverse wildlife, beautiful landscapes, and crystal-clear waters. It is a popular destination for wildlife safaris, beachcombing, and cultural tours.",
    "PRICE": "564$"
  },
  {
    "DESTINATION": "Yorke Peninsula",
    "DETAILS": "Yorke Peninsula: Located in Australia, the Yorke Peninsula is a beautiful peninsula that features stunning coastal landscapes and a unique cultural heritage. It is a popular destination for beachcombing, water sports, and cultural tours.",
    "PRICE": "436$"
  },
  {
    "DESTINATION": "Purnululu National Park",
    "DETAILS": "Purnululu National Park: Located in Australia, Purnululu National Park is a stunning natural wonder that features beautiful landscapes and unique geological formations. It is a popular destination for hiking and sightseeing.",
    "PRICE": "301$"
  },
  {
    "DESTINATION": "Coral Bay",
    "DETAILS": "Coral Bay: Located in Australia, Coral Bay is a stunning beach that features beautiful coral reefs and diverse marine life. It is a popular destination for snorkeling, diving, and beachcombing.",
    "PRICE": "621$"
  },
  {
    "DESTINATION": "Esperance",
    "DETAILS": "Esperance: Located in Australia, Esperance is a beautiful coastal town that features stunning beaches and crystal-clear waters. It is a popular destination for beachcombing, water sports, and cultural tours.",
    "PRICE": "858$"
  },
  {
    "DESTINATION": "Kings Canyon",
    "DETAILS": "Kings Canyon: Located in Australia, Kings Canyon is a stunning natural wonder that features beautiful landscapes and unique geological formations. It is a popular destination for hiking and sightseeing.",
    "PRICE": "479$"
  },
  {
    "DESTINATION": "Alice Springs",
    "DETAILS": "Alice Springs: Located in Australia, Alice Springs is a vibrant town that features stunning landscapes, diverse wildlife, and a unique cultural heritage. It is a popular destination for sightseeing, hiking, and cultural tours.",
    "PRICE": "141$"
  },
  {
    "DESTINATION": "Palm Valley",
    "DETAILS": "Palm Valley: Located in Australia, Palm Valley is a stunning natural wonder that features unique geological formations and diverse wildlife. It is a popular destination for hiking and sightseeing.",
    "PRICE": "648$"
  }
];

function makeCardClickable() {
  let cards = document.querySelectorAll(`[title]`);
  cards.forEach(card => {
    card.addEventListener('click', function () {
      const cardDetails = getDestinationDetail(card.title);
      makeDetailPopUp(cardDetails.DESTINATION, cardDetails.DETAILS, cardDetails.PRICE);
    });
  });
}


let detailsHeader = document.getElementById("detailsHeader");
let detailP = document.getElementById("details");
let priceHeader = document.getElementById("price");
function makeDetailPopUp(destination, details, price) {
  $('body').addClass('blurred');
  $('.box-modal').addClass('modal-show');


  $("#detailPopUp").addClass('active');
  $('#detailPopUp').removeClass('inactive');

  detailsHeader.innerText = destination;
  detailP.innerText = details;
  priceHeader.innerText = price;
}

function getDestinationDetail(title) {
  return details.find((dest) => dest.DESTINATION == title);
}

function exitPopUp() {
  $('body').removeClass('blurred');
  $('.box-modal').removeClass('modal-show');
  $('#detailPopUp').removeClass('active');

}
