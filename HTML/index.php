<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <link rel="stylesheet" href="../CSS/index.css">
    <link rel="stylesheet" href="../CSS/kozos.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <meta charset="utf-8">
    <title>Home</title>
</head>

<body>
    <header>
        <div id="desktopHeader">
            <span id="logo">
                <img src="../Images/logo.png" alt="Logo">
            </span>
            <span id="navigationBar">
                <?php
                    if(!isset($_SESSION['loggedIn']) || $_SESSION['loggedIn'] !== true){
                        echo "<a>Home</a>";
                        echo "<a>Available destinations</a>";
                        echo "<a>Messages</a>";
                        echo "<a>Satisfaction survey</a>";
                        echo "<a>Contact</a>";
                        echo "<a>Log in</a>";
                    } else {
                        echo '<a href="../HTML/index.php">Home</a>';
                        echo '<a href="../HTML/destinations.php">Available destinations</a>';
                        echo '<a href="../HTML/messages.php">Messages</a>';
                        echo '<a href="../HTML/survey.php">Satisfaction survey</a>';
                        echo '<a href="../HTML/contact.php">Contact</a>';
                        echo "<a href='../HTML/login.php'>Log out</a>";
                        echo '<a href="../HTML/profile.php">Profile</a>';
                    }
                ?>
            </span>
        </div>
        <div id="mobileHeader">
            <button id="menuButton"><img src="../Images/menu.png" alt="menu"></button>
            <ul id="links">
                <li id="home"><a  href="../HTML/index.php">Home</a></li>
                <li id="dest"><a  href="../HTML/destinations.php">Available destinations</a></li>
                <li id="messages"><a  href="../HTML/messages.php">Messages</a></li>
                <li id="surveyLink"><a    href="../HTML/survey.php">Satisfaction survey</a></li>
                <li id="contact"><a  href="../HTML/contact.php">Contact</a></li>
                <li><a  href="../HTML/login.php">Log in</a></li>
                <li id="profile"><a  href="../HTML/profile.php">Profile</a></li>
            </ul>
        </div>
    </header>
    <div id="body">
        <div id="welcomeLabel">
            <h1>Never stop exploring the world! Try the imaginary Erasmus program!</h1>
        </div>
        <div id="cards">
            <div class="card" id="card1">
                <div class="overlay">
                    <h2>Australia</h2>
                </div>
            </div>
            <div class="card" id="card2">
                <div class="overlay">
                    <h2>Europe</h2>
                </div>
            </div>
            <div class="card" id="card3">
                <div class="overlay">
                    <h2>America</h2>
                </div>
            </div>
            <div class="card" id="card4">
                <div class="overlay">
                    <h2>Africa</h2>
                </div>
            </div>
            <div class="card" id="card5">
                <div class="overlay">
                    <h2>Asia</h2>
                </div>
            </div>
        </div>
    </div>
    <div id="pictureNavigationBar">
        <div id="navigationButtons">

        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../JS/kozos.js"></script>
</body>
</html>