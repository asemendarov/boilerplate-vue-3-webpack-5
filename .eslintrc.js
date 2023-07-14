const path = require('path');

const OFF = 'off';
const ERROR = 'error';
const WARNING = 'warn';
const NEVER = 'never';

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'vue',
    'import',
    'promise',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.config.ts'),
      },
    },
  },
  rules: {
    semi: OFF,
    'no-shadow': OFF,
    'no-plusplus': OFF,
    'no-console': [WARNING, { allow: ['error'] }],
    'no-use-before-define': OFF,
    'arrow-body-style': OFF,
    'max-len': [WARNING, {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: true,
    }],
    /**
     * @see https://github.com/eslint/eslint/issues/12018
     * @see https://github.com/eslint/eslint/issues/9259
     */
    'object-curly-newline': [ERROR, {
      ImportDeclaration: {
        multiline: true,
        minProperties: 100,
        consistent: true,
      },
    }],
    // import
    'import/no-extraneous-dependencies': OFF,
    'import/prefer-default-export': OFF,
    'import/extensions': [ERROR,
      'ignorePackages',
      {
        js: NEVER,
        ts: NEVER,
      },
    ],
    'import/order': [ERROR, {
      groups: [
        'builtin',
        'external',
        'parent',
        'sibling',
        'index',
        'internal',
        'object',
        'unknown',
        'type',
      ],
    }],
    // sonarjs
    'sonarjs/no-duplicate-string': OFF,
    // VUE
    'vue/no-unused-refs': ERROR,
    'vue/no-useless-v-bind': ERROR,
    'vue/define-macros-order': ERROR,
    'vue/component-api-style': ERROR,
    'vue/no-useless-mustaches': ERROR,
    'vue/multi-word-component-names': OFF,
    'vue/no-empty-component-block': ERROR,
    'vue/define-props-declaration': ERROR,
    'vue/define-emits-declaration': ERROR,
    'vue/no-template-target-blank': ERROR,
    'vue/no-ref-object-destructure': ERROR,
    'vue/match-component-import-name': ERROR,
    'vue/no-multiple-objects-in-class': ERROR,
    'vue/prefer-separate-static-class': ERROR,
    'vue/no-required-prop-with-default': ERROR,
    'vue/prefer-true-attribute-shorthand': ERROR,
    'vue/no-static-inline-styles': [WARNING, { allowBinding: true }],
    'vue/no-undef-components': [ERROR, {
      ignorePatterns: ['router(\\-\\w+)+'],
    }],
    'vue/component-name-in-template-casing': [
      ERROR,
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    'vue/component-tags-order': [ERROR, {
      order: ['template', 'script', 'style'],
    }],
    // TS
    '@typescript-eslint/semi': ERROR,
    '@typescript-eslint/no-shadow': ERROR,
    '@typescript-eslint/no-unused-vars': WARNING,
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/no-use-before-define': [ERROR, {
      functions: false,
    }],
    '@typescript-eslint/consistent-type-imports': ERROR,
    '@typescript-eslint/member-delimiter-style': ERROR,
    '@typescript-eslint/type-annotation-spacing': [ERROR, {
      before: false,
      after: true,
      overrides: {
        arrow: { before: true, after: true },
      },
    }],
  },
  overrides: [
    // JS files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': OFF,
      },
    },
  ],
};
