const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
    lang: 'en-US',
    title: 'vue-ellipse-progress',
    description: 'This is not my first VuePress site',
    base: isDevMode ? "/" : "/vue-ellipse-progress-guide/",

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
                                    text: "size",
                                    link:  "/guide/options/size.md",
                                },
                            ]
                        },
                        '/guide/slots.md',
                    ],
                },
            ],
        }
    },
}
