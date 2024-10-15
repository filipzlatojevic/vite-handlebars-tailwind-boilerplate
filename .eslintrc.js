module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  globals: {
    document: 'readonly',
    window: 'readonly',
  },
  rules: {
    'prettier/prettier': [
      "error", 
      { 
        'endOfLine': 'auto' 
      }
    ],
    'no-plusplus': 'off',
  }
}
