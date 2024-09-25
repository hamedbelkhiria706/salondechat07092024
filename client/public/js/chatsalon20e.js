$(document).ready(function () {
  $("#content").load("navbar.html");
  document
    .getElementById("chatRoomForm")
    .addEventListener("submit", function (event) {
      const roomName1 = document.getElementById("roomName1").value.trim();
      if (!roomName1) {
        alert("Le nom du Salon 1 est obligatoire.");
        event.preventDefault(); // Prevent form submission
      }
    });
  // Initialisation de l'abonnement
  let subscription = {
    level: 20, // Montant de l'abonnement
    maxRooms: 3, // Maximum de salons autorisés
  };

  // Affichage du statut de l'abonnement
  $("#subscriptionStatus").text(
    `Abonnement actif : ${subscription.level} € - Salons autorisés : ${subscription.maxRooms}`
  );

  // Validation du formulaire de salon de chat
  $("#chatRoomForm").on("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire pour validation

    // Vérifier le nombre de salons créés
    let roomCount = 0;
    for (let i = 1; i <= subscription.maxRooms; i++) {
      if (
        $("#roomName" + i)
          .val()
          .trim()
      ) {
        roomCount++;
      }
    }

    // Vérifier si l'utilisateur dépasse la limite d'abonnement
    if (roomCount > subscription.maxRooms) {
      alert(
        `Vous ne pouvez pas créer plus de ${subscription.maxRooms} salon(s) avec cet abonnement.`
      );
      return;
    }

    // Soumettre le formulaire si tout est valide
    alert("Salons créés avec succès !");
  });
});
