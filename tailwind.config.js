/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        military: '#2d5016',
        tactical: '#4a5f3f',
        outdoor: '#8b7355',
      },
    },
  },
  plugins: [],
}
