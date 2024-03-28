import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from "vite-plugin-dts";

import pkg from './package.json'; // 确保路径正确指向你的 package.json



// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __PKG_VERSION__: JSON.stringify(pkg.version), // 注意，在这里我们定义了一个全局常量
  },
  plugins: [vue(), vueJsx({}), dts({
    exclude: ["node_modules", "examples"],
  })],
  server: {
    host: '0.0.0.0', //解决"vite use --host to expose"
    port: __devPort__(noCase),
    open: true
  },
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
