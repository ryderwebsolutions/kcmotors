import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1A1A1A",
          50: "#F7F7F7",
          100: "#EBEBEB",
          200: "#D4D4D4",
          300: "#A8A8A8",
          400: "#737373",
          500: "#525252",
          600: "#3A3A3A",
          700: "#262626",
          800: "#1A1A1A",
          900: "#0D0D0D",
          950: "#050505",
        },
        lime: {
          DEFAULT: "#E2222D",
          50: "#FDECED",
          100: "#FBD2D4",
          200: "#F5A7AC",
          300: "#ED7A80",
          400: "#E2222D",
          500: "#C81F29",
          600: "#A11922",
          700: "#7A141B",
          800: "#541014",
          900: "#350A0D",
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
