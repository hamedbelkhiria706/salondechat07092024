$(document).ready(function () {
  $("#content").load("navbar.html");
});

$(document).on("click", ".btn-info", function () {
  const roomName = $(this).data("room");
  $("#selectedRoom").val(roomName);
});

$("#addFriendButton").on("click", function () {
  const friendName = $("#friendName").val();
  const roomName = $("#selectedRoom").val();

  // Add friend to the specified room (dummy implementation)
  $("#friendList").append(`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${friendName} (dans ${roomName})
                <button class="btn btn-danger btn-sm">Retirer</button>
            </li>
        `);

  $("#friendName").val("");
  $("#addFriendModal").modal("hide");
});

$("#randomChatButton").on("click", function () {
  const chatRooms = $("#chatRooms .list-group-item");
  if (chatRooms.length > 0) {
    const randomIndex = Math.floor(Math.random() * chatRooms.length);
    const selectedRoom = chatRooms.eq(randomIndex).find("span").text(); // Get room name
    window.location.href = `randomchatsalon.html?room=${encodeURIComponent(
      selectedRoom
    )}`; // Redirect to the chat room
  } else {
    alert("Aucun salon disponible.");
  }
});
