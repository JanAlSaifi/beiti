import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        homepageTitle: ["Allura", "cursive"],
        homepageSubtitle: ["Playfair Display", "serif"],
        title: ["Poppins", "sans-serif"],
        text: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        home: "url('/img/michael-starkie.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundBox: "var(--backgroundBox)",
        highlight: "var(--highlightText)",
        mainText: "var(--mainText)",
        textHover: "var(--textHover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
