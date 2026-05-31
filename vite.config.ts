import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: <user>.github.io/nakazawa-tekkojo（プロジェクトサイト）で公開。
// 独自ドメイン直下に移す場合は base: '/' に戻す。
export default defineConfig({
  base: '/nakazawa-tekkojo/',
  plugins: [react()],
  ssgOptions: {
    // /about -> /about/index.html（GitHub Pages のクリーンURL向け）
    dirStyle: 'nested',
    formatting: 'minify',
  },
})
