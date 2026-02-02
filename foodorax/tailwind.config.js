/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: "#ff4d4f", // Vibrant Red
        accent: "#fbbf24",  // Amber/Gold
        dark: "#1f2937",
        light: "#f9fafb",
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(#d1d5db 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': "20px 20px",
        'dot-pattern': "20px 20px",
      }
    },
  },
  plugins: [],
}
