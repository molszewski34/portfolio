/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
      fontFamily: {
        poppins: ["'Poppins', regular"]
        // oswald: ["'Oswald', thin"]
        // montserrat: ["'Montserrat', regular"]
      }
    },
  },
  plugins: [],
}

