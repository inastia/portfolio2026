// PROJECT NAVIGATION (NEXT/PREV)
import { projects } from "./projects.js";

function initProjectNav() {
  const prevLink = document.querySelector("#prev-project");
  const nextLink = document.querySelector("#next-project");

  if (!prevLink || !nextLink) return;

  const currentPage = window.location.pathname;
  const currentIndex = projects.findIndex((project) => project.url === currentPage);

  if (currentIndex === -1) return;

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  prevLink.href = projects[prevIndex].url;
  nextLink.href = projects[nextIndex].url;
}

document.addEventListener("DOMContentLoaded", initProjectNav);
