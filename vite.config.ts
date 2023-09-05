import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
    },
  },
  plugins: [
    dts({
      skipDiagnostics: true,
      entryRoot: path.resolve(__dirname, 'src'),
    }),
  ],
});
