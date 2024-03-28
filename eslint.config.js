const globals = require("globals");
const tsEslint = require("typescript-eslint");
const strictish = require("./dist/index");

const tsEslintProject = {
  languageOptions: {
    parserOptions: {
      project: "./tsconfig.lint.json",
      tsconfigRootDir: __dirname,
    },
  },
};

module.exports = tsEslint.config(
  {files: ["**/*.ts"]},
  strictish.configs.recommended,
  strictish.configs.typescript,
  tsEslintProject,
  {languageOptions: {globals: {...globals.node}}},
);
