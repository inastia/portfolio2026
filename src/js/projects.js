// Page-specific logic - projects

const projects = [
  {
    title: "Currency exchange app",
    description:
      "An app that helps global travelers find the current exchange rates between two currencies.",
    image: "images/profile/project-one.png",
    alt: "Project One case study preview",
    url: "projects/project-one.html",
  },
  {
    title: "Chani",
    description:
      "A feature addition to the Chani astrology app that lets users save and quickly resurface their favorite meditations, affirmations,and sleep stories.",
    image: "images/profile/project-two.png",
    alt: "Project Two case study preview",
    url: "projects/project-two.html",
  },
  {
    title: "Astrology Journal",
    description:
      "Thank you for your interest. I'm in the process of staging this project. Come back in March, 2026.",
    image: "images/profile/projectimagethree.png",
    alt: "Project Three case study preview",
    url: "projects/project-three.html",
  },
];

function createProjectCard(project) {
  return `
    <a
      href="${project.url}"
      aria-label="View ${project.title} case study"
      class="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
    >
      <div
        class="card bg-base-100 shadow-sm w-full rounded-lg cursor-pointer transition hover:shadow-md hover:-translate-y-1"
      >
        <div class="card-body p-4 space-y-3">
          <h3 class="card-title text-2xl">${project.title}</h3>
          <p class="pt-2">${project.description}</p>
        </div>

        <figure class="relative w-full overflow-hidden rounded-b-lg group">
          <img
            src="${project.image}"
            alt="${project.alt}"
            class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition"
            aria-hidden="true"
          ></div>

        </figure>
      </div>
    </a>
  `;
}

const grid = document.getElementById("projects-grid");

grid.innerHTML = projects.map((project) => createProjectCard(project)).join("");
