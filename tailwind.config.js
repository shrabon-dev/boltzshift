/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'10px',
      },
      fontFamily: {
        clash: ['ClashGroteskVariable', 'sans-serif'],
      },
      colors:{
        main:"#FAD007",
        secondary:"#07070A",
        third:"#CCCCCC80",
        fourth:"#39393B",
      },
    },
  },
  plugins: [],
}

