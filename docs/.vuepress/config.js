const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
    lang: 'en-US',
    title: 'vue-ellipse-progress',
    description: 'This is not my first VuePress site',
    base: isDevMode ? "/" : "/vue-ellipse-progress-docs/",

    markdown: {
        code: {
            lineNumbers: false,
        }
    },
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: "https://github.com/setaman/vue-ellipse-progress/tree/v2-dev",
        repoLabel: "GitHub",
        navbar: [
            {
                text: 'Guide',
                link: '/guide/'
            },
        ],
        sidebarDepth: 3,
        sidebar: {
            '/guide/': [
                {
                    isGroup: true,
                    text: 'Guide',
                    children: [
                        {
                            text: 'Quick start',
                            link: "/guide/README.md",
                        },
                        "/guide/installation.md",
                        "/guide/usage.md",
                        {
                            isGroup: true,
                            text: "Options",
                            children: [
                                "/guide/options/README.md",
                                {
                                    text: "progress",
                                    link: "/guide/options/progress.md"
                                },
                                {
                                    text: "legend",
                                    link: "/guide/options/legend.md"
                                },
                                {
                                    text: "size",
                                    link:  "/guide/options/size.md",
                                },
                                {
                                    text: "line",
                                    link:  "/guide/options/line.md",
                                },
                                {
                                    text: "lineMode",
                                    link:  "/guide/options/lineMode.md",
                                },
                                {
                                    text: "linePosition",
                                    link:  "/guide/options/linePosition.md",
                                },
                                {
                                    text: "thickness",
                                    link:  "/guide/options/thickness.md",
                                },
                                {
                                    text: "emptyThickness",
                                    link:  "/guide/options/emptyThickness.md",
                                },
                            ]
                        },
                        '/guide/slots.md',
                    ],
                },
                "/guide/compatibility.md",
                "/guide/contribution.md",
                "/guide/development.md"
            ]
        }
    },
}
