/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8F0202',
        'srBlack': '#101010',
        'srBlack2': '#000000',
        'srWhite': '#DDDCDD',
      },
    },
  },
  plugins: [],
}

