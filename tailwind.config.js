/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C5A880',
          goldLight: '#DFC9AA',
          goldDark: '#A68860',
          goldAccent: '#D4AF6A',
          cream: '#FBF9F5',
          creamDarker: '#F3EFE6',
          navyDark: '#08162F',
          navyCard: '#0E2243',
          navyDeep: '#050F22',
          navyAccent: '#122B54',
          charcoal: '#1A1A1A',
          subtleGray: '#707784',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Roboto', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.2em',
        wideLuxury: '0.25em',
        ultraWide: '0.3em'
      }
    },
  },
  plugins: [],
}
