import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Configuración para archivos estáticos grandes
    middlewareMode: false,
    fs: {
      strict: false
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuración para el build
  build: {
    // Aumentar el límite de tamaño de chunk
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      // Configurar assets externos
      external: [],
    }
  },
  // Configuración para assets estáticos
  assetsInclude: ['**/*.mp4'],
}));
