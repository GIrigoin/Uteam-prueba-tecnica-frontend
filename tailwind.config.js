/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-bg": "url('./assets/Banner.jpg')",
      },
    },
  },
  plugins: [],
};
