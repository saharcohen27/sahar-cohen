/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: "Helvetica",
      },
      backgroundImage: {
        "sahar-cohen": "url(./assets/logo512.png)",
        "metadata-fetcher": "url(./assets/MetadataFetcherLogo.png)",
        "the-agent": "url(./assets/agent.png)",
      },
    },
  },
  plugins: [],
};
