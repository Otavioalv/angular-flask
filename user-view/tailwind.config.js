/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '4sm': '0 0px 10px 3px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}
