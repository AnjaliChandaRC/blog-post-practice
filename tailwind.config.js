/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ["Merriweather", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        blue: "#000638",
        light_blue: "#283a61",
        gray: "#605c59",
        light_gray: "#5f5f5f",
        dark_gray: "#515151",
        light_black: "#434343",
        dark_black: "#4f4f4f",
        light_black2: "#dfe6ff",
        brown: "#544b44",
        dark_brown: "#3e3e3e",
        light_brown: "#303030",
        white_off: "#FEFEFE",
        white_off_2: "#F5F5F5",
        white_off_3: "#dfe1e7",
      },
      fontSize: {
        "3xl": "26px",
        "6xl": "46px",
      },
    },
  },
  plugins: [],
};
