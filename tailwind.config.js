/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx, ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "main-structure-col": "minmax(150px, 200px) 1fr",
      },
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: ["night", "light"]
  }
};
