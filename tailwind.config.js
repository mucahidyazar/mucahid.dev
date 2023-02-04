/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#facc15',
      },
      screens: {
        widescreen: {
          raw: '(min-aspect-ratio: 3/2)',
        },
        tallscreen: {
          raw: '(max-aspect-ratio: 13/20)',
        },
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
