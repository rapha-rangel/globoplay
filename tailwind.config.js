/** @type {import('tailwindcss').Config} */
module.exports = {
  import: 'inputSearch',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        sideBarAnimation:{
          "0%":{opacity:"0"},
          "100%":{opacity:"1"},
        },
        carosuelAnimation:{
          "0%":{opacity:"0", left:"-5rem"},
          "100%":{opacity:"1",  left:"0rem"},
        }
      },
    },
  },
  plugins: [],
}

