import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites set base to '/your-repo-name/'
// For user sites (username.github.io) or custom domain use '/'
export default defineConfig({
  plugins: [react()],
  // Project site: https://yurmil.github.io/JabPoint-site/
  base: '/JabPoint-site/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
