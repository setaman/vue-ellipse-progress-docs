/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./.vitepress/theme/**/*.{vue,ts}",
    "./guide/**/*.md",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
