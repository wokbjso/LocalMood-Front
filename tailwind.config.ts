import { customColors } from "./app/styles/colors";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: customColors,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".header-light": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "500",
          fontSize: "2rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".header-main": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "700",
          fontSize: "2rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".headline0": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "2.2rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".headline1": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "2rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".headline2": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "1.8rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".headline3": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "1.6rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },

        ".headline1-semibold": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "2rem",
          lineHeight: "100%",
          letterSpacing: "-0.4px",
        },
        ".headline2-semibold": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "1.8rem",
          lineHeight: "100%",
          letterSpacing: "-0.36px",
        },
        ".headline3-semibold": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "1.6rem",
          lineHeight: "100%",
          letterSpacing: "-0.32px",
        },
        ".body1": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "500",
          fontSize: "1.6rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".body2-semibold": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "1.4rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
        ".body2-medium": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "500",
          fontSize: "1.4rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
        ".body3-semibold": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "1.2rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
        ".body3-medium": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "500",
          fontSize: "1.2rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
        ".body3-regular": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "400",
          fontSize: "1.2rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
        ".modal-text": {
          fontFamily: "Pretendard",
          fontWeight: "500",
          fontSize: "1.6rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
      });
    }),
  ],
};
