/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.vitepress/theme/**/*.{vue,ts}", "./guide/**/*.md"],
  darkMode: "selector",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
