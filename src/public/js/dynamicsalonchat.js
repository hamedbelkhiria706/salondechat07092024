let totalRooms = 0;
let totalPayments = 0;
let createdRooms = [];
console.log("hello world");
function renderRoomInputs() {
  $("#roomInputs").empty();
  for (let i = 1; i <= totalRooms; i++) {
    $("#roomInputs").append(`
        <div class="form-group">
          <label for="roomName${i}">Nom du Salon ${i} :</label>
          <input type="text" class="form-control room-input" id="roomName${i}" />
        </div>
      `);
  }
}

$("#subscriptionOptions button").on("click", function () {
  const price = $(this).data("price");
  const maxRooms = $(this).data("maxrooms");

  totalPayments += price;
  totalRooms += maxRooms;

  $("#subscriptionStatus").text(
    `Total payé : ${totalPayments} € - Salons autorisés : ${totalRooms}`
  );

  renderRoomInputs();
  $("#chatRoomForm").show();
});

$("#chatRoomForm").on("submit", function (event) {
  event.preventDefault();

  let newRooms = [];

  $(".room-input").each(function () {
    const roomName = $(this).val().trim();
    if (roomName) {
      newRooms.push(roomName);
    }
  });

  createdRooms = createdRooms.concat(newRooms);

  alert(`${newRooms.length} salon(s) créé(s) avec succès !`);
  totalRooms -= newRooms.length;
  updateCreatedRoomsList();
  renderRoomInputs();
});

updateCreatedRoomsList();

function updateCreatedRoomsList() {
  $("#createdRoomsList").empty();
  createdRooms.forEach((room, index) => {
    $("#createdRoomsList").append(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Salon ${index + 1}: ${room}
          <button class="btn btn-danger btn-sm remove-room" data-index="${index}">Supprimer</button>
        </li>
      `);
  });
}

$(document).on("click", ".remove-room", function () {
  const index = $(this).data("index");
  createdRooms.splice(index, 1);
  totalRooms++; // Increment totalRooms when a room is removed
  updateCreatedRoomsList();
  renderRoomInputs();
});
