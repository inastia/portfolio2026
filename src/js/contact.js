// Contact form logic — only runs on contact.html

// NAME VALIDATION
function isValidName(value) {
  if (!/\p{L}/u.test(value)) return false;
  if (/\d/.test(value)) return false;
  if (/[_@#$%^&*=+<>|\\\/~`"{}[\]()]/.test(value)) return false;
  if (
    /[\u{1F000}-\u{1FFFF}]|[\u{2600}-\u{27BF}]|[\u{FE00}-\u{FE0F}]/u.test(value)
  )
    return false;
  if (/^[\s\-.'']/.test(value) || /[\s\-.'']$/.test(value)) return false;
  if (/--/.test(value) || /''/.test(value) || /''/.test(value)) return false;
  return true;
}

// EMAIL VALIDATION
function isValidEmail(value) {
  if (/\s/.test(value)) return false;
  if (
    /[\u{1F000}-\u{1FFFF}]|[\u{2600}-\u{27BF}]|[\u{FE00}-\u{FE0F}]/u.test(value)
  )
    return false;
  if (/[,;/\\]/.test(value)) return false;
  if ((value.match(/@/g) || []).length !== 1) return false;

  const [local, domain] = value.split("@");

  if (!/^[a-zA-Z0-9.+\-_]+$/.test(local)) return false;
  if (/^\./.test(local) || /\.$/.test(local)) return false;
  if (/\.\./.test(local)) return false;
  if (!domain) return false;
  if (/^\./.test(domain) || /\.$/.test(domain)) return false;
  if (/\.\./.test(domain)) return false;
  if (!/\.[a-zA-Z]{2,}$/.test(domain)) return false;

  return true;
}

// CONTACT FORM SEND ACTION
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const button = document.getElementById("submit-btn");
  const successMsg = document.getElementById("success-msg");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("about");
  const charCounter = document.getElementById("char-counter");

  // --- Error helpers (defined first so all listeners below can use them) ---
  function showError(inputEl, message) {
    let err = inputEl.parentElement.querySelector(".field-error");
    if (!err) {
      err = document.createElement("p");
      err.className = "field-error text-red-600 text-xs mt-1";
      inputEl.parentElement.appendChild(err);
    }
    err.textContent = message;
    inputEl.classList.add("outline-red-500");
    inputEl.classList.remove("outline-gray-300");
  }

  function clearError(inputEl) {
    const err = inputEl.parentElement.querySelector(".field-error");
    if (err) err.remove();
    inputEl.classList.remove("outline-red-500");
    inputEl.classList.add("outline-gray-300");
  }

  // --- Live validation: name fields ---
  ["first-name", "last-name"].forEach((id) => {
    const input = document.getElementById(id);
    const isRequired = id === "first-name";

    input.addEventListener("input", () => {
      const val = input.value.trim();
      if (val === "") {
        clearError(input);
        return;
      }
      if (!isValidName(val)) {
        showError(input, "Please enter a valid name.");
      } else {
        clearError(input);
      }
    });

    input.addEventListener("blur", () => {
      const val = input.value.trim();
      if (isRequired && val === "") {
        showError(input, "First name is required.");
      }
    });
  });

  // --- Live validation: email field ---
  emailInput.addEventListener("input", () => {
    const val = emailInput.value.trim();
    if (val === "") {
      clearError(emailInput);
      return;
    }
    if (!isValidEmail(val)) {
      showError(emailInput, "Please enter a valid email address.");
    } else {
      clearError(emailInput);
    }
  });

  emailInput.addEventListener("blur", () => {
    const val = emailInput.value.trim();
    if (val === "") {
      showError(emailInput, "Email address is required.");
    } else if (!isValidEmail(val)) {
      showError(emailInput, "Please enter a valid email address.");
    }
  });

  // --- Live validation: message field ---
  messageInput.addEventListener("input", () => {
    const len = messageInput.value.length;
    charCounter.textContent = `${len} / 500`;

    if (len >= 500) {
      charCounter.classList.add("text-red-500");
      charCounter.classList.remove("text-gray-400");
    } else {
      charCounter.classList.remove("text-red-500");
      charCounter.classList.add("text-gray-400");
    }

    if (len > 0) clearError(messageInput);
  });

  messageInput.addEventListener("blur", () => {
    if (messageInput.value.trim() === "") {
      showError(messageInput, "A message is required.");
    }
  });

  // --- Submit ---
  button.addEventListener("click", () => {
    let hasError = false;

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");

    // First name: required + valid
    if (firstName.value.trim() === "") {
      showError(firstName, "First name is required.");
      hasError = true;
    } else if (!isValidName(firstName.value.trim())) {
      showError(firstName, "Please enter a valid name.");
      hasError = true;
    } else {
      clearError(firstName);
    }

    // Last name: optional, but valid if filled
    if (lastName.value.trim() !== "" && !isValidName(lastName.value.trim())) {
      showError(lastName, "Please enter a valid name.");
      hasError = true;
    } else {
      clearError(lastName);
    }

    // Email: required + valid
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email address is required.");
      hasError = true;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      hasError = true;
    } else {
      clearError(emailInput);
    }

    // Message: required
    if (messageInput.value.trim() === "") {
      showError(messageInput, "A message is required.");
      hasError = true;
    } else {
      clearError(messageInput);
    }

    if (hasError) return;

    button.disabled = true;
    button.textContent = "Sending...";

    emailjs
      .sendForm("service_pzo6o7g", "template_5csibl3", form)
      .then(() => {
        form.reset();
        charCounter.textContent = "0 / 500";
        charCounter.classList.remove("text-red-500");
        charCounter.classList.add("text-gray-400");
        successMsg.style.opacity = "1";
        setTimeout(() => {
          successMsg.style.opacity = "0";
        }, 3000);
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
