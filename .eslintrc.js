module.exports = {
  env: {
      browser: true,
      es6: true
    
  },
  extends: [
      'prettier/react',
      'airbnb',
      'prettier'

  ],
  globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
  },
  plugins: [
      "react",
      "prettier"
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  }
 }
