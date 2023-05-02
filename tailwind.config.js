/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        Red: "hsl(0, 100%, 74%)",
        Green: "hsl(154, 59%, 51%)",
        Blue: "hsl(248, 32%, 49%)",
        dblue: "hsl(249, 10%, 26%)",
        gblue: "hsl(246, 25%, 77%)"
      },
      fontSize: {
        root: "16px",
      },
      fontFamily: {
        font: ["Poppins"],
      },
    },
  },
  plugins: [],
}

