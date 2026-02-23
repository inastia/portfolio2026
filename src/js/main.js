// global behavior: navigation, UI interactions

// HEADER NAV
function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle-label");
  const overlay = document.querySelector(".nav-overlay");
  const menuLinks = document.querySelectorAll(".nav-menu a");

  toggle.addEventListener("click", () => header.classList.toggle("nav-open"));
  overlay.addEventListener("click", () => header.classList.remove("nav-open"));
  menuLinks.forEach((link) =>
    link.addEventListener("click", () => header.classList.remove("nav-open")),
  );
}

// call header nav
document.addEventListener("partialsLoaded", () => {
  initNavigation();
});
