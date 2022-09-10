/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#012840',
      secondary: '#025E73',
      tertiary: '#04ADBF',
      pink: '#EE05F2',
      white: '#D9D9D9',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
