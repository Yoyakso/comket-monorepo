/// <reference types='vitest' />
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../node_modules/.vite/frontend',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        icon: true,
      },
    })
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/frontend',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@'를 'apps/frontend/src'로 매핑
      '@components': path.resolve(__dirname, 'src/components'), // '@components'를 'apps/frontend/src/components'로 매핑
      '@pages': path.resolve(__dirname, 'src/pages'), // '@pages'를 'apps/frontend/src/pages'로 매핑
      '@styles': path.resolve(__dirname, 'src/styles'), // '@styles'를 'apps/frontend/src/styles'로 매핑
      '@assets': path.resolve(__dirname, 'src/assets'), // '@assets'를 'apps/frontend/src/assets'로 매핑
      '@hooks': path.resolve(__dirname, 'src/hooks'), // '@hooks'를 'apps/frontend/src/hooks'로 매핑
      '@types': path.resolve(__dirname, 'src/types'), // '@context'를 'apps/frontend/src/context'로 매핑
      '@utils': path.resolve(__dirname, 'src/utils'), // '@utils'를 'apps/frontend/src/utils'로 매핑
      '@api': path.resolve(__dirname, 'src/api'), // '@api'를 'apps/frontend/src/api'로 매핑
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../coverage/frontend',
      provider: 'v8' as const,
    },
  },
}));
