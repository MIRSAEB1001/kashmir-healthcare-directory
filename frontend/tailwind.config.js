/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#8100D1",
                "secondary": "#B500B2",
                "accent": "#FF52A0",
                "warm": "#FFA47F",
                "background-light": "#f7f5f8",
                "background-dark": "#190f23",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "manrope": ["Manrope", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
}
