import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    ignores: ["cypress.config.js", "cypress/**", "dist/**"],
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];
