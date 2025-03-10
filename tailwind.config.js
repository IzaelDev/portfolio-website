import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    extract
  },

  theme: {
    extend: {
      fontFamily: {
        'sherwood': ['Sherwood'],
        'hylian': ['Hylian'],
        'hylian64': ['Hylian64'],
        'reggae': ['ReggaeOne'],
        'rock': ['RocknRoll'],
        'inter': ['Inter'],
        'fotrodin': ['FotRodin'],
      },
      backgroundImage: {
        'island': "url('/src/assets/images/toon_island.webp')",
      },
      screens: {
        'xs': '20rem'
      }
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
}