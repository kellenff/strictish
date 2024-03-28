import {configs, type ConfigWithExtends} from "typescript-eslint";
import {mergeDeepRight} from "ramda";
import * as typescript from "./typescript";

const tsConfig = configs.strict.reduce(mergeDeepRight);

export const languageOptions: ConfigWithExtends["languageOptions"] = tsConfig.languageOptions;

export const plugins: ConfigWithExtends["plugins"] = tsConfig.plugins;

export const rules: ConfigWithExtends["rules"] = [typescript.rules, configs.disableTypeChecked.rules].reduce(
  mergeDeepRight,
);
