module.exports = {
  root: true,
  extends: [],
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
  plugins: [
    'react',
    'react-native',
  ],
  parser: 'babel-eslint',
  env: {
    'react-native/react-native': true
  },
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    }
  }
}
