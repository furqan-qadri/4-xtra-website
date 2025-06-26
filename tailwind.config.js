/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf7ff',
          100: '#f3edff',
          200: '#e9ddff',
          300: '#d8c2ff',
          400: '#c299ff',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c2d12',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        secondary: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fafafa',
          300: '#f5f5f5',
          400: '#eeeeee',
          500: '#e0e0e0',
          600: '#bdbdbd',
          700: '#9e9e9e',
          800: '#616161',
          900: '#424242',
        }
      }
    },
  },
  plugins: [],
};
