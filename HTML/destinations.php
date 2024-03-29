<!DOCTYPE html>
<html lang="hu">

<head>
    <title>Available destinations</title>
    <link rel="stylesheet" href="../CSS/destinations.css">
    <link rel="stylesheet" href="../CSS/kozos.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <meta charset="utf-8">
</head>

<body>
    <header>
        <div id="desktopHeader">
            <span id="logo">
                <img src="../Images/logo.png" alt="Logo">
            </span>
            <span id="navigationBar">
                <a href="../HTML/index.php">Home</a>
                <a href="../HTML/destinations.php">Available destinations</a>
                <a href="../HTML/messages.php">Messages</a>
                <a href="../HTML/survey.php">Satisfaction survey</a>
                <a href="../HTML/contact.php">Contact</a>
                <a href="../HTML/login.php">Log in</a>
                <a href="../HTML/profile.php">Profile</a>
                <a href="../HTML/publicProfiles.php">Public Profiles</a>
            </span>
        </div>
        <div id="mobileHeader">
            <button id="menuButton"><img src="../Images/menu.png" alt="menu"></button>
            <ul id="links">
                <li id="home"><a href="../HTML/index.php">Home</a></li>
                <li id="dest"><a href="../HTML/destinations.php">Available destinations</a></li>
                <li id="messages"><a href="../HTML/messages.php">Messages</a></li>
                <li id="surveyLink"><a href="../HTML/survey.php">Satisfaction survey</a></li>
                <li id="contact"><a href="../HTML/contact.php">Contact</a></li>
                <li><a href="../HTML/login.php">Log in</a></li>
                <li id="profile"><a href="../HTML/profile.php">Profile</a></li>
                <li id="publicProfiles"><a href="../HTML/publicProfiles.php">Public Profiles</a></li>
            </ul>
        </div>
    </header>
    <main>
        <aside>
            <button id="backButton" onclick="backToCategories()">Back to main categories</button>
            <ul>
                <li id="lowerEuropaLi"> <span>Europe</span> <span class="right">↓</span></li>
                <li style="background-color: rgba(0,0,0,0);">
                    <ul id="lowerEuropa" class="lowerInactiveEuropa">
                        <li id="wEur">Western-Europe</li>
                        <li id="cEur">Central-Europe</li>
                        <li id="eEur">Eastern-Europe</li>
                        <li id="sEur">Southern-Europe</li>
                        <li id="nEur">Northern-Europe</li>
                    </ul>
                </li>
                <li id="lowerAmerikaLi"><span>North-America</span> <span class="right">↓</span></li>
                <li style="background-color: rgba(0,0,0,0);">
                    <ul id="lowerAmerika" class="lowerInactiveAmerika">
                        <li id="cAmer">Canada</li>
                        <li id="hAmer">Hawaii</li>
                        <li id="kAmer">Colorado</li>
                        <li id="tAmer">California</li>
                        <li id="oAmer">Oregon</li>
                    </ul>
                </li>
                <li id="lowerAfrikaLi"><span>Africa</span> <span class="right">↓</span></li>
                <li style="background-color: rgba(0,0,0,0);">
                    <ul id="lowerAfrika" class="lowerInactiveAfrika">
                        <li id="nAfr">Northern-Africa</li>
                        <li id="eAfr">Eastern-Africa</li>
                        <li id="sAfr">Southern-Africa</li>
                        <li id="wAfr">Western-Africa</li>
                        <li id="cAfr">Central-Africa</li>
                    </ul>
                </li>
                <li id="lowerAzsiaLi"><span>Asia</span> <span class="right">↓</span></li>
                <li style="background-color: rgba(0,0,0,0);">
                    <ul id="lowerAzsia" class="lowerInactiveAzsia">
                        <li id="nAsia">Northern-Asia</li>
                        <li id="eAsia">Eastern-Asia</li>
                        <li id="sAsia">Southern-Asia</li>
                        <li id="wAsia">Western-Asia</li>
                        <li id="cAsia">Central-Asia</li>
                    </ul>
                </li>
                <li id="lowerAusztraliaLi"><span>Australia</span> <span class="right">↓</span></li>
                <li style="background-color: rgba(0,0,0,0);">
                    <ul id="lowerAusztralia" class="lowerInactiveAusztralia">
                        <li id="nAus">Northern-Australia</li>
                        <li id="eAus">Eastern-Australia</li>
                        <li id="sAus">Southern-Australia</li>
                        <li id="wAus">Western-Australia</li>
                        <li id="cAus">Central-Australia</li>
                    </ul>
                </li>
            </ul>
        </aside>
        <div id="cardSection">
            <div id="europeCard" class="card" style="background-image: url('../Images/europe.jpg')">
                <div class="cardOverlay">
                    <h2>Europe</h2>
                </div>
            </div>
            <div id="americaCard" class="card" style="background-image: url('../Images/america.jpg')">
                <div class="cardOverlay">
                    <h2>America</h2>
                </div>
            </div>
            <div id="africaCard" class="card" style="background-image: url('../Images/africa.jpg')">
                <div class="cardOverlay">
                    <h2>Africa</h2>
                </div>
            </div>
            <div id="asiaCard" class="card" style="background-image: url('../Images/asia.jpg')">
                <div class="cardOverlay">
                    <h2>Asia</h2>
                </div>
            </div>
            <div id="australiaCard" class="card" style="background-image: url('../Images/australia.jpg')">
                <div class="cardOverlay">
                    <h2>Australia</h2>
                </div>
            </div>
        </div>
        <div class="box-modal">
            <div id="overlay" class="overlay"></div>
            <div id="body-modal">
                <div id="detailPopUp" class="inactive">
                    <button onclick="exitPopUp()" id="exitButton"><img src="../Images/exitIcon.gif" alt="Exit"></button>
                    <h1 id="detailsHeader">&nbsp;</h1>
                    <p id="details">&nbsp;</p>
                    <h3 id="price">&nbsp;</h3>
                </div>
            </div>
        </div>
    </main>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../JS/destinations.js"></script>
    <script src="../JS/kozos.js"></script>
</body>

</html>