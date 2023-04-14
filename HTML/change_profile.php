<?php
    require_once 'user.php';
    if (!isset($_SESSION)) {
        session_start();
    }
    if (!isset($_SESSION['user'])) {
        header('Location: login.php');
        exit;
    }
    if (isset($_POST['editUser'])) {
        echo $_FILES['file']['name'];
    }
    $user = $_SESSION['user'];
    $servername = 'localhost';
    $username = 'root';
    $password = 'root';
    $conn = new mysqli($servername, $username, $password);
    if ($conn -> connect_error) {
        die("Connection failed: ".$conn -> connect_error);
    }
    mysqli_select_db($conn, "felhasznalok");
    $profilepic = "";
    $description = "";
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $_SESSION['postdata'] = $_POST;
        $_SESSION['files'] = $_FILES;
        header('Location:'.$_SERVER['PHP_SELF']);
        exit;
    }

    function getUserByEmail($email) {
        $getUserQuery = "SELECT * FROM Felhasznalok WHERE email = '$email'";
        $user = mysqli_query($GLOBALS['conn'], $getUserQuery);
        if (mysqli_num_rows($user) > 0) {
            while($rowData = mysqli_fetch_array($user)){
                $newUser = new User($rowData['username'], $rowData['email'], $rowData['password'], $rowData['profilepic'], $rowData['description']);
                return $newUser;
            }
        }
        return null;
    }


    if (array_key_exists('postdata', $_SESSION)) {
        if (isset($_SESSION['postdata']['profilepic'])) {
            $profilepic = $_SESSION['postdata']['profilepic'];
        }
        if (isset($_SESSION['postdata']['description'])) {
            $description = $_SESSION['postdata']['description'];
        }
        echo "<br><br><br>";
        echo $profilepic;
        $userEmail = $user->getEmail();
        $tmpname = $_SESSION['files']['file']['tmp_name'];
        $name = $_SESSION['files']['file']['name'];
        $path = $_SESSION['files']['file']['tmp_name']."/".$_SESSION['files']['file']['name'];
        $newPath = "../Images/";
        $ext = ".jpg";
        echo $name;
        $newName = $newPath.$name;
        echo $newName;
        $userProfilepic = $newName;
        if (is_uploaded_file($tmpname)) {
            echo "uploaded";
        } else {
            echo "not uploaded";
        }
        $editFelhasznaloQuery = "UPDATE Felhasznalok SET profilepic = '$userProfilepic', description = '$description' WHERE email = '$userEmail'";
        $_SESSION['user'] = getUserByEmail($userEmail);
        $conn->query($editFelhasznaloQuery);
    }
?>
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
        <h1>Edit Profile</h1>
        <form action="change_profile.php" method="POST" enctype="multipart/form-data">
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
