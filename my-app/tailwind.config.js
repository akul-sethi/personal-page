/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#12232e",
          light: "#007cc7", 
          lighter: "#4da8da",
          shadowdark: "#203647",
          shadowlight: "#eefbfb"
        },
      }
    },
  },
  plugins: [],
}

