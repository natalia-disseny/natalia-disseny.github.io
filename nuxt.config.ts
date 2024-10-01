export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    css: ['~/assets/css/main.css'],
    devtools: { enabled: true },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    app: {
        head: {
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0',
                },
            ],
        },
    },

    modules: [
        [
            '@nuxtjs/i18n',
            {
                defaultLocale: 'ca',
                strategy: 'prefix_except_default',
                detectBrowserLanguage: false,
                langDir: 'locales',
                compilation: {
                    strictMessage: false,
                },
                locales: [
                    {
                        name: 'English',
                        code: 'en-US',
                        file: 'en-US.json',
                    },
                    {
                        name: 'Català',
                        code: 'ca',
                        file: 'ca.json',
                    },
                    {
                        name: 'Castellano',
                        code: 'es-ES',
                        file: 'es-ES.json',
                    },
                ],
            },
        ],
    ],

    nitro: {
        prerender: {
            crawlLinks: true,
            failOnError: false,
        },
    },
})
