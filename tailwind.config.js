/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF6B35',
        'brand-blue': '#4A90E2',
        'brand-gray': '#6B7280',
        'brand-light-gray': '#F3F4F6',
        'brand-dark': '#1F2937'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}