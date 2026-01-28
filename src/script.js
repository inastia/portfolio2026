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

// POP UP & EMAIL
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const button = document.getElementById("submit-btn");
  const popup = document.getElementById("success-popup");

  function showPopup() {
    popup.classList.remove("opacity-0", "pointer-events-none");
    popup.firstElementChild.classList.remove("scale-95");

    setTimeout(() => {
      popup.classList.add("opacity-0", "pointer-events-none");
      popup.firstElementChild.classList.add("scale-95");
    }, 2000);
  }

  button.addEventListener("click", () => {
    button.disabled = true;
    button.textContent = "Sending...";

    emailjs
      .sendForm("service_pzo6o7g", "template_5csibl3", form)
      .then(() => {
        form.reset();
        showPopup();
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
