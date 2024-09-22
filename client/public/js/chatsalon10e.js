$(document).ready(function () {
  $("#content").load("navbar.html");
});
document
  .getElementById("chatRoomForm")
  .addEventListener("submit", function (event) {
    const roomName1 = document.getElementById("roomName1").value.trim();
    if (!roomName1) {
      alert("Le nom du Salon 1 est obligatoire.");
      event.preventDefault(); // Prevent form submission
    }
  });
