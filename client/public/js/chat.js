$(document).ready(function () {
  $("#content").load("navbar.html");
});
import Filter from "bad-words";

document.addEventListener("DOMContentLoaded", function () {
  const chatForm = document.getElementById("chatForm");
  const messageInput = document.getElementById("messageInput");
  const chatMessages = document.getElementById("chatMessages");
  const typingIndicator = document.getElementById("typingIndicator");

  // Create a new Filter instance
  const filter = new Filter();

  // Show typing indicator
  messageInput.addEventListener("input", function () {
    typingIndicator.style.display = "block";
    setTimeout(() => {
      typingIndicator.style.display = "none";
    }, 1000); // Show for 1 second
  });

  chatForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const message = messageInput.value.trim();

    // Check for censored words
    if (filter.isProfane(message)) {
      alert(
        "Votre message contient des mots inappropriés et ne peut pas être envoyé."
      );
      messageInput.value = ""; // Clear input
      return;
    }

    // Append message to chat area
    const newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.innerHTML = `<strong>Vous :</strong> ${message}`;
    chatMessages.appendChild(newMessage);

    // Clear input field
    messageInput.value = "";
  });
});
