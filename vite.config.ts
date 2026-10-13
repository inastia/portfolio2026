import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        resources: "resources.html",
        projectOne: "src/projects/corporate-gossip.html",
        projectTwo: "src/projects/travel-guide.html",
        projectThree: "src/projects/camelot-vet.html",
        projectFour: "src/projects/chani.html",
      },
    },
  },
});
