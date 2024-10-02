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

// Get the current page URL
let currentPage1 = window.location.pathname;

// Check if the current page is index.html
if (currentPage1.includes("index")) {
  // Enable or show the links
  console.log("Welcome to the homepage");
  // Re-enable links if they were previously disabled
  let navLinks = document.querySelectorAll(".navbar-nav .nav-item a");
  navLinks.forEach((link) => {
    if (link.classList.contains("noneshow")) {
      link.classList.remove("noneshow"); // Remove the disabled class
      link.setAttribute("href", link.dataset.originalHref); // Restore the original href
    }
  });
} else {
  // Disable or hide the links
  let navLinks = document.querySelectorAll(".navbar-nav .nav-item a");
  navLinks.forEach((link) => {
    if (
      link.getAttribute("href").includes("#") &&
      !link.getAttribute("href").includes(".html")
    ) {
      // Store the original href for restoration later
      link.dataset.originalHref = link.getAttribute("href");
      link.classList.add("noneshow"); // Add a disabled class
      link.setAttribute("href", "javascript:void(0)"); // Disable the link
    }
  });
}
