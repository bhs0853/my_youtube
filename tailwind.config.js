/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors:{
        'lightgray':"#222222",
        'searchbackground': "#121212",
        'searchtext' : "#212121",
        "channel":"#ABA497",
        "hovertext" : "#4D4D4D",
      }
    },
  },
  plugins: [],
}

