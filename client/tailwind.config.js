/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Lora': ['Lora', 'serif'],
      'Urbanist': ['Urbanist', 'sans-serif']
    }
  },
  plugins: [],
}