const messageForm = document.querySelector("#message-form");
const messageContainer = document.querySelector("#message-container");

const sendMessage = () => {
  // Get the message input
  const messageInput = messageForm.querySelector("input[type='text']");
  const messageText = messageInput.value.trim();

  if (messageText !== "") {
    // Create a new message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "sent");
    
    const messageInfo = document.createElement("div");
    messageInfo.classList.add("message-info");
    
    const senderName = document.createElement("h2");
    senderName.innerText = "You";
    messageInfo.appendChild(senderName);
    
    const messageTime = document.createElement("span");
    messageTime.classList.add("message-time");
    messageTime.innerText = getCurrentTime();
    messageInfo.appendChild(messageTime);
    
    messageElement.appendChild(messageInfo);
    
    const messageContent = document.createElement("p");
    messageContent.innerText = messageText;
    messageElement.appendChild(messageContent);
    
    // Add the message to the container
    messageContainer.appendChild(messageElement);
    
    // Clear the message input
    messageInput.value = "";
    
    // Scroll to the bottom of the container
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
};

const getCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM";
  
  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  
  return `${hours}:${minutes} ${amPm}`;
};

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

// Get the chat summaries
const chatSummaries = document.querySelectorAll('.chat-summary');

// Loop through each chat summary
chatSummaries.forEach(summary => {
  // Add a click event listener to the summary
  summary.addEventListener('click', () => {
    // Toggle the "active" class on the summary
    summary.classList.toggle('active');
    // Toggle the "unread" class on the status element
    const status = summary.querySelector('.status');
    status.classList.toggle('unread');
    status.classList.toggle('read');
  });
});
