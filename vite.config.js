import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.names.some((name) => /\.(avif|gif|ico|jpe?g|png|svg|webp)$/i.test(name))
            ? 'assets/[name][extname]'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
