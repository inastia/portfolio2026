// Page-specific logic - projects

import corporateGossipImg from "../images/profile/corp-gossip.png";
import travelGuideImg from "../images/profile/travel-guide.png";
import vetClinicImg from "../images/profile/camelot-vet.png";
import chaniImg from "../images/profile/chani.png";

export const projects = [
  {
    title: "Corporate Gossip",
    titleItalic: "Podcast",
    category: "Website Redesign",
    liveUrl: "https://www.corporategossippod.com/",
    description:
      "A website redesign for Corporate Gossip Podcast, a business podcast for gossip lovers.",
    image: corporateGossipImg,
    alt: "Corporate Gossip Podcast website case study preview",
    url: "/corporate-gossip",
  },
  {
    title: "Travel",
    titleItalic: "Guide",
    category: "Content Design",
    liveUrl: "https://imrewd.gumroad.com/l/timetoleave",
    description:
      "A structural and editorial overhaul of a travel influencer's 70-page digital guide, reorganized around how readers actually search for what they need.",
    image: travelGuideImg,
    alt: "Travel Guide case study preview",
    url: "/travel-guide",
  },
  {
    title: "Camelot Vet",
    titleItalic: "Services",
    category: "Website Rebuild",
    liveUrl: "https://www.camelotvetclinic.com/",
    description:
      "A website launched for a small veterinary practice to meet 10DLC compliance and restore online presence.",
    image: vetClinicImg,
    alt: "Camelot Vet Clinic website case study preview",
    url: "/camelot-vet",
  },
  {
    title: "Chani",
    category: "Feature Design",
    description:
      "A feature addition to the Chani astrology app that lets users save and quickly resurface their favorite audio assets.",
    image: chaniImg,
    alt: "Chani App case study preview",
    url: "/chani",
  },
];

function createProjectCard(project, index) {
  const number = String(index + 1).padStart(2, "0");

  const italic = project.titleItalic ? ` <em>${project.titleItalic}</em>` : "";

  const liveLink = project.liveUrl
    ? `
      <a
        href="${project.liveUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="group/live inline-flex items-center gap-4 mt-6 text-lg font-semibold text-stone-900 self-start"
      >
        View Live Site
        <span class="grid place-items-center w-10 h-10 rounded-full border border-stone-900 transition group-hover/live:bg-stone-900 group-hover/live:text-white">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </a>`
    : "";

  return `
  <article class="flex flex-col w-full border-t border-stone-300 pt-6">
    <div class="flex justify-between text-sm font-semibold uppercase tracking-[0.2em] text-stone-600">
      <span>${number}</span>
      <span>${project.category}</span>
    </div>

    <h3 class="font-normal color-brand pt-0 mt-6 text-4xl md:text-5xl leading-tight">
      <a href="${project.url}" class="hover:underline">${project.title}${italic}</a>
    </h3>

    <p class="mt-4 max-w-4xl text-lg">${project.description}</p>

    ${liveLink}

    <a href="${project.url}" class="group/image block mt-auto pt-8">
      <figure class="relative overflow-hidden">
        <img
          src="${project.image}"
          alt="${project.alt}"
          class="w-full h-auto object-cover transition-transform duration-300 group-hover/image:scale-105"
        />
      </figure>
    </a>
  </article>
`;
}

const grid = document.getElementById("projects-grid");
if (grid) {
  grid.innerHTML = projects
    .map((project, index) => createProjectCard(project, index))
    .join("");
}
