/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { top: '-100px' },
          '100%': { top: '0px' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s linear',
      }
    },
  },
  plugins: [],
}

