// global behavior: navigation, UI interactions
// HEADER NAV
function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle-label");
  const overlay = document.querySelector(".nav-overlay");
  const menuLinks = document.querySelectorAll(".nav-menu a");

  if (!header || !toggle || !overlay) return;

  toggle.addEventListener("click", () => header.classList.toggle("nav-open"));
  overlay.addEventListener("click", () => header.classList.remove("nav-open"));
  menuLinks.forEach((link) =>
    link.addEventListener("click", () => header.classList.remove("nav-open")),
  );
}

// initialize once DOM is ready
document.addEventListener("DOMContentLoaded", initNavigation);
