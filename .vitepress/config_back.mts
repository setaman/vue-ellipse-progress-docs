import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vue-ellipse-progress docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          {
            text: "Quick start",
            link: "/guide/index",
          },
          {
            text: "Installation",
            link: "/guide/installation",
          },
          /*{
            text: "Usage",
            link: "/guide/usage",
          },*/
          /*{
            text: 'Props',
            collapsed: true,
            items: [],
            /!*items: [
              {
                text: "Props overview",
                link: "/guide/options/index",
              },
              {
                text: "progress",
                link: "/guide/options/progress",
              },
              {
                text: "legend",
                link: "/guide/options/legend",
              },
              {
                text: "legendFormatter",
                link: "/guide/options/legendFormatter",
              },
              {
                text: "hideLegend",
                link: "/guide/options/hideLegend",
              },
              {
                text: "size",
                link: "/guide/options/size",
              },
              {
                text: "fontSize",
                link: "/guide/options/fontSize",
              },
              {
                text: "fontColor",
                link: "/guide/options/fontColor",
              },
              {
                text: "loading",
                link: "/guide/options/loading",
              },
              {
                text: "loader",
                link: "/guide/options/loader",
              },
              {
                text: "determinate",
                link: "/guide/options/determinate",
              },
              {
                text: "noData",
                link: "/guide/options/nodata",
              },
              {
                text: "line",
                link: "/guide/options/line",
              },
              {
                text: "lineMode",
                link: "/guide/options/lineMode",
              },
              {
                text: "linePosition",
                link: "/guide/options/linePosition",
              },
              {
                text: "emptyLinePosition",
                link: "/guide/options/emptyLinePosition",
              },
              {
                text: "thickness",
                link: "/guide/options/thickness",
              },
              {
                text: "emptyThickness",
                link: "/guide/options/emptyThickness",
              },
              {
                text: "color",
                link: "/guide/options/color",
              },
              {
                text: "colorFill",
                link: "/guide/options/colorFill",
              },
              {
                text: "emptyColor",
                link: "/guide/options/emptyColor",
              },
              {
                text: "emptyColorFill",
                link: "/guide/options/emptyColorFill",
              },
              {
                text: "half",
                link: "/guide/options/half",
              },
              {
                text: "reverse",
                link: "/guide/options/reverse",
              },
              {
                text: "angle",
                link: "/guide/options/angle",
              },
              {
                text: "animation",
                link: "/guide/options/animation",
              },
              {
                text: "gap",
                link: "/guide/options/gap",
              },
              {
                text: "data",
                link: "/guide/options/data",
              },
              {
                text: "dot",
                link: "/guide/options/dot",
              },
              {
                text: "dash",
                link: "/guide/options/dash",
              },
              {
                text: "legendClass",
                link: "/guide/options/legendClass",
              },
            ],*!/
          },*/
          /*{
            text: "Slots",
            collapsed: true,
            children: [
              {
                text: "default",
                link: "/guide/slots/default",
              },
              {
                text: "legend-caption",
                link: "/guide/slots/legend-caption",
              },
              {
                text: "circle-progress",
                link: "/guide/slots/circle-progress",
              },
              {
                text: "legend",
                link: "/guide/slots/legend",
              },
            ],
          },*/
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
