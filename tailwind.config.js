/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-roboto-mono)'],
            },
            colors: {
                primary: '#915EFF',
                secondary: '#050816',
                tertiary: '#151030',
                'black-100': '#100d25',
                'black-200': '#090325',
                'white-100': '#f3f3f3',
            },
        },
    },
    plugins: [],
};
