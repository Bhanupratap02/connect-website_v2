/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: "#666",
        darkslategray: "#4b4b4b",
        seagreen: "#066b3c",
        lightgreen: "#92e29d",
        teal: "#338369",
        gray: "#242728",
        gainsboro: "#dfdfdf",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // other plugins...
  ],
};