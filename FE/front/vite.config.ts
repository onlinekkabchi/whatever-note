import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  input: "src/index.js", // Entry point of your application
  output: {
    file: "dist/bundle.js", // Output file path
    format: "es", // ES6 module format
  },
  plugins: [resolve(), commonjs()],
});
