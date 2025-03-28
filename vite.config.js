import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Yapita",
        short_name: "Yapita",
        description: "Una app gamificada para aprender finanzas diseñada para mujeres.",
        theme_color: "#742284",
        background_color: "#FFFFFF",
        display: "standalone",
        start_url: "/init",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
});
