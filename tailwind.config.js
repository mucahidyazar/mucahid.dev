/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      // 0.87:1
      aspectRatio: {
        '87/100': '87 / 100',
      },
      boxShadow: {
        'soft-md': '0px 0px 20px 0px rgba(0,0,0,0.2)',
        'soft-lg': '0px 0px 20px 0px rgba(176, 48, 11, 0.4)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        main: 'hsl(var(--main) / <alpha-value>)',

        'primary-500': 'hsl(var(--primary-500) / <alpha-value>)',
        'primary-700': 'hsl(var(--primary-700) / <alpha-value>)',
        'primary-900': 'hsl(var(--primary-900) / <alpha-value>)',

        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        link: 'hsl(var(--link) / <alpha-value>)',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        input: 'hsl(var(--input))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        ring: 'hsl(var(--ring))',
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
        'accordion-down': {
          from: {height: 0},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: 0},
        },
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'open-menu': 'open-menu 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
