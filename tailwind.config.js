/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AC967F",
        secondary: "#961F1B",
        darkColor: "#1F2324",
      },
      fontFamily: {
        beautyFont: "beautyFont",
        proxima: "proxima",
      },
    },
  },
  plugins: [],
};
