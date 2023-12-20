/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/layout/*.liquid',
    './src/templates/*.liquid',
    './src/templates/customers/*.liquid',
    './src/sections/*.liquid',
    './src/snippets/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
