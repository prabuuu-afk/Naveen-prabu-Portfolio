import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F2EA",
        ink: "#1A1A22",
        muted: "#5B5B66",
        line: "#DDD6C8",
        uiux: "#C2410C",
        qa: "#0F766E",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
