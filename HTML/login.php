<?php
$errorJson = file_get_contents("../JSON/errors.json");
$jsonData = json_decode($errorJson, true);

$emailUzenet = "";
$passwordFormatUzenet = "";

$username = "root";
$password = "root";
$host = "localhost";
$conn = mysqli_connect($host, $username, $password);
mysqli_select_db($conn, "felhasznalok");

require_once 'user.php'; 
session_start();
if (isset($_SESSION['user'])) {
    header('Location: profile.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['submitButton'])) {
        $password = $_POST['password'];
        $email = $_POST['emailAddress'];
        $user = getUserByEmail($email);

        if (
            checkEmailAddressFormatIsValid() &&
            checkPasswordNotEmpty() &&
            $email == $user->getEmail() &&
            password_verify($password, $user->getHashedPassword())
        ) {
            session_start();
            $_SESSION['user'] = $user;
            header('Location: '.'../HTML/profile.php');
        }
    }
}
function emailRegex($input) {
    $regex = '/[A-Za-z0-9]+@[A-Za-z]+\\.[A-Za-z]+/i';
    return preg_match($regex, $input);
}
function checkEmailAddressFormatIsValid() : bool {
    global $emailUzenet;
    $email = $_POST['emailAddress'];
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
function checkPasswordNotEmpty() : bool {
    global $passwordFormatUzenet;
    if (strlen($_POST['password']) == 0) {
        $passwordFormatUzenet = "<p><strong>Hiba!</strong>".$GLOBALS['jsonData']['passwordEmpty']."</p>";
        return false;
    }
    return true;
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
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Log in</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="../CSS/login.css">
        <link rel="stylesheet" href="../CSS/kozos.css">
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    </head>
    <body>
        <header>
            <span id="logo">
                <img src="../Images/logo.png" alt="Logo">
            </span>
            <span id="navigationBar">
                <a href="../HTML/register.php">Register</a>
            </span>
        </header>
        <main>
            <form method="POST" action="login.php">
                <label for="emailAddress">Email</label>
                <input type="text" id="emailAddress" name="emailAddress">
                <?php echo $emailUzenet; ?>
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
                <?php echo $passwordFormatUzenet; ?>
                <input type="submit" id="submitButton" name="submitButton" onclick="login()" value="Log in">
            </form>
            <div id="horizontalLine">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <button onclick="login()">Forgot password</button>

        </main>
        <script src="../JS/login.js"></script>
    </body>
</html>