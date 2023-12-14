/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#4759F9",
        yellow: "#FEAE37",
        primary: "#1D1E25",
        grey: "#454C5D",
        white: "#FFFFFF",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "900px",
      lg: "1200px",
    },
  },
  plugins: [],
}

