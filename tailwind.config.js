/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        primary: "#A52A2A",
        secondary: "#FFD700",

      },
      
      container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"3rem",
        
      }},
  },
  plugins: [],
}

}