module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
};
