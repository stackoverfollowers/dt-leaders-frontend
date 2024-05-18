// vite.config.js
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
  plugins: [react({ plugins: [['effector-swc-plugin', {}]] })],
  define: {
    APP_VERSION: JSON.stringify(pkg.version),
  },
  build: {
    cssMinify: true,
  },
  resolve: {
    alias: {
      '@lib': path.resolve('src', 'shared', 'lib'),
      '@components': path.resolve('src', 'shared', 'components'),
      '@config': path.resolve('src', 'shared', 'config'),
      '@hocs': path.resolve('src', 'shared', 'hocs'),
      '@ui': path.resolve('src', 'shared', 'ui'),
      '@assets': path.resolve('src', 'shared', 'assets'),
      '@entities': path.resolve('src', 'entities'),
      '@features': path.resolve('src', 'features'),
      '@widgets': path.resolve('src', 'widgets'),
      '@shared': path.resolve('src', 'shared'),
      '@pages': path.resolve('src', 'pages'),
      '@app': path.resolve('src', 'app'),
    },
  },
  server: {
    // Effector does not support HMR yet.
    // So, it's better to disable HMR for now to avoid unexpected behavior.
    // hmr: false,
    port: 3000,
    cors: {
      origin: process.env.VITE_BACKEND_URL,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL,
        secure: false,
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('origin', process.env.VITE_BACKEND_URL as string);
          });
        },
      },
    },
  },
});
