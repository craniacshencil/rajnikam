import { defineConfig } from "vite";
import path from "path";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
  base: "/rajnikam/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
