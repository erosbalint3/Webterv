<?php
    require_once 'user.php';
    session_start();
    if (!isset($_SESSION['user'])) {
        header('Location: login.php');
        exit;
    }
    $user = $_SESSION['user'];
    $servername = 'localhost';
    $username = 'root';
    $password = 'root';
    $database = 'rating';
    $conn = new mysqli($servername, $username, $password);
    if ($conn -> connect_error) {
        die("Connection failed: ".$conn -> connect_error);
    }
    $createDatabaseSql = "CREATE DATABASE IF NOT EXISTS rating";
    if ($conn -> query($createDatabaseSql) === false) {
        echo "Error creating database: ".$conn->error;
    }
    mysqli_select_db($conn, "rating");
    $createRatingTable = "CREATE TABLE IF NOT EXISTS Rating (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username varchar(256),
        overall int,
        ticketing int,
        os int,
        cs int
        )
    ";
    mysqli_query($conn, $createRatingTable);
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = $user->getUsername();
        $overall = $_POST['overall'];
        $ticketing = $_POST['ticketing'];
        $os = $_POST['os'];
        $cs = $_POST['cs'];
        $saveFelhasznalo = "INSERT INTO Rating (username, overall, ticketing, os, cs)
                            VALUES ('$username', '$overall', '$ticketing', '$os', '$cs')";
        if (mysqli_query($conn, $saveFelhasznalo)) {
            header('Location: rating.php');
            exit;
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }
?>
<!DOCTYPE html>
<html lang="hu">

<head>
    <title>Satisfaction survey</title>
    <link rel="stylesheet" href="../CSS/survey.css">
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
    <div id="body">
        <div id="title">
            <h1>Please rate us!</h1>
        </div>
        <div id="survey">
            <form method="POST" action="survey.php">
                <table>
                    <tr>
                        <th></th>
                        <th>Very unsatisfied</th>
                        <th>Unsatisfied</th>
                        <th>Neutral</th>
                        <th>Satisfied</th>
                        <th>Very satisfied</th>
                    </tr>
                    <tr>
                        <td style="text-align: left;">Overall satisfaction</td>
                        <td><input type="radio" name="overall" value="1"></td>
                        <td><input type="radio" name="overall" value="2"></td>
                        <td><input type="radio" name="overall" value="3"></td>
                        <td><input type="radio" name="overall" value="4"></td>
                        <td><input type="radio" name="overall" value="5"></td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">Ticketing</td>
                        <td><input type="radio" name="ticketing" value="1"></td>
                        <td><input type="radio" name="ticketing" value="2"></td>
                        <td><input type="radio" name="ticketing" value="3"></td>
                        <td><input type="radio" name="ticketing" value="4"></td>
                        <td><input type="radio" name="ticketing" value="5"></td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">Online services</td>
                        <td><input type="radio" name="os" value="1"></td>
                        <td><input type="radio" name="os" value="2"></td>
                        <td><input type="radio" name="os" value="3"></td>
                        <td><input type="radio" name="os" value="4"></td>
                        <td><input type="radio" name="os" value="5"></td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">Customer services</td>
                        <td><input type="radio" name="cs" value="1"></td>
                        <td><input type="radio" name="cs" value="2"></td>
                        <td><input type="radio" name="cs" value="3"></td>
                        <td><input type="radio" name="cs" value="4"></td>
                        <td><input type="radio" name="cs" value="5"></td>
                    </tr>
                </table>
                <input type="submit" value="Submit">
            </form>
            <form method="POST" id="mobile">
                <fieldset>
                    <legend>Overall Satisfaction</legend>
                    <span>
                        <input type="radio" name="overall" id="satOne" value="1">
                        <label for="satOne">Very bad</label>
                    </span>
                    <span>
                        <input type="radio" name="overall" id="satTwo" value="2">
                        <label for="satTwo">Bad</label>
                    </span>
                    <span>
                        <input type="radio" name="overall" id="satThree" value="3">
                        <label for="satThree">Moderate</label>
                    </span>
                    <span>
                        <input type="radio" name="overall" id="satFour" value="4">
                        <label for="satFour">Great</label>
                    </span>
                    <span>
                        <input type="radio" name="overall" id="satFive" value="5">
                        <label for="satFive">Excellent</label>
                    </span>
                </fieldset>

                <fieldset>
                    <legend>Ticketing</legend>
                    <span>
                        <input type="radio" name="ticketing" id="tickOne" value="1">
                        <label for="tickOne">Very bad</label>
                    </span>
                    <span>
                        <input type="radio" name="ticketing" id="tickTwo" value="2">
                        <label for="tickTwo">Bad</label>
                    </span>
                    <span>
                        <input type="radio" name="ticketing" id="tickThree" value="3">
                        <label for="tickThree">Moderate</label>
                    </span>
                    <span>
                        <input type="radio" name="ticketing" id="tickFour" value="4">
                        <label for="tickFour">Great</label>
                    </span>
                    <span>
                        <input type="radio" name="ticketing" id="tickFive" value="5">
                        <label for="tickFive">Excellent</label>
                    </span>
                </fieldset>

                <fieldset>
                    <legend>Online services</legend>
                    <span>
                        <input type="radio" name="os" id="onlOne" value="1">
                        <label for="onlOne">Very bad</label>
                    </span>
                    <span>
                        <input type="radio" name="os" id="onlTwo" value="2">
                        <label for="onlTwo">Bad</label>
                    </span>
                    <span>
                        <input type="radio" name="os" id="onlThree" value="3">
                        <label for="onlThree">Moderate</label>
                    </span>
                    <span>
                        <input type="radio" name="os" id="onlFour" value="4">
                        <label for="onlFour">Great</label>
                    </span>
                    <span>
                        <input type="radio" name="os" id="onlFive" value="5">
                        <label for="onlFive">Excellent</label>
                    </span>
                </fieldset>

                <fieldset>
                    <legend>Customer services</legend>
                    <span>
                        <input type="radio" name="cs" id="cusOne" value="1">
                        <label for="cusOne">Very bad</label>
                    </span>
                    <span>
                        <input type="radio" name="cs" id="cusTwo" value="2">
                        <label for="cusTwo">Bad</label>
                    </span>
                    <span>
                        <input type="radio" name="cs" id="cusThree" value="3">
                        <label for="cusThree">Moderate</label>
                    </span>
                    <span>
                        <input type="radio" name="cs" id="cusFour" value="4">
                        <label for="cusFour">Great</label>
                    </span>
                    <span>
                        <input type="radio" name="cs" id="cusFive" value="5">
                        <label for="cusFive">Excellent</label>
                    </span>
                </fieldset>
            </form>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../JS/kozos.js"></script>
</body>

</html>