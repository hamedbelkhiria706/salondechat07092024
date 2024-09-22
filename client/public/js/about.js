$(document).ready(function () {
  $("#content").load("navbar.html");
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Clear previous validation classes
    form.classList.remove("was-validated");

    // Check if the form is valid
    if (form.checkValidity() === false) {
      // Show validation feedback
      form.classList.add("was-validated");
    } else {
      // If valid, you can submit the form or process the data
      alert("Form submitted successfully!"); // Replace with actual submission logic
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
