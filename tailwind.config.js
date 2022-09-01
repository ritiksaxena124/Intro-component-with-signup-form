/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      red: "hsl(0, 100%, 74%)",
      green: "hsl(154, 59%, 51%)",
      blue: "hsl(248, 32%, 49%)",
      darkBlue: "hsl(249, 10%, 26%)",
      grayishBlue: "hsl(246, 25%, 77%)",
      white: "#fff",
      lightGreen: "hsl(154, 59%, 60%)"
    },
    extend: {},
  },
  plugins: [],
};
