export default {
    title: 'Pro',
    base: process.env.NODE_ENV === 'production' ? '/pro/' : '/',
    themeConfig: {
      logo: "/logo.jpg",
      siteTitle: "Pro-UI",
      nav: [
        { text: "介绍", link: "/guild/introduce" },
        { text: "组件", link: "/components/button/" },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/ProsperousYe/pro.git" },
      ],
      sidebar: {
        "/guild/": [
            {
                text: "基础",
                items: [
                    {
                        text: "介绍",
                        link: "/guild/introduce",
                    }
                ],
            },
        ],
        "/components/": [
            {
                text: "基础组件",
                items: [
                    {
                        text: "Button",
                        link: "/components/button/index.md",
                    },
                    {
                        text: "Countdown",
                        link: "/components/countdown/index.md"
                    }
                ],
            }
        ]
    },
    },
  };