import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        resources: "resources.html",
        projectOne: "src/projects/travel-guide.html",
        projectTwo: "src/projects/camelot-vet.html",
        projectThree: "src/projects/chani.html",
        projectFour: "src/projects/currency-exchange.html",
      },
    },
  },
});
