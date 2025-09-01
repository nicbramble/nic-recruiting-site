/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto','"Helvetica Neue"','Arial','"Noto Sans"','"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"', 'sans-serif']
      },
      colors: {
        ink: "#0a0a0a"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
}
