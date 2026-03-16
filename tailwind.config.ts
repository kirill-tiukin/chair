import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      colors: {
        bg: "#f7f6f9",
        surface: "#ffffff",
        border: "#e4e0ec",
        "border-strong": "#c8c2d8",
        muted: "#5e5870",
        faint: "#9e98ae",
        accent: {
          DEFAULT: "#2d1f6e",
          mid: "#4a35a8",
          light: "#ede9ff",
        },
        gold: {
          DEFAULT: "#d4a843",
          light: "#fdf6e3",
        },
        teal: {
          DEFAULT: "#1a8c7a",
          light: "#e6f7f4",
        },
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-up-delay-1": "fadeUp 0.7s 0.1s ease forwards",
        "fade-up-delay-2": "fadeUp 0.7s 0.2s ease forwards",
        "fade-up-delay-3": "fadeUp 0.7s 0.3s ease forwards",
        "fade-up-delay-4": "fadeUp 0.7s 0.4s ease forwards",
        "fade-up-delay-5": "fadeUp 0.7s 0.5s ease forwards",
        "fade-up-delay-6": "fadeUp 0.7s 0.65s ease forwards",
        "fade-up-delay-7": "fadeUp 0.7s 0.8s ease forwards",
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
