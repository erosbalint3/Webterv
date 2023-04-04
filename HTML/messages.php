<!DOCTYPE html>
<html lang="hu">

<head>
  <title>Messages</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="../CSS/kozos.css">
  <link rel="stylesheet" href="../CSS/messages.css">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
  <main>
    <div class="previous-chats">
      <ul>
        <li>
          <div class="chat-summary">
            <div class="avatar">
              <img src="../Images/avatar.jpg" alt="User 1 Avatar">
            </div>
            <div class="chat-preview">
              <h3>Bálint Oláh</h3>
              <p>I'm good, thanks for asking.</p>
            </div>
            <div class="chat-meta">
              <span class="time">2:30 PM</span>
              <span class="status unread">1</span>
            </div>
          </div>
        </li>
        <li>
          <div class="chat-summary">
            <div class="avatar">
              <img src="../Images/avatar2,jpg.jpeg" alt="User 2 Avatar">
            </div>
            <div class="chat-preview">
              <h3>Teszt Elek</h3>
              <p>Thanks for your help earlier. Everything is working now.</p>
            </div>
            <div class="chat-meta">
              <span class="time">10:15 AM</span>
              <span class="status read"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div id="message-container">
      <div class="message">
        <div class="message-info">
          <h2>Bálint Oláh</h2>
          <span class="message-time">1:30 PM</span>
        </div>
        <p>Hello, how are you?</p>
      </div>
      <div class="message sent">
        <div class="message-info">
          <h2>You</h2>
          <span class="message-time">1:32 PM</span>
        </div>
        <p>Hi, I'm doing well. How about you?</p>
      </div>
      <div class="message">
        <div class="message-info">
          <h2>Bálint Oláh</h2>
          <span class="message-time">1:35 PM</span>
        </div>
        <p>I'm good, thanks for asking.</p>
      </div>
    </div>
  </main>

  <form id="message-form">
    <input type="text" placeholder="Type a message...">
    <button>Send</button>
  </form>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="../JS/messages.js"></script>
  <script src="../JS/kozos.js"></script>
</body>

</html>