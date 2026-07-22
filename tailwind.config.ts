import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF5FA2",
          50: "#FFF1F8",
          100: "#FFE3F1",
          200: "#FFC8E3",
          300: "#FFA8D1",
          400: "#FF7FB8",
          500: "#FF5FA2",
          600: "#E8478A",
          700: "#C73470",
          800: "#A52858",
          900: "#8A2148",
        },
        secondary: {
          DEFAULT: "#7A5AF8",
          50: "#F2EEFE",
          100: "#E4DEFD",
          200: "#C9BCFB",
          300: "#AE9AF9",
          400: "#9378F7",
          500: "#7A5AF8",
          600: "#6243E5",
          700: "#4D33B8",
          800: "#3A2690",
          900: "#2A1B68",
        },
        accent: {
          DEFAULT: "#FFD84D",
          50: "#FFFAEB",
          100: "#FFF5D6",
          200: "#FFEBAD",
          300: "#FFDF7A",
          400: "#FFD84D",
          500: "#F0C020",
          600: "#C99C10",
          700: "#A57E0A",
          800: "#82620A",
          900: "#5E4708",
        },
        background: "#FFF8FB",
        card: "#FFFFFF",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        display: ["var(--font-baloo)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(255, 95, 162, 0.15)",
        "soft-lg": "0 12px 40px -4px rgba(255, 95, 162, 0.20)",
        card: "0 2px 12px -2px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 32px -4px rgba(255, 95, 162, 0.25)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
