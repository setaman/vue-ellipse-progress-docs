module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
  },

  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["warn"],
    quotes: [2, "double"],
  },
};
