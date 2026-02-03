// global behavior: navigation, UI iteractions

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

// POP UP & EMAIL
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const button = document.getElementById("submit-btn");

  button.addEventListener("click", () => {
    button.disabled = true;
    button.textContent = "Sending...";

    emailjs
      .sendForm("service_pzo6o7g", "template_5csibl3", form)
      .then(() => {
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        button.disabled = false;
        button.textContent = "Submit";
      });
  });
});
