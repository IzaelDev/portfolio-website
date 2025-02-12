/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        'island': "url('/src/assets/images/toon_island.jpg')",
      } 
    },
  },
  plugins: [],
}