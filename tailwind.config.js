/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1D1E25",
        blue: "#4759F9",
        yellow: "#FEAE37",
        grey: "#454C5D",
        white: "#FFFFFF",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"]
      },
      keyframes: {
        pulse: {
          '50%': {
            opacity: '0.2',
          }
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "900px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

