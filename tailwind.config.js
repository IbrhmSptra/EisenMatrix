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
        kuadran1: "#B5C0D0",
        kuadran2: "#CCD3CA",
        kuadran3: "#F5E8DD",
        kuadran4: "#F5E8DD",
      },
    },
  },
  plugins: [],
};
