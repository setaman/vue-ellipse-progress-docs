import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  { files: ["**/*.{js,mjs,mts,cjs,ts,vue}"] },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-valid-default-prop": "warn",
    },
  },
  {
    ignores: [
      "**/.DS_Store",
      "**/node_modules",
      "coverage",
      "dist",
      "ios",
      "android",
      "**/.env.local",
      "**/.env.*.local",
      "**/npm-debug.log*",
      "**/yarn-debug.log*",
      "**/yarn-error.log*",
      "**/pnpm-debug.log*",
      "**/.idea",
      "**/.vscode",
      "**/*.suo",
      "**/*.ntvs*",
      "**/*.njsproj",
      "**/*.sln",
      "**/*.sw?",
      "src/api/client",
      ".vitepress/cache",
      ".vitepress/theme/Guide/Progress/Snippet1.vue",
    ],
  },
];
