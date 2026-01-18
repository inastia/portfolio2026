// This is a single-line JS comment

/*
  Future improvement:
  - test comment
  - test comment
*/

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

form.addEventListener(
  "blur",
  (e) => {
    const field = e.target.closest(".form-field");
    if (!field) return;

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
  },
  true,
);
