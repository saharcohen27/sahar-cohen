/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        wave: {
          "0%": { transform: "rotate(0)" },
          "50%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        zoomin: "zoom-in 1s ease-in-out 0.25s 1",
        typing: "typing 2s steps(1, end) infinite",
        wave: "wave 2s infinite",
      },
      fontFamily: {
        default: "Helvetica",
      },
    },
  },
  plugins: [],
};
