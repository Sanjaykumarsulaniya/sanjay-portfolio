/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink: '#080b12', panel: '#0e121c', line: '#202635', muted: '#98a2b3', accent: '#a9f04b' }, fontFamily: { sans: ['Manrope', 'sans-serif'], display: ['Outfit', 'sans-serif'] } } },
  plugins: [],
}
