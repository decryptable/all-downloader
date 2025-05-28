import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs", "iife"],
  globalName: "AllDownloader",
  // splitting: true,
  // sourcemap: false,
  minify: true,
  dts: true,
  clean: true,
  outDir: "dist",
  // target: "esnext",
  // legacyOutput: true,
  outExtension({ format }) {
    return {
      js: `.${format === 'cjs' ? 'cjs' : format === 'esm' ? 'mjs' : 'iife.js'}`,
    };
  },
})
