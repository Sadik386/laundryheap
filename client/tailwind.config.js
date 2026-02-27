/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'lh-blue': '#001A39', // Extracted from "deep-black" or dark blue class in HTML which often is the primary brand dark color
                'lh-cyan': '#00B5E2', // Primary laundryheap cyan/blue
                'lh-yellow': '#FFD06D', // The yellow accent
                'lh-light-blue': '#F4F9FC', // Light background
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
