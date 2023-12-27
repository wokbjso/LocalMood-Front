import { customColors } from './app/styles/colors';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: customColors,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.header-text': {
          fontFamily: 'Pretendard, sans-serif',
          fontWeight: '400',
          fontSize: '2rem',
          lineHeight: '3rem',
          letterSpacing: '-0.762px',
        },
      });
    }),
  ],
};
