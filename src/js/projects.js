// Page-specific logic - projects

import projectOneImg from "../images/profile/project-one.png";
import projectTwoImg from "../images/profile/project-two.png";
import projectThreeImg from "../images/profile/project-three.png";

const projects = [
  {
    title: "Camelot Vet Services",
    liveUrl: "https://www.camelotvetclinic.com/",
    description:
      "A website launched for a small veterinary practice to meet 10DLC compliance and restore online presence.",
    image: projectThreeImg,
    alt: "Camelot Vet Clinic website case study preview",
    url: "/camelot-vet",
    titleColor: "text-blue-900",
  },
  {
    title: "Currency exchange app",
    description:
      "An app that helps global travelers find the current exchange rates between two currencies.",
    image: projectOneImg,
    alt: "Project One case study preview",
    url: "/currency-exchange",
    titleColor: "text-emerald-900",
  },
  {
    title: "Chani",
    description:
      "A feature addition to the Chani astrology app that lets users save and quickly resurface their favorite audio assets.",
    image: projectTwoImg,
    alt: "Project Two case study preview",
    url: "/chani",
    titleColor: "text-purple-900",
  },
];

function createProjectCard(project) {
  return `
  <div
    class="card bg-base-100 shadow-md w-full md:w-[calc(50%-0.75rem)] rounded-lg transition hover:shadow-md hover:-translate-y-1 flex flex-col h-full"
  >
    <div class="card-body p-4 space-y-3">
      <h3 class="card-title text-2xl ${project.titleColor}">
        <a href="${project.url}" class="hover:underline">
          ${project.title}
        </a>
          ${
            project.liveUrl
              ? `
    <span> - </span>
    <a 
      href="${project.liveUrl}" 
      target="_blank" 
      rel="noopener noreferrer"
      class="hover:underline"
    >
      View Live Site
    </a>
  `
              : ""
          }
      </h3>
      <p class="pt-2">${project.description}</p>
    </div>

    <a href="${project.url}" class="block">
      <figure class="relative w-full overflow-hidden rounded-b-lg group">
        <img
          src="${project.image}"
          alt="${project.alt}"
          class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition"></div>
      </figure>
    </a>
  </div>
`;
}

const grid = document.getElementById("projects-grid");
grid.innerHTML = projects.map((project) => createProjectCard(project)).join("");
