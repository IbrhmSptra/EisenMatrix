/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "system-ui"],
        neucha: ["Neucha", "system-ui"],
      },
      colors: {
        darkText: "#141619",
        secondaryText: "#0FA4AF",
        grayField: "#B3B4BD",
        kuadran1: "#D37676",
        kuadran2: "#EBC49F",
        kuadran3: "#F1EF99",
        kuadran4: "#B0C5A4",
      },
    },
  },
  plugins: [],
};
