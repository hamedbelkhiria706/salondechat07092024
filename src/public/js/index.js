// Load the navbar
/*fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading the navbar:", error));
*/

$(document).ready(function () {
  $("#content").load("navbar.html");
});
