import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, ManifestOptions } from "vite-plugin-pwa";
import manifestJSON from "./public/manifest.json";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: manifestJSON as Partial<ManifestOptions>,
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              const CACHE_URL_PATTERNS = [
                "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-",
                "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
                "openstreetmap.org",
              ];

              return CACHE_URL_PATTERNS.some((pattern) =>
                url.href.includes(pattern)
              );
            },
            handler: "CacheFirst",
            options: {
              cacheName: "map-tile-cache",
              expiration: {
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
