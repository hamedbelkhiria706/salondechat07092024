$(document).ready(function () {
  $("#content").load("navbar.ejs");

  // Simulate joining a random chat room
  const roomName =
    new URLSearchParams(window.location.search).get("room") ||
    "Salon Aléatoire";
  $("#chatRoomName").text(roomName);
});
import { Filter } from "https://cdn.jsdelivr.net/npm/bad-words@4.0.0/+esm";

import { array } from "https://cdn.jsdelivr.net/npm/french-badwords-list@1.0.7/+esm";

$("#chatForm").on("submit", function (event) {
  event.preventDefault();

  //const message = $(this).find("input").val();
  const chatForm = document.getElementById("chatForm");
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value.trim();
  const chatMessages = document.getElementById("chatArea");
  const typingIndicator = document.getElementById("typingIndicator");

  // Create a new Filter instance from the global bad-words library

  const filter = new Filter();
  array.forEach((word) => filter.addWords(word));
  var tab = [];
  function loadArabicBadWords() {
    return fetch(
      "../../old/arabic-bad-words-list_text-file_one-word-per-line.csv"
    ) // Update this path
      .then((response) => response.text())
      .then((text) => {
        const decoder = new TextDecoder("utf-8"); // Ensure UTF-8 decoding
        const words = decoder
          .decode(new TextEncoder().encode(text))
          .split("\n")
          .map((word) => word.trim())
          .filter((word) => word);
        tab = words;
        words.forEach((word) => {
          filter.addWords(word);
        });
      })
      .catch((error) =>
        console.error("Error loading Arabic bad words:", error)
      );
  }

  loadArabicBadWords().then(() => {
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
        errorMessage.style.display = "block"; // Show the error message
        // messageInput.value = filter.clean(messageInput.value);
        //  messageInput.value = ""; // Clear input

        return;
      } else if (tab.some((word) => message.includes(word))) {
        errorMessage.style.display = "block"; // Show the error message
        // messageInput.value = filter.clean(messageInput.value);
        //  messageInput.value = ""; // Clear input
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
  /*
  $("#chatArea").append(
    `<div class="chat-message"><strong>Vous:</strong> ${message}</div>`
  );
  $(this).find("input").val(""); // Clear input*/
  $("#chatArea").scrollTop($("#chatArea")[0].scrollHeight); // Scroll to bottom
});
