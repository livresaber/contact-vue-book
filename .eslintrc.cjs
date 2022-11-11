/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-mutating-props': 'off '
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
