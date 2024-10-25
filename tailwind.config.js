/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'tmb-sans': ['roboto', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        'tmb-bg': '#f3f4f6',
        'tmb-black': '#000',
        'tmb-white': '#fff',
        'tmb-light-blue': '#55baff',
        'tmb-dark-blue': '#000870',
        'tmb-highlight': '#33cccc',
        'tmb-yellow': '#edc741'
      }
    },
  },
  plugins: [],
}