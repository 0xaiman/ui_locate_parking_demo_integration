/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4c9aa0',
          30: 'rgba(76, 154, 160, 0.3)',
          50: 'rgba(76, 154, 160, 0.5)',
        },
      },
    },
  },
  plugins: [],
};
