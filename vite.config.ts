import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// Relative base keeps assets working on BOTH:
// - https://yurmil.github.io/JabPoint-site/
// - https://jabpoint.ee/ (custom domain, once DNS/CNAME is connected)
// Absolute '/' broke project Pages (assets requested from yurmil.github.io/assets/...).
export default defineConfig({
  plugins: [react()],
  base: './',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
