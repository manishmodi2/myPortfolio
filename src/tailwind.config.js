// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Crucial for Tailwind to find your classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // IMPORTANT: Add this experimental section to support @theme and @utility
  experimental: {
    optimizeUniversalSyntax: true,
  },
}