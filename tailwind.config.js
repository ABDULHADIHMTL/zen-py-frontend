/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#081bca',
          800: '#0d30e3',
          700: '#1e40af',
        }
      }
    },
  },
  plugins: [],
}

