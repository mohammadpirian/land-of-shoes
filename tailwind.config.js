/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-welcome-page": "url('background/welcomeBG.png')",
      },
    },
  },
  plugins: [],
};
