/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'exo': ['Exo\\ 2', 'sans-serif'],
        'noto': ['Noto\\ Serif', 'serif'],
        'caveat': ['Caveat', 'cursive'],
        'ibm': ['IBM\\ Plex\\ Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
