# strictish

My strict(ish) eslint flat config.

## Usage

```javascript
import strictish from '@fromo/strictish';
import tsEslint from 'typescript-eslint';

const tsEslintProject = {
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
};

export default tsEslint.config(
  {files: ["**/*.ts"]},
  strictish.configs.recommended,
  // Optional. You can also use strictish.configs.typescriptWithoutTypeChecking to not use type checking
  strictish.configs.typescript,
  // Only required if you are using strictish.configs.typescript
  tsEslintProject,
  // Your rules here
);
```

## Contributing

This project is dual-licensed under The Unlicense and MIT, pull requests and filing issues are welcome. This project uses the Contributor Covenant Code of Conduct, see [code_of_conduct.md]() for details.
