// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [vue()],
//   base: process.env.NODE_ENV === 'production' ? '/three-door/' : '/',
// })
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/three-door/', // Базовый путь для деплоя
  plugins: [vue()],
})
