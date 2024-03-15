import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from "vite-plugin-dts";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({}), dts({
    exclude: ["node_modules", "examples"],
  })],

  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      input: './index.ts',
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {

      entry: "./index.ts",
      name: '__libName__(noCase)',
      fileName: 'index',
      formats: ["es", "umd"],
    }
  }
})