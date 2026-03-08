// PROJECT NAVIGATION (NEXT/PREV)
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

  prevLink.href = projects[prevIndex];
  nextLink.href = projects[nextIndex];
}

document.addEventListener("DOMContentLoaded", initProjectNav);
