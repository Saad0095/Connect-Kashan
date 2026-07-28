import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "#0f0d0b",
          muted: "#17130f",
          strong: "#1c1712",
        },
        border: {
          strong: "#2a231c",
        },
        text: {
          primary: "#f5efe6",
          secondary: "#a89d91",
          tertiary: "#00d8ff",
          inverse: "#d8cfc2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter Variable", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        xs: ["13px", "20px"],
        sm: ["15px", "22px"],
        base: ["17px", "28px"],
        md: ["18px", "28px"],
        lg: ["20px", "30px"],
        xl: ["22px", "32px"],
        "2xl": ["26px", "36px"],
        "3xl": ["32px", "42px"],
        "4xl": ["40px", "52px"],
        "5xl": ["52px", "64px"],
        "6xl": ["64px", "76px"],
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
      },
      borderRadius: {
        xs: "10px",
        sm: "16px",
        md: "9999px",
      },
      boxShadow: {
        "1": "0px 34px 90px -34px rgba(0,0,0,0.92), 0px 0px 64px -20px rgba(255,138,61,0.28)",
        "glow": "0px 0px 40px -10px rgba(255,138,61,0.35)",
      },
      transitionDuration: {
        instant: "150ms",
        fast: "200ms",
        normal: "250ms",
        slow: "400ms",
        slower: "450ms",
      },
    },
  },
  plugins: [],
};

export default config;
