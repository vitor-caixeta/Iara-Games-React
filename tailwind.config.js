/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#350655",
        secondary: "#621D8E",
        pink: "#9E4CD6",
        success: "#34B53A",
        info: "#02A0FC",
        danger: "#FF3A29",
        warning: "#FFB200",
      },
    },
  },
  plugins: [],
};
