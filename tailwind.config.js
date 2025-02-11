/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add paths to your HTML, JS, or JSX files here
    './public/index.html',             // Include any other HTML files if needed
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sourceCodePro: ['Source Code Pro', 'monospace'], // Adding Source Code Pro as a monospaced font
        carlito: ['Carlito', 'sans-serif'],
        staatliches: ['Staatliches', 'sans-serif'],
        ptsans: ['PT Sans', 'sans-serif'],
        barlow:['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-highlights'), // If you have this plugin
    function ({ addComponents }) {
      addComponents({
        'p': {
          fontFamily: 'Carlito, sans-serif',
        },
        'h1': {
          fontFamily: 'Barlow Condensed, sans-serif',
        },
        'h5': {
          fontFamily: 'Carlito, sans-serif',
        },
      })
    },
  ],
}
