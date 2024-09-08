// Get the current page URL
const currentPage = window.location.href;
// Select all the nav links
const navLinks = document.querySelectorAll(".nav-link");
// Loop through each nav link and check if its href matches the current page URL
navLinks.forEach((link) => {
  if (link.href === currentPage) {
    link.classList.add("active"); // Add the active class if there is a match
  }
});
