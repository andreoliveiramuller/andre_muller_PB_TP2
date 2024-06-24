module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb',
  ],
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
  },
  plugins: [
      'react',
  ],
  rules: {
      // Suas regras personalizadas aqui
  },
  settings: {
      react: {
          version: 'detect',
      },
  },
};
