import {configs, type ConfigWithExtends} from "typescript-eslint";
import {mergeDeepRight} from "ramda";

const tsConfig = configs.strictTypeChecked.reduce(mergeDeepRight);

export const languageOptions: ConfigWithExtends["languageOptions"] = tsConfig.languageOptions;

export const plugins: ConfigWithExtends["plugins"] = tsConfig.plugins;

export const rules: ConfigWithExtends["rules"] = {
  ...configs.eslintRecommended.rules,
  ...tsConfig.rules,
  "@typescript-eslint/array-type": [
    "error",
    {
      default: "array-simple",
      readonly: "generic",
    },
  ],
  "@typescript-eslint/class-methods-use-this": "error",
  "@typescript-eslint/consistent-generic-constructors": "error",
  "@typescript-eslint/consistent-type-assertions": "error",
  "@typescript-eslint/consistent-type-exports": "error",
  "@typescript-eslint/consistent-type-imports": [
    "error",
    {
      fixStyle: "inline-type-imports",
    },
  ],
  "@typescript-eslint/default-param-last": "error",
  // Note: you must disable the base rule as it can report incorrect errors
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": "error",
  "@typescript-eslint/explicit-member-accessibility": "error",
  "@typescript-eslint/explicit-module-boundary-types": "error",
  // Note: you must disable the base rule as it can report incorrect errors
  "max-params": "off",
  "@typescript-eslint/max-params": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "default",
      format: ["strictCamelCase"],
    },
    {
      selector: "import",
      format: ["strictCamelCase", "StrictPascalCase"],
    },
    {
      selector: "variable",
      format: ["strictCamelCase", "UPPER_CASE"],
    },
    {
      selector: ["parameter", "variable"],
      format: ["strictCamelCase"],
      modifiers: ["unused"],
      leadingUnderscore: "require",
    },
    {
      selector: "memberLike",
      format: [],
      modifiers: ["requiresQuotes"],
    },
    {
      selector: ["typeLike", "enumMember"],
      format: ["StrictPascalCase"],
    },
  ],
  "@typescript-eslint/no-empty-function": "error",
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-inferrable-types": "error",
  // Note: you must disable the base rule as it can report incorrect errors
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "error",
  "@typescript-eslint/no-unsafe-unary-minus": "error",
  "@typescript-eslint/no-unused-expressions": "error",
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/prefer-find": "error",
  "@typescript-eslint/prefer-for-of": "error",
  "@typescript-eslint/prefer-function-type": "error",
  "@typescript-eslint/prefer-nullish-coalescing": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/prefer-readonly": "error",
  "@typescript-eslint/prefer-string-starts-ends-with": "error",
  "@typescript-eslint/require-await": "off",
  // Note: you must disable the base rule as it can report incorrect errors
  "no-return-await": "off",
  "@typescript-eslint/return-await": "error",
  "@typescript-eslint/strict-boolean-expressions": "error",
  "@typescript-eslint/switch-exhaustiveness-check": "error",
  // Turn off rules that cause a lot of false positives
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
};
