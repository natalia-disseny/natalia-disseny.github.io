/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')
import colors from 'tailwindcss/colors'

const customPalette = {
    coral: {
        50: '#ffe4e1',
        100: '#FFCAC4',
        200: '#FFB0A8',
        300: '#FE978C',
        400: '#FD7D71',
        500: '#FF6F61',
        600: '#FC4B3A',
        700: '#FB321F',
        800: '#F71B06',
        900: '#DB1906',
    },
    teal: {
        50: '#e5f2f2',
        100: '#cce5e5',
        200: '#b2d8d8',
        300: '#99cccc',
        400: '#7fbfbf',
        500: '#66b2b2',
        600: '#4ca6a6',
        700: '#329999',
        800: '#198c8c',
        900: '#008080',
    },
    lemon: {
        100: '#fffae0',
        200: '#fff7d1',
        300: '#fff5c2',
        400: '#fff2b3',
        500: '#fff0a3',
        600: '#ffed94',
        700: '#ffeb85',
        800: '#ffe876',
        900: '#ffe667',
    },
}

export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        colors: {
            ...customPalette,
            black: colors.neutral[900],
            white: colors.neutral[50],
            primary: colors.neutral,
            secondary: customPalette.teal,
            accent: customPalette.lemon,
            // Status colors
            success: colors.green,
            info: colors.cyan,
            error: colors.red,
        },
        fontFamily: {
            sans: ['Comfortaa', 'ui-sans-serif', 'system-ui'],
            serif: ['Montserrat', 'ui-serif', 'Georgia'],
            display: ['Comfortaa'],
            body: ['Montserrat'],
        },
        extend: {},
    },
    plugins: [],
}
