// Shared layout - header/footer injection

async function loadHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    el.innerHTML = await res.text();

    // Dispatch event when header/footer is injected
    document.dispatchEvent(new Event("partialsLoaded"));
  } catch (err) {
    console.error(err);
  }
}

// Project navigation logic
function initProjectNav() {
  const prevLink = document.querySelector("#prev-project");
  const nextLink = document.querySelector("#next-project");

  if (!prevLink || !nextLink) return;

  // Define project order
  const projects = [
    "project-one.html",
    "project-two.html",
    "project-three.html",
    "project-four.html",
  ];

  // Get current page filename
  const currentPage = window.location.pathname.split("/").pop();
  const currentIndex = projects.indexOf(currentPage);

  if (currentIndex === -1) return; // Not on a project page

  // Calculate previous and next indices (with looping)
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  // Set the href attributes
  prevLink.href = `./${projects[prevIndex]}`;
  nextLink.href = `./${projects[nextIndex]}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Determine if current page is in /projects/ folder
  const pathPrefix = window.location.pathname.includes("/projects/")
    ? "../"
    : "./";

  // Load header on all pages
  loadHTML("#site-header", `${pathPrefix}partials/header.html`);

  // Load project navigation if on a project page
  if (window.location.pathname.includes("/projects/")) {
    loadHTML(
      "#project-navigation",
      `${pathPrefix}partials/project-nav.html`,
    ).then(() => initProjectNav());
  }

  // Load secondary navigation if on about or contact page
  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "about.html" || currentPage === "contact.html") {
    loadHTML(
      "#secondary-navigation",
      `${pathPrefix}partials/secondary-nav.html`,
    );
  }
});
