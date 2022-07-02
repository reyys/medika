/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#004B8C',
      'semi-blue': '#739AC8',
      'light-blue': '#F0F7FF',
      'light-red': '#F4E6E6',
      'semi-red': '#EB5757',
      'neutral-color': '#CCCCCC',
    },
    extend: {},
  },
  plugins: [],
}
