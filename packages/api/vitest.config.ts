import path from 'path';
import { defineConfig } from 'vitest/config';

console.log('vitest', __dirname);

export default defineConfig({
  test: {
    // globals: true,
    // deps: { inline: ['@fastify/autoload'] },
    deps: {
      registerNodeLoader: true,
      // inline: true,
    },
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
    },
  },
});
