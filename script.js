// FORM
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("first-name");
  const message = document.getElementById(input.id + "-error");

  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll(".form-field");

    fields.forEach((field) => {
      const input = field.querySelector("input, textarea");
      const message = field.querySelector(".field-message");

      field.classList.remove("has-error", "has-success");
      message.textContent = "";

      if (!input.checkValidity()) {
        field.classList.add("has-error");
        message.textContent = "Required";
      } else {
        field.classList.add("has-success");
      }
    });
  });
});

// HAMBURGER MENU
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle-label");
const overlay = document.querySelector(".nav-overlay");
const menuLinks = document.querySelectorAll(".nav-menu a");

// Toggle menu open/close
toggle.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Close menu when clicking overlay
overlay.addEventListener("click", () => {
  header.classList.remove("nav-open");
});

// Close menu when clicking menu links
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
  });
});
