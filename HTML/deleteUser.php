<?php
    require_once "user.php";
    session_start();
    if (!isset($_SESSION['user'])) {
        header("Location: login.php");
        exit;
    }

    $servername = 'localhost';
    $username = 'root';
    $password = 'root';
    $conn = new mysqli($servername, $username, $password);
    if ($conn -> connect_error) {
        die("Connection failed: ".$conn -> connect_error);
    }
    mysqli_select_db($conn, "felhasznalok");
    $user = $_SESSION['user'];
    $email = $user->getEmail();

    if (isset($_POST['delete'])) {
        $deleteUserQuery = "DELETE FROM Felhasznalok WHERE email = '$email'";
        $conn->query($deleteUserQuery);
        session_destroy();
        header("Location: login.php");
    }
?>