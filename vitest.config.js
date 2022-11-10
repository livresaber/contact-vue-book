import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      'vitest.setup.js',
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}
