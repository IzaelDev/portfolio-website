import fluid, { extract, screens, fontSize } from "fluid-tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },

  theme: {
    extend: {
      fontFamily: {
        reggae: ["ReggaeOne"],
        inter: ["Inter"],
      },
      backgroundImage: {
        island: "url('/src/assets/images/toon_island.webp')",
      },
      screens: {
        xs: "20rem",
      },
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
};
