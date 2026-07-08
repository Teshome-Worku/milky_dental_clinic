import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1DA1F2",
          "blue-dark": "#0e86d0",
          "blue-light": "#e8f4fd",
          gold: "#D4AF37",
          dark: "#0F172A",
          secondary: "#475569",
          gray: "#E5E7EB",
          bg: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        btn: "14px",
        img: "24px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(15, 23, 42, 0.06)",
        "soft-lg": "0 8px 48px rgba(15, 23, 42, 0.08)",
        blue: "0 8px 25px rgba(29, 161, 242, 0.25)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
