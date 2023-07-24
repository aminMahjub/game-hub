/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx, ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "app-structure-col": "minmax(150px, 200px) 1fr",
        "game-cards-col": "repeat(auto-fit, minmax(370px, 1fr))"
      },
      gridTemplateRows: {
        "app-structure-row": "60px 1fr",
      }
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: ["night", "light"]
  }
};
