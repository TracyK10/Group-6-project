import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: "react", // Specify the jsx option as 'react'
    loader: {
      ".js": "jsx", // Specify the loader for JSX files
    },
  },
});
