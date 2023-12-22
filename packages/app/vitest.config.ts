import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'unit',
    dir: 'src',
    globals: true,
    includeSource: ['./**/*.mts'],
  },
});
