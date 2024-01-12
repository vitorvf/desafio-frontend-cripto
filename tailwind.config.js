/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobileLandscape: {
          raw: "(orientation: landscape) and (max-height: 1000px)",
        },
      },
    },
  },
  plugins: [],
};
