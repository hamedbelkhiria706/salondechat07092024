$(document).ready(function () {
  // Simuler des paiements en attente
  const payments = [
    { userId: 1, username: "utilisateur1", amount: 10, status: "En attente" },
    { userId: 2, username: "utilisateur2", amount: 30, status: "En attente" },
  ];

  // Afficher les paiements dans le tableau
  payments.forEach((payment) => {
    $("#paymentTable").append(`
            <tr>
                <td>${payment.userId}</td>
                <td>${payment.username}</td>
                <td>${payment.amount} €</td>
                <td>${payment.status}</td>
                <td>
                    <button class="btn btn-success validate-payment" data-userid="${payment.userId}">Valider</button>
                    <button class="btn btn-danger cancel-payment" data-userid="${payment.userId}">Annuler</button>
                </td>
            </tr>
        `);
  });

  // Événement pour valider un paiement
  $(document).on("click", ".validate-payment", function () {
    const userId = $(this).data("userid");
    // Logique pour valider le paiement (par exemple, mettre à jour la base de données)
    alert(`Paiement de l'utilisateur ${userId} validé !`);
    // Mettre à jour l'interface pour refléter le statut
    $(this).closest("tr").find("td:nth-child(4)").text("Validé");
  });

  // Événement pour annuler un paiement
  $(document).on("click", ".cancel-payment", function () {
    const userId = $(this).data("userid");
    // Logique pour annuler le paiement (par exemple, mettre à jour la base de données)
    alert(`Paiement de l'utilisateur ${userId} annulé !`);
    // Supprimer la ligne du tableau
    $(this).closest("tr").remove();
  });
});
