<?php
	require_once "user.php";
	session_start();
	if(!isset($_SESSION['user'])) {
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
	$getProfilesQuery = "SELECT * FROM Felhasznalok";
	$profiles = $conn->query($getProfilesQuery);
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Public Profiles</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="../CSS/kozos.css">
	<link rel="stylesheet" href="../CSS/profiles.css">
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
<div id="container">
	<div id="profileCards">
		<?php
			while($row = $profiles->fetch_array(MYSQLI_ASSOC)) {
				echo "<div class='profileCard'>";
				echo "<h1>".$row['username']."</h1>";
				echo "<b> Email: </b>";
				echo "<p>".$row['email']."</p>";
				echo "<b> Description: </b>";
				echo "<p>".$row['description']."</p>";
				echo "<b> Profile picture: </b>";
				echo "<img src='".$row['profilepic']."' alt='$username'>";
				echo "</div>";
			}
		?>
	</div>
</div>
</body>
</html>