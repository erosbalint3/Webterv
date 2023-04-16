<?php
    if (!isset($_SESSION)) {
        session_start();
    }
    $errorJson = file_get_contents("../JSON/errors.json");
    $jsonData = json_decode($errorJson, true);

    $servername = 'localhost';
    $username = 'root';
    $password = 'root';
    $conn = new mysqli($servername, $username, $password);
    if ($conn -> connect_error) {
        die("Connection failed: ".$conn -> connect_error);
    }

    $createDatabaseSql = "CREATE DATABASE IF NOT EXISTS felhasznalok";
    if ($conn -> query($createDatabaseSql) === false) {
        echo "Error creating database: ".$conn->error;
    }
    mysqli_select_db($conn, "felhasznalok");
    $createFelhasznalokTable = "CREATE TABLE IF NOT EXISTS Felhasznalok (
        id int NOT NULL AUTO_INCREMENT,
        username varchar(256),
        email varchar(256),
        password varchar(256),
        PRIMARY KEY (id),
        profilepic varchar(512),
        description varchar(1024)
        )
    ";
    mysqli_query($conn, $createFelhasznalokTable);

    $userNameUzenet = "";
    $emailUzenet = "";
    $passwordFormatUzenet = "";
    $passwordsNotEqualsUzenet = "";

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $_SESSION['postdata'] = $_POST;
        unset($_POST);
        header("Location: ".$_SERVER['PHP_SELF']);
        exit;

    }

    if (array_key_exists('postdata', $_SESSION)) {
        if (isset($_SESSION['postdata']['submitButton'])) {
            if (
                checkIfUserNameIsEmpty() &&
                checkEmailAddressFormatIsValid() &&
                checkPasswordCorrectFormatAndEqualsToRepeated()
            ) {
                $password = $_SESSION['postdata']['password'];
                $email = $_SESSION['postdata']['emailAddress'];
                $username = $_SESSION['postdata']['userName'];
                $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
                $profilepic = isset($_SESSION['profilepic']) ? $_SESSION['profilepic'] : '../Images/avatar.jpg';
                $description = isset($_SESSION['description']) ? $_SESSION['description'] : '';

                $saveFelhasznalo = "INSERT INTO Felhasznalok (username, email, password, profilepic, description)
                                            VALUES ('$username', '$email', '$hashedPassword', '$profilepic', '$description')";
                if (!checkIfUserAlreadyExists($email)) {
                    $conn->query($saveFelhasznalo);
                } else {
                    echo '<script>alert("Error in creating user, it already exists!")</script>';
                }
            }
        }
        // After using the postdata, don't forget to unset/clear it
        unset($_SESSION['postdata']);
        session_abort();
    }

    function checkIfUserAlreadyExists($email) : bool {
        $getFelhasznaloByEmailAddress = "SELECT * FROM Felhasznalok WHERE felhasznalok.Felhasznalok.email = '$email'";
        $result = $GLOBALS['conn'] -> query($getFelhasznaloByEmailAddress);
        if (mysqli_num_rows($result) == 0) {
            return false;
        }
        else {
            return true;
        }
    }

    function emailRegex($input) {
        $regex = '/[A-Za-z0-9]+@[A-Za-z]+\\.[A-Za-z]+/i';
        return preg_match($regex, $input);
    }
    function passwordRegex($input) {
        $regex = '/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@%&#:;,?~_]).{8,32}$/m';
        return preg_match($regex, $input);
    }
    function checkIfUserNameIsEmpty() : bool {
        global $userNameUzenet;
        $userName = $_SESSION['postdata']['userName'];
        if (strlen($userName) == 0) {
            $userNameUzenet = "<p><strong>Hiba!</strong>".$GLOBALS['jsonData']['userNameEmpty']."</p>";
            return false;
        }
        return true;
    }
    function checkEmailAddressFormatIsValid() : bool {
        global $emailUzenet;
        $email = $_SESSION['postdata']['emailAddress'];
        if (strlen($email) == 0) {
            $emailUzenet = "<p><strong>Hiba!</strong>".$GLOBALS['jsonData']['emailEmpty']."</p>";
            return false;
        } else if (!emailRegex($email)) {
            $emailUzenet = "<p><strong>Hiba!</strong>".$GLOBALS['jsonData']['emailWrongFormat']."</p>";
            return false;
        } else {
            $emailUzenet = "";
            return true;
        }
    }
    function checkPasswordCorrectFormatAndEqualsToRepeated() : bool {
        global $passwordFormatUzenet;
        global $passwordsNotEqualsUzenet;
        $password = $_SESSION['postdata']['password'];
        $passwordRepeated = $_SESSION['postdata']['passwordRepeated'];
        if (strlen($password) < 8) {
            $passwordFormatUzenet = "<p><strong>Hiba!</strong>".$GLOBALS['jsonData']['passwordTooShort']."</p>";
            return false;
        } else if (!passwordRegex($password)) {
            echo $password;
            $passwordFormatUzenet = "<p><strong>Hiba!</strong> ".$GLOBALS['jsonData']['passwordWrongFormat']."</p>";
            return false;
        } else if ($password != $passwordRepeated) {
            $passwordsNotEqualsUzenet = "<p><strong>Hiba!</strong>".$GLOBALS['jsonData']['passwordsDontMatch']."</p>";
            return false;
        } else {
            return true;
        }
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Register</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../CSS/kozos.css">
    <link rel="stylesheet" href="../CSS/register.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <span id="logo">
            <img src="../Images/logo.png" alt="Logo">
        </span>
        <span id="navigationBar">
            <a href="../HTML/login.php">Log in</a>
        </span>
    </header>
    <main>
        <form method="POST" action="register.php" id="registerForm">
            <label for="userName">Username</label>
            <input type="text" id="userName" name="userName">
            <small id="userNameError"></small>
            <?php echo $userNameUzenet; ?>
            <label for="emailAddress">Email</label>
            <input type="text" id="emailAddress" name="emailAddress">
            <small id="emailAddressError"></small>
            <?php echo $emailUzenet; ?>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" min="8">
            <small id="passwordError"></small>
            <?php echo $passwordFormatUzenet; ?>
            <label for="passwordAgain">Password again</label>
            <input type="password" id="passwordAgain" name="passwordRepeated" minlength="8">
            <small id="passwordAgainError"></small>
            <?php echo $passwordsNotEqualsUzenet; ?>
            <input type="submit" name="submitButton">
        </form>
    </main>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../JS/kozos.js"></script>
    <script src="../JS/register.js"></script>
</body>

</html>