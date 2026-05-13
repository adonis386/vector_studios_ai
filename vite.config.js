import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Listo para static hosting (Vercel, Netlify, S3, etc.): salida en /dist
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
