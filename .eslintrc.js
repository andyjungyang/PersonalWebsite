module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'jsx-a11y/label-has-associated-control': ['error', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'either',
      depth: 25
    }],
    "jsx-a11y/label-has-for": [ 2, {
      "required": {
          "some": [ "nesting", "id" ]
      }
    }]
  },
};
