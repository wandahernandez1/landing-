import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-animation": ["gsap", "lenis"],
          "vendor-ui": [
            "lucide-react",
            "clsx",
            "class-variance-authority",
            "tailwind-merge",
          ],
        },
      },
    },
    // Enable minification
    minify: "esbuild",
    // Generate source maps for debugging (disabled in prod for smaller bundles)
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    // CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller bundles
    target: "es2020",
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "gsap",
      "lenis",
      "lucide-react",
    ],
  },
  // Enable CSS optimizations
  css: {
    devSourcemap: false,
  },
});
