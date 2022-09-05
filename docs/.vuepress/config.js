const { mediumZoomPlugin } = require("@vuepress/plugin-medium-zoom");
const { webpackBundler } = require("@vuepress/bundler-webpack");
const { defaultTheme } = require("@vuepress/theme-default");
const { searchPlugin } = require("@vuepress/plugin-search");

const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
  lang: "en-US",
  title: "vue-ellipse-progress",
  description: "This is not my first VuePress site",
  base: isDevMode ? "/" : "/vue-ellipse-progress-docs/",
  bundler: webpackBundler({
    evergreen: true,
  }),
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
    repo: "https://github.com/setaman/vue-ellipse-progress/tree/v2-dev",
    repoLabel: "GitHub",
    colorMode: "auto",
    navbar: [
      {
        text: "Guide",
        link: "/guide/",
      },
    ],
    sidebarDepth: 3,
    sidebar: {
      "/guide/": [
        {
          isGroup: true,
          text: "Guide",
          children: [
            {
              text: "Quick start",
              link: "/guide/README.md",
            },
            "/guide/installation.md",
            "/guide/usage.md",
            {
              isGroup: true,
              text: "Props",
              collapsible: true,
              children: [
                "/guide/options/README.md",
                {
                  text: "progress",
                  link: "/guide/options/progress.md",
                },
                {
                  text: "legend",
                  link: "/guide/options/legend.md",
                },
                {
                  text: "legendFormatter",
                  link: "/guide/options/legendFormatter.md",
                },
                {
                  text: "hideLegend",
                  link: "/guide/options/hideLegend.md",
                },
                {
                  text: "size",
                  link: "/guide/options/size.md",
                },
                {
                  text: "fontSize",
                  link: "/guide/options/fontSize.md",
                },
                {
                  text: "fontColor",
                  link: "/guide/options/fontColor.md",
                },
                {
                  text: "loading",
                  link: "/guide/options/loading.md",
                },
                {
                  text: "loader",
                  link: "/guide/options/loader.md",
                },
                {
                  text: "determinate",
                  link: "/guide/options/determinate.md",
                },
                {
                  text: "noData",
                  link: "/guide/options/nodata.md",
                },
                {
                  text: "line",
                  link: "/guide/options/line.md",
                },
                {
                  text: "lineMode",
                  link: "/guide/options/lineMode.md",
                },
                {
                  text: "linePosition",
                  link: "/guide/options/linePosition.md",
                },
                {
                  text: "emptyLinePosition",
                  link: "/guide/options/emptyLinePosition.md",
                },
                {
                  text: "thickness",
                  link: "/guide/options/thickness.md",
                },
                {
                  text: "emptyThickness",
                  link: "/guide/options/emptyThickness.md",
                },
                {
                  text: "color",
                  link: "/guide/options/color.md",
                },
                {
                  text: "colorFill",
                  link: "/guide/options/colorFill.md",
                },
                {
                  text: "emptyColor",
                  link: "/guide/options/emptyColor.md",
                },
                {
                  text: "half",
                  link: "/guide/options/half.md",
                },
                {
                  text: "reverse",
                  link: "/guide/options/reverse.md",
                },
                {
                  text: "angle",
                  link: "/guide/options/angle.md",
                },
                {
                  text: "animation",
                  link: "/guide/options/animation.md",
                },
                {
                  text: "gap",
                  link: "/guide/options/gap.md",
                },
                {
                  text: "data",
                  link: "/guide/options/data.md",
                },
                {
                  text: "dot",
                  link: "/guide/options/dot.md",
                },
                {
                  text: "dash",
                  link: "/guide/options/dash.md",
                },
              ],
            },
            "/guide/slots.md",
          ],
        },
        "/guide/compatibility.md",
        "/guide/contribution.md",
        "/guide/development.md",
      ],
    },
  }),
  plugins: [
    mediumZoomPlugin({ selector: "img.zoom" }),
    searchPlugin({
      isSearchable: (page) => page.path !== "/",
    }),
  ],
};
