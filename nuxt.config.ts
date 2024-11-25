export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    css: ['~/assets/css/main.css', '~/assets/fontello/css/natalia-disseny.css'],
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
        },
    },

    modules: [[
        '@nuxtjs/i18n',
        {
            defaultLocale: 'ca',
            strategy: 'prefix_except_default',
            detectBrowserLanguage: false,
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
        '@nuxt/content',
        '@nuxt/image',
    [
        'gtm-nuxt3',
        {
            gtm: {
                id: 'GTM-K2F5GSQZ',
            },
        }]
    ],

    nitro: {
        prerender: {
            crawlLinks: true,
            failOnError: false,
        },
    },
})