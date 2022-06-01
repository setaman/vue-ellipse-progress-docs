module.exports = {
  content: [
    "./index.html",
    "./docs/.vuepress/theme/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/guide/**/*.md",
  ],
  corePlugins: {
    preflight: false,
  },
  /*purge: [
    './docs/!**!/!*.vue',
  ],*/
};
