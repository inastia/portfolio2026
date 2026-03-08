import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        contact: "contact.html",
        projectOne: "src/projects/project-one.html",
        projectTwo: "src/projects/project-two.html",
        projectThree: "src/projects/project-three.html",
      },
    },
  },
});
