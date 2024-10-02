$(document).ready(function () {
  $("#content").load("navbar.ejs");
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const warningMessage = document.getElementById("form-message-warning");
  const successMessage = document.getElementById("form-message-success");

  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Clear previous validation classes and messages
    form.classList.remove("was-validated");
    warningMessage.style.display = "none";
    successMessage.style.display = "none";

    // Check if the form is valid
    if (form.checkValidity() === false) {
      // Show validation feedback
      form.classList.add("was-validated");
      warningMessage.textContent =
        "Please fill out all required fields correctly.";
      warningMessage.style.display = "block";
    } else {
      // If valid, you can submit the form or process the data
      successMessage.style.display = "block"; // Show success message
      form.reset(); // Optional: reset the form after submission
    }
  });

  // Add custom validation messages for each field
  form.querySelectorAll("input, textarea").forEach(function (input) {
    input.addEventListener("input", function () {
      if (input.validity.valid) {
        input.classList.remove("is-invalid");
      } else {
        input.classList.add("is-invalid");
      }
    });
  });
});
