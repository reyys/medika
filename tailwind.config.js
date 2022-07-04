/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkest-blue': '#00162A',
      'dark-blue': '#004B8C',
      'semi-blue': '#739AC8',
      'light-blue': '#F0F7FF',
      'light-red': '#F4E6E6',
      'semi-red': '#EB5757',
      'neutral-color': '#CCCCCC',
      'white': '#FFFFFF',
      'semi-gray': '#D6DCE2',
      'light-gray': '#B3C9DD',
      'gray': '#E6EDF4',
      'green': '#87C534',
      'orange': '#F27400'
    },
    extend: {},
  },
  plugins: [],
}
