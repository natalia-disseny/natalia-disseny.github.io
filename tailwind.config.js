/** @type {import('tailwindcss').Config} */
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
            gray: {
                50: '#eaeaea',
                100: '#d6d6d6',
                200: '#c1c1c1',
                300: '#adadad',
                400: '#999999',
                500: '#848484',
                600: '#707070',
                700: '#5b5b5b',
                800: '#474747',
                900: '#333333',
            },
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
            teal: '#008080',
            white: '#ffffff',
        },
        fontFamily: {
            sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        },
        extend: {},
    },
    plugins: [],
}
