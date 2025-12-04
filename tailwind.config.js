/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6', // Blue like the sky
                secondary: '#10b981', // Green for success
                accent: '#f59e0b', // Amber/Orange for highlights
                danger: '#ef4444', // Red for errors
                background: '#f8fafc',
                surface: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
