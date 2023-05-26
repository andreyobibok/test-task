/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "390px",
      tablet: "768px",
      desktop: "1512px",
    },
    extend: {
      fontFamily: {
        main: "'Space Grotesk', sans-serif",
        title: "'Roboto', sans-serif",
        footer: "'Space Mono', monospace",
      },
      colors: {
        lightSand: "#FCF7E6",
        button: "#ED5E21",
      },
    },
  },
  plugins: [],
};
