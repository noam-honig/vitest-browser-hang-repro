import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    threads: true,

    include: ["./src/test/test.spec.ts"],
    globals: false,
  },
})
