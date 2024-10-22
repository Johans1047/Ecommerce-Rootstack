/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,css,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'voyage': {
                    '50': '#f0f8ff',
                    '100': '#e1f1fd',
                    '200': '#bbe3fc',
                    '300': '#80ccf9',
                    '400': '#3cb2f4',
                    '500': '#139dec',
                    '600': '#0679c3',
                    '700': '#06609e',
                    '800': '#0a5282',
                    '900': '#0e446c',
                    '950': '#092c48',
                },
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
}