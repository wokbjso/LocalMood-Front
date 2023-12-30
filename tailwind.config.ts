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
        ".Headline0": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "2.2rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".Headline1": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "2rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".Headline2": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "1.8rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".Headline3": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "1.6rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
        ".Body1": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "500",
          fontSize: "1.6rem",
          lineHeight: "140%",
          letterSpacing: "-2%",
        },
        ".Body2": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "500",
          fontSize: "1.4rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
        ".Body3-Semibold": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "600",
          fontSize: "1.2rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
        ".Body3-Medium": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "500",
          fontSize: "1.2rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
        ".Body3-Regular": {
          fontFamily: "Pretendard, sans-serif",
          fontWeight: "400",
          fontSize: "1.2rem",
          lineHeight: "100%",
          letterSpacing: "-2%",
        },
      });
    }),
  ],
};
