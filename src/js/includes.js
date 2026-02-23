// PROJECT NAVIGATION (NEXT/PREV)
async function loadHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    el.innerHTML = await res.text();
    document.dispatchEvent(new Event("partialsLoaded"));
  } catch (err) {
    console.error(err);
  }
}

function initProjectNav() {
  const prevLink = document.querySelector("#prev-project");
  const nextLink = document.querySelector("#next-project");

  if (!prevLink || !nextLink) return;

  const projects = [
    "project-one.html",
    "project-two.html",
    "project-three.html",
  ];

  const currentPage = window.location.pathname.split("/").pop();
  const currentIndex = projects.indexOf(currentPage);

  if (currentIndex === -1) return;

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  // Root-relative so it works regardless of nesting
  prevLink.href = `/src/project/${projects[prevIndex]}`;
  nextLink.href = `/src/project/${projects[nextIndex]}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // All paths are now root-relative — no pathPrefix needed
  loadHTML("#site-header", "/src/partials/header.html");

  if (window.location.pathname.includes("/project/")) {
    loadHTML("#project-nav", "/src/partials/project-nav.html").then(() =>
      initProjectNav(),
    );
  }

  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "about.html" || currentPage === "contact.html") {
    loadHTML("#secondary-nav", "/src/partials/secondary-nav.html");
  }
});
