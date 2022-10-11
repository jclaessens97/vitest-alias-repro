import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // globals: true,
    // deps: { inline: ['@fastify/autoload'] },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
