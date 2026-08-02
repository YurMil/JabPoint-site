import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// For GitHub Pages + custom domain (jabpoint.ee) use '/'.
// Project-path only (username.github.io/JabPoint-site/) would need '/JabPoint-site/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
