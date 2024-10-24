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
                    href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Tsukimi+Rounded:wght@300;400;500;600;700&display=swap',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0&display=swap',
                }
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
                        name: 'En',
                        code: 'en',
                        file: 'en-US.json',
                    },
                    {
                        name: 'Ca',
                        code: 'ca',
                        file: 'ca-ES.json',
                    },
                    {
                        name: 'Es',
                        code: 'es',
                        file: 'es-ES.json',
                    },
                ],
            },
        ],
        [
            'nuxt-mail',
            {
                message: {
                    to: 'nataliasmdev@gmail.com',
                },
                smtp: {
                    service: 'gmail',
                    auth: {
                        user: 'nataliasmdev@gmail.com',
                        pass: 'ihvr hoiq yakc kpvv',
                    },
                },
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
