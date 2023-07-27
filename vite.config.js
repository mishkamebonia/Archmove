import { defineConfig } from 'vite';

export default defineConfig({
  // Specify the base URL for your project (optional, adjust as needed)
  base: '/js-project/',

  // Specify entry and output points for your JavaScript files (adjust as needed)
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      input: {
        main: './src/main.js', // Entry point for your main JavaScript file
      },
    },
  },

  // Configure Vite plugins and other options as needed
});
