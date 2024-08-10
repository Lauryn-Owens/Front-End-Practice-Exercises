/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        redHatText:'redHatText'
      },
      colors:{
        'Rose-900': 'hsl(14, 65%, 9%)',
        'ivory':'rgb(255, 255, 240)',
         'red':'hsl(14, 86%, 42%)'

      }
    },
  },
  plugins: [],
}