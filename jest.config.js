export default {
  preset: "ts-jest/presets/default-esm", // pakai preset ESM ts-jest
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
  },
  globals: {},
}
