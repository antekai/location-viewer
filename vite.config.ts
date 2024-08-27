import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, ManifestOptions } from "vite-plugin-pwa";
import manifestJSON from "./public/manifest.json";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: manifestJSON as Partial<ManifestOptions>,
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
