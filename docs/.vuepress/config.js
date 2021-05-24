const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
    lang: 'en-US',
    title: 'vue-ellipse-progress',
    description: 'This is my first VuePress site',
    base: isDevMode ? "/" : "/vue-ellipse-progress-docs/",
    markdown: {
        code: {
            lineNumbers: false,
        }
    },
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            {
                text: 'Docs',
                link: '/docs/'
            },
        ],
        sidebarDepth: 3,
        sidebar: {
            '/docs/': [
                {
                    isGroup: true,
                    text: 'Docs',
                    children: [
                        '/docs/README.md',
                        '/docs/options.md',
                        '/docs/slots.md',
                    ],
                },
            ],
        }
    }
}
