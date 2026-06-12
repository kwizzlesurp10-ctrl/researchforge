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
        background: "#09090b",
        foreground: "#f4f4f5",
        card: "#18181b",
        "card-foreground": "#e4e4e7",
        primary: "#10b981",
        "primary-foreground": "#052e16",
        accent: "#14b8a6",
        muted: "#27272a",
        "muted-foreground": "#a1a1aa",
        border: "#3f3f46",
        destructive: "#ef4444",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;