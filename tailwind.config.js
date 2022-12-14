/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-80%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          }
        }
      },
      animation: {
        fadeUp: "fadeUp 1.2s ease-in-out forwards",
        fadeUpCut: "fadeUp 2s ease-in-out forwards",
        fadeUpDelay1: "fadeUp 1.2s ease-in-out forwards 0.2s",
        fadeUpDelay2: "fadeUp 1.2s ease-in-out forwards 0.4s",
        fadeDown: "fadeDown 0.6s ease-in-out forwards 1s",
      }
    },
    screens: {
      'sm': '0px',
      // => @media (min-width: 0px) { ... } -> phone
      'md': '600px',
      // => @media (min-width: 600px) { ... } -> half-window
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... } -> laptop+
    },
    plugins: [],
  }
}