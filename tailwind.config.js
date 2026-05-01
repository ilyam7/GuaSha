/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#B8956A',
          light: '#E8DCC8',
          dark: '#8C6F4F',
        },
        ink: '#0F0F0F',
        paper: '#FAFAF7',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};
