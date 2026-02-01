// Page-specific logic - projects

const projects = [
  {
    title: "Project One",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts",
    image: "images/projects/project1/projectimage.png",
    alt: "Project One case study preview",
    url: "projects/project-one.html",
  },
  {
    title: "Project Two",
    description: "Short description of the UX problem and outcome.",
    image: "images/projects/project1/projectimage.png",
    alt: "Project Two case study preview",
    url: "projects/project-two.html",
  },
  {
    title: "Project Three",
    description: "Another UX/UI project description goes here.",
    image: "images/projects/project1/projectimage.png",
    alt: "Project Three case study preview",
    url: "projects/project-three.html",
  },
  {
    title: "Project Four",
    description: "Final project description goes here.",
    image: "images/projects/project1/projectimage.png",
    alt: "Project Four case study preview",
    url: "projects/project-four.html",
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
          <p class="p-2">${project.description}</p>
        </div>

        <figure class="relative w-full overflow-hidden rounded-b-lg group">
          <img
            src="${project.image}"
            alt="${project.alt}"
            class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition"
            aria-hidden="true"
          ></div>

          <span
            class="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
            aria-hidden="true"
          >
            →
          </span>
        </figure>
      </div>
    </a>
  `;
}

const grid = document.getElementById("projects-grid");

grid.innerHTML = projects.map((project) => createProjectCard(project)).join("");
