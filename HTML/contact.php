<!DOCTYPE html>
<html lang="hu">

<head>
    <title>Contact</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../CSS/kozos.css">
    <link rel="stylesheet" href="../CSS/contact.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
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
    <div id="elements">
        <div id="contactInformations">
            <h2>Travel agency</h2>
            <ul>
                <li>
                    <img src="../Images/emailIcon.gif" alt="Email:">
                    <span>travel-agency-support@travel.com</span>
                </li>
                <li>
                    <img src="../Images/telephoneIcon.gif" alt="Telephone:">
                    <span>+321/12-34-56789</span>
                </li>
                <li>
                    <span>Report a problem here: </span>
                    <img src="../Images/reportIcon.gif" id="report" alt="Write a report">
                </li>
            </ul>
        </div>
        <div id="emailDialog">
            <form method="post">
                <label for="from">From:</label>
                <input type="text" id="from" name="from">
                <label for="to">To:</label>
                <input type="text" id="to" name="to">
                <label for="message">Message:</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </form>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../JS/contact.js"></script>
    <script src="../JS/kozos.js"></script>
</body>

</html>