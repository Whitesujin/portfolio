import { defineConfig } from 'vite';
import { resolve } from 'path';
import { glob } from 'glob';

export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync('**/*.html', { ignore: ['node_modules/**', 'dist/**'] }).map(file => [
          // 파일의 경로명을 키(key)로 만듭니다 (예: pages/about)
          file.replace(/\.html$/, '').replace(/\\/g, '/'),
          // 전체 경로를 값(value)으로 연결합니다
          resolve(__dirname, file)
        ])
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/scss/variables" as *;`
      }
    }
  }
})