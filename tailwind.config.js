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
        "game-cards-row": "repeat(2, 383px)"
      }
    },
  },

  safelist: ['text-rose-700', 'font-bold'],

  plugins: [require('daisyui')],
  daisyui: {
    themes: ["night", "light"]
  }
};
