/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22C55E",
          50: "#EEFCF3",
          100: "#D6F7E2",
          200: "#AEEFC6",
          300: "#7DE3A6",
          400: "#4CD583",
          500: "#22C55E",
          600: "#16A34A",
          700: "#128040",
          800: "#0F6635",
          900: "#0C542C",
        },
        secondary: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        accent: "#16A34A",
        bg: "#FFFDF8",
        ink: "#1F2937",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
        xl3: "24px",
        xl4: "28px",
        xl5: "30px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(31, 41, 55, 0.06)",
        softer: "0 4px 16px rgba(31, 41, 55, 0.05)",
        lift: "0 20px 40px rgba(22, 163, 74, 0.15)",
        glow: "0 0 0 4px rgba(34, 197, 94, 0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(4deg)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
