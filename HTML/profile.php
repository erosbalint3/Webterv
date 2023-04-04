<!DOCTYPE html>
<html lang="en">

<head>
    <title>My profile</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../CSS/profile.css">
    <link rel="stylesheet" href="../CSS/kozos.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
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
            </ul>
        </div>
    </header>
    <div class="container">
        <img class="profile-picture" src="../Images/erosBalintProfilkep.jpg" alt="Profile Picture">
        <h1>Erős Bálint</h1>
        <div class="description">
            Erős Bálint vagyok. A Szegedi Tudományegyetem programtervező informatikus szakán tanulok. Emellett a Sonrisa
            informatikai kft. cégnél dolgozok részmunkaidőben webfejlesztőként.
        </div>
        <div class="contact-info">
            <div>
                <img src="https://img.icons8.com/material-rounded/24/000000/email.png" alt="emailicon">
                ilyenKonnyenNemKapodEl@gmail.com
            </div>
            <div>
                <img src="https://img.icons8.com/material-outlined/24/000000/phone--v1.png" alt="phoneIcon">
                123-456-7890
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../JS/kozos.js"></script>
</body>

</html>