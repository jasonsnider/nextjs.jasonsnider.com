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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        coverFade: {
          '50%': { background: '#000' },
          '60%': { background: '#111' },
          '70%': { background: '#222' },
          '80%': { background: '#333' },
          '90%': { background: '#444' },
          '100%': { background: '#333' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 8s ease',
        coverFade: 'coverFade 16s ease',
      },
    },
  },
  plugins: [],
};
export default config;