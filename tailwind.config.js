/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        voler: {
          dark: '#0f172a', // Slate 900
          navy: '#1e293b', // Slate 800
          accent: '#94a3b8', // Slate 400
          gold: '#d4af37', // Muted Gold for premium feel
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}