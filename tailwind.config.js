/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(192px, 1fr))",
        "auto-fit-107": "repeat(auto-fit, minmax(107px, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit-66": "repeat(2, minmax(66px, 1fr))",
      },
    },
  },
  plugins: [],
};
