/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // "background-footer": "rgb(236 231 209)",
        "background-footer": "black",
        // primary: "rgb(102 67 27)",
        primary: "white",
        secondary: "rgb(rgb(102 67 27) / .7)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
