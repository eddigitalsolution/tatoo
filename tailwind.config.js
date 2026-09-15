/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gallery: {
          950: '#09090b',
          900: '#121215',
          850: '#18181c',
          800: '#222227',
          700: '#3f3f46',
          300: '#d4d4d8',
          100: '#f4f4f5',
          gold: '#c9a86b',
          accent: '#e2b857'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
