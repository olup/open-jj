import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/webview/main.tsx'),
      formats: ['es'],
      fileName: () => 'webview.js',
    },
    outDir: resolve(__dirname, 'resources/webview'),
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'webview.css';
          }
          return '[name][extname]';
        },
      },
    },
  },
});
