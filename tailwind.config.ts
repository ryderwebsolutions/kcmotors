import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E2230",
          50: "#F4F5F7",
          100: "#E4E6EB",
          200: "#C4C8D3",
          300: "#9BA1B3",
          400: "#6B7188",
          500: "#4A4F63",
          600: "#363A4C",
          700: "#282C3B",
          800: "#1E2230",
          900: "#151824",
          950: "#0D0F17",
        },
        lime: {
          DEFAULT: "#A3E635",
          50: "#F3FCE8",
          100: "#E4F8C7",
          200: "#CBF090",
          300: "#B0E85A",
          400: "#A3E635",
          500: "#8CCB1F",
          600: "#6FA318",
          700: "#547A13",
          800: "#3A560D",
          900: "#243508",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-body)"],
      },
      boxShadow: {
        card: "0 2px 10px rgba(21, 24, 36, 0.06)",
        "card-hover": "0 12px 28px rgba(21, 24, 36, 0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
