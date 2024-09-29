$(document).ready(function () {
  $("#content").load("navbar.html");
});
// Join chat room functionality
$(document).on("click", ".rejoindre", function () {
  const roomName = $(this).data("room");
  window.location.href = `http://127.0.0.1:5501/client/public/randomchatsalon.html?room=${encodeURIComponent(
    roomName
  )}`; // Redirect to the chat room
});
// Handle room selection for adding a friend
$(document).on("click", ".btn-info", function () {
  const roomName = $(this).data("room");
  $("#selectedRoom").val(roomName);
});

// Add friend to the specified room
$("#addFriendButton").on("click", function () {
  const friendName = $("#friendName").val();
  const roomName = $("#selectedRoom").val();

  // Add friend to the friend list with a remove button
  $("#friendList").append(`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        ${friendName} (dans ${roomName})
        <button class="btn btn-danger btn-sm removeFriend">Retirer</button>
    </li>
  `);

  $("#friendName").val("");
  $("#addFriendModal").modal("hide");
});

// Random chat button functionality
// Random chat button functionality
$("#randomChatButton").on("click", function () {
  const chatRooms = $("#chatRooms .list-group-item");
  if (chatRooms.length > 0) {
    const randomIndex = Math.floor(Math.random() * chatRooms.length);
    const selectedRoom = chatRooms
      .eq(randomIndex)
      .find("button.btn-info")
      .data("room"); // Get room name from button
    if (selectedRoom) {
      window.location.href = `http://127.0.0.1:5501/client/public/randomchatsalon.html?room=${encodeURIComponent(
        selectedRoom
      )}`; // Redirect to the chat room
    }
  } else {
    alert("Aucun salon disponible.");
  }
});
// Remove friend from the list
$(document).on("click", ".removeFriend", function () {
  $(this).closest("li").remove(); // Remove the friend list item
});

// Remove chat room
$(document).on("click", ".btn-danger", function () {
  $(this).closest("li").remove(); // Remove the chat room item
});
