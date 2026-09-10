import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Served as a GitHub Pages project site at /leema-rose-martin/, so every
  // asset URL Vite emits needs that prefix or they'd 404 under the subpath.
  base: '/leema-rose-martin/',
  plugins: [react(), tailwindcss()],
});
