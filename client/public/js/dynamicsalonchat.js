$(document).ready(function () {
  $("#content").load("navbar.html");
});
$(document).ready(function () {
  let totalRooms = 0; // Nombre total de salons autorisés
  let totalPayments = 0; // Montant total payé
  let createdRooms = []; // Tableau pour stocker les noms des salons créés

  // Fonction pour afficher les champs d'entrée des salons
  function renderRoomInputs() {
    $("#roomInputs").empty(); // Réinitialiser les entrées de salon
    for (let i = 1; i <= totalRooms; i++) {
      $("#roomInputs").append(`
                <div class="form-group">
                    <label for="roomName${i}">Nom du Salon ${i} :</label>
                    <input type="text" class="form-control room-input" id="roomName${i}" ${
        i === 1 ? "required" : ""
      } />
                </div>
            `);
    }
  }

  // Gestion des clics sur les options d'abonnement
  $("#subscriptionOptions button").on("click", function () {
    const price = $(this).data("price");
    const maxRooms = $(this).data("maxrooms");

    // Calculer le nombre total de salons
    totalPayments += price;
    totalRooms += maxRooms; // Ajouter le nombre de salons

    // Affichage du statut d'abonnement
    $("#subscriptionStatus").text(
      `Total payé : ${totalPayments} € - Salons autorisés : ${totalRooms}`
    );

    // Afficher les champs d'entrée pour les salons
    renderRoomInputs(); // Appel de la fonction pour afficher les entrées
    $("#chatRoomForm").show(); // Afficher le formulaire
  });

  // Validation et ajout des salons de chat
  $("#chatRoomForm").on("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire pour validation

    // Réinitialiser le tableau des salons
    createdRooms = [];
    let allValid = true; // Variable pour vérifier la validité de tous les champs

    // Vérifier chaque champ d'entrée
    $(".room-input").each(function (index) {
      const roomName = $(this).val().trim();
      if (roomName) {
        createdRooms.push(roomName); // Ajouter le nom du salon au tableau
      } else {
        allValid = true; // Si un champ est vide, marquer comme valide
      }
    });

    if (!allValid) {
      alert("Veuillez entrer un nom pour tous les salons.");
      return;
    }

    // Afficher un message de succès
    alert(`${createdRooms.length} salon(s) créé(s) avec succès !`);

    // Réinitialiser tous les champs
    $(".room-input").val("");

    // Mettre à jour la liste des salons créés
    updateCreatedRoomsList();
  });

  // Fonction pour mettre à jour la liste des salons créés
  function updateCreatedRoomsList() {
    $("#createdRoomsList").empty(); // Réinitialiser la liste
    createdRooms.forEach((room, index) => {
      $("#createdRoomsList").append(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Salon ${index + 1}: ${room}
                    <button class="btn btn-danger btn-sm remove-room" data-index="${index}">Supprimer</button>
                </li>
            `);
      totalRooms--;
      renderRoomInputs(); // Appeler la fonction pour afficher les entrées
    });
  }

  // Gestion de la suppression d'un salon
  $(document).on("click", ".remove-room", function () {
    const index = $(this).data("index");
    createdRooms.splice(index, 1); // Supprimer le salon du tableau

    // Mettre à jour la liste des salons créés
    updateCreatedRoomsList();

    // Réduire le nombre total de salons
    totalRooms += 1; // Mettre à jour le nombre total de salons
    renderRoomInputs(); // Appeler la fonction pour afficher les entrées
  });
});
