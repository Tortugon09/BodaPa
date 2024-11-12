/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Old Standard TT, ui-serif',
        menu: 'Heebo, ui-serif', // Adds a new `font-display` class
      },
      colors: {
        'main': '#fefcf6',
        'second' : '#f4efe6',
        'title': '#162a2c'
      }
    }
  },
  plugins: [],
}

