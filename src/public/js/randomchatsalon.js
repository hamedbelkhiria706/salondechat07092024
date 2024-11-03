// Simulate joining a random chat room
const roomName =
  new URLSearchParams(window.location.search).get("room") || "Salon Aléatoire";
$("#chatRoomName").text(roomName);

$("#chatForm").on("submit", function (event) {
  event.preventDefault();
  const message = $(this).find("input").val();
  $("#chatArea").append(
    `<div class="chat-message"><strong>Vous:</strong> ${message}</div>`
  );
  $(this).find("input").val(""); // Clear input
  $("#chatArea").scrollTop($("#chatArea")[0].scrollHeight); // Scroll to bottom
});
