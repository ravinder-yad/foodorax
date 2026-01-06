/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4d4f", // Vibrant Red
        accent: "#fbbf24",  // Amber/Gold
      }
    },
  },
  plugins: [],
}
