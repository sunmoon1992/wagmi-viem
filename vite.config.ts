import { vitePluginForArco } from '@arco-plugins/vite-react'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
// add package @types/node
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    vitePluginForArco({
      modifyVars: {
        'border-1': '2px',
        'primary-6': '#232323',
        'border-radius-small': '6px'
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  // import.meta.env.xx
  envPrefix: 'DAPP',
  build: {
    // sourcemap: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Error: Can't find stylesheet to import.
        // @import 'src/style/index.scss';
        // @notice: "@import './xx/xx/xx.scss';"
        // additionalData: "@import './src/style/global.less';"
      }
    }
  },
  define: {
    'process.env': process.env
  }
})
