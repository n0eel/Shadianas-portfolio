
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0A1F2F", 
          light: "#132B41", 
        },
        mint: {
          DEFAULT: "#64FFDA", 
        },
        divine: {
          DEFAULT: "#FFD700", 
        },
        pink: {
          50: "#FFF0F7",
          100: "#FFE1EF",
          200: "#FFC3DF",
          300: "#FF96C8",
          400: "#FF69B4", // Hot pink
          800: "#FF5BA7",
          600: "#E6409A",
          700: "#BF2D7F",
          800: "#991F68",
          800: "#731A50",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
