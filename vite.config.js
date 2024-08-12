import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/tpmajamicic/",
  server: {
    host: true,
    port: 3000,
  },
});
