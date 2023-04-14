<?php
    require_once "user.php";
    session_start();
    if (!isset($_SESSION['user'])) {
        header("Location: login.php");
        exit();
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

    if (isset($_FILES['file'])) {
        $tmpname = $_FILES['file']['tmp_name'];
        $name = $_FILES['file']['name'];
        $newName = "../Images/".$name;
        if (is_uploaded_file($tmpname)) {
            move_uploaded_file($tmpname, $newName);
        }
        $userProfilepic = $newName;
        $description = $_POST['description'];
        $userEmail = $user->getEmail();
        $editFelhasznaloQuery = "UPDATE Felhasznalok SET profilepic = '$userProfilepic', description = '$description' WHERE email = '$userEmail'";
        $conn->query($editFelhasznaloQuery);
        $_SESSION['user']->setProfilepic($newName);
        $_SESSION['user']->setDescription($description);
        header("Location: profile.php");
    }
?>