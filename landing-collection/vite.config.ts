import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: __dirname,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        // Split chunks by landing page for better code splitting
        manualChunks(id) {
          // Core vendor chunks
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react-router")) {
              return "vendor-react";
            }
            if (id.includes("gsap") || id.includes("lenis")) {
              return "vendor-animation";
            }
            if (
              id.includes("lucide-react") ||
              id.includes("clsx") ||
              id.includes("class-variance-authority") ||
              id.includes("tailwind-merge")
            ) {
              return "vendor-ui";
            }
            // Other vendors in a separate chunk
            return "vendor";
          }
          // Split each landing page into its own chunk
          if (id.includes("/pages/") && !id.includes("HomePage")) {
            const match = id.match(/\/pages\/([^/]+)\//);
            if (match) {
              return `page-${match[1]}`;
            }
          }
        },
        // Optimize asset file names for caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".") || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|avif|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
      // Reduce memory usage during build
      cache: false,
    },
    // Enable minification with esbuild (fast and efficient)
    minify: "esbuild",
    // Generate source maps for debugging (disabled in prod for smaller bundles)
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    // CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller bundles
    target: "esnext",
    // Reduce bundle size by removing unused code
    reportCompressedSize: false,
    // Optimize assets
    assetsInlineLimit: 4096,
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
  // Esbuild optimizations
  esbuild: {
    legalComments: "none",
    treeShaking: true,
    drop: ["console", "debugger"],
  },
});
