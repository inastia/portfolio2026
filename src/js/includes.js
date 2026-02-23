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

  // Handle both "/project/project-one" and "/project/project-one.html"
  const rawPage = window.location.pathname.split("/").pop();
  const currentPage = rawPage.replace(".html", "");
  const currentIndex = projects.indexOf(currentPage);

  if (currentIndex === -1) return;

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  // Root-relative so it works regardless of nesting
  prevLink.href = `/src/project/${projects[prevIndex]}`;
  nextLink.href = `/src/project/${projects[nextIndex]}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Dispatch partialsLoaded so main.js nav init still fires
  document.dispatchEvent(new Event("partialsLoaded"));

  if (window.location.pathname.includes("/project/")) {
    initProjectNav();
  }
});
