import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginBrowserSync from 'vite-plugin-browser-sync'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  assetsDir: ['public'],
  outDir: './',
  base: '/',
  plugins: [
    vue({
      template: {
        transformAssetUrls
      },
    }),
    quasar({
      autoImportComponentCase: 'combined'
    }),
    VitePluginBrowserSync()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      }
    ]
  },
  build: {
    rollupOptions: {
      input: '/src/main.js',
      // manualChunks(id) {
      //   if (id.includes('node_modules')) {
      //       return id.toString().split('node_modules/')[1].split('/')[0].toString();
      //   }
      // },
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: `assets/[ext]/[name].[ext]`,
      },
    },
  },
  // configureServer: app => {
  //   app.use(
  //     require("sass").middleware({
  //       src: __dirname,
  //       dest: __dirname,
  //       outputStyle: "compressed",
  //       prefix: "/",
  //     })
  //   );
  // },
});

