/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#2563eb",
          200: "#598EF3",
          300: "#D3E6FE",
        },
        accent: {
          100: "#d946ef",
          200: "#fae8ff",
        },
        text: {
          100: "#cbd5e1",
          200: "#94a3b8",
        },
        bg: {
          100: "#1e293b",
          200: "#334155",
          300: "#475569",
        },
      },
      fontFamily: {
        sans: ["Neue", "sans-serif"],
      },
      maxWidth: {
        "custom": "1200px",
      },
      margin: {
        "custom": "0 1.4rem",
      }
    },
  },
  plugins: [],
};
