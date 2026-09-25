// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro, env injection, @ alias — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const routes = [
  "/",
  "/australian-businesses",
  "/manufacturers",
  "/solutions",
  "/solutions/warehouse-automation",
  "/solutions/packaging-processing",
  "/solutions/cnc-fabrication",
  "/how-it-works",
  "/about",
  "/contact",
];

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    pages: [
      ...routes.map((path) => ({ path })),
      { path: "/404", prerender: { enabled: true, outputPath: "/404.html" } },
    ],
    prerender: { enabled: true, crawlLinks: true, failOnError: true },
  },
});
