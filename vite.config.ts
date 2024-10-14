import path from 'node:path';
import process from 'node:process';
import assert from 'node:assert';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; 

const project = process.argv[3];
assert(typeof project === 'string');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(import.meta.dirname, project),
  build: {
    outDir: path.resolve(import.meta.dirname, project, 'dist'),
    rollupOptions: {
      input: path.resolve(import.meta.dirname, project, 'index.html'),
    },
  },
  publicDir: path.resolve(import.meta.dirname, project, 'public'),
  resolve: {
    alias: {
      '@': import.meta.dirname,
    },
  },
});