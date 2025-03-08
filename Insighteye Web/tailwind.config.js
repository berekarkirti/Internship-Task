/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 2s linear infinite',
      },
      colors: {
        primary: '#EF5350',
        secondary: 'white',
        dark: 'black',
      },
    },
  },
  plugins: [],
};
