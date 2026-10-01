import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.{ts,tsx}'],
    // The four-store proof drives Noodle's internal compiler and runtime, so it runs only inside the
    // Noodle repository; a copied project runs every other test against the published packages.
    exclude: [...configDefaults.exclude, 'test/four-store-bindings.test.ts'],
  },
});
