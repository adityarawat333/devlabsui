/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bevietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        sansation: ['"Sansation"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
