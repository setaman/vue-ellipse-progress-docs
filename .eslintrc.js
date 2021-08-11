module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
  },

  extends: ["plugin:prettier/recommended", "eslint:recommended"],
  rules: {
    "prettier/prettier": ["warn"],
    quotes: [2, "double"],
  },
};
