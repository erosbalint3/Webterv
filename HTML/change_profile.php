<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Profile</title>
    <link rel="stylesheet" href="../CSS/profile.css">
    <link rel="stylesheet" href="../CSS/kozos.css">
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
                <li id="profile"><a href="../HTML/profile.php">Profile</a></li>
                <li id="publicProfiles"><a href="../HTML/publicProfiles.php">Public Profiles</a></li>
            </ul>
        </div>
    </header>
    <div class="container">
        <h1>Edit Profile</h1>
        <form action="upload.php" method="post" enctype="multipart/form-data">
            <label for="profilepic">Profile Picture:</label>
            <input type="file" name="file" id="profilepic">
            <br>
            <label for="description">Description:</label>
            <input type="text" name="description" id="description" placeholder="Describe yourself">
            <br>
            <input type="submit" name="editUser" >
        </form>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../JS/kozos.js"></script>
</body>
</html>
