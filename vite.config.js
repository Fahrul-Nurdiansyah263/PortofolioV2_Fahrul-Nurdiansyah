import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Pisah library berat ke chunk tersendiri supaya browser bisa
        // cache mereka secara independen dan user tidak download ulang
        // setiap kali ada perubahan kode aplikasi.
        manualChunks: {
          // Three.js + React Three Fiber ecosystem (~2–3 MB)
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/rapier', 'meshline'],
          // Animasi — framer-motion / motion adalah package yg sama, jadi
          // digabung ke satu chunk supaya tidak ada duplikasi di bundle
          'motion-vendor': ['motion', 'framer-motion'],
          // GSAP
          'gsap-vendor': ['gsap'],
          // OGL (Threads shader)
          'ogl-vendor': ['ogl'],
          // React core
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
