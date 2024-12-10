{
  import("tailwindcss").Config;
}
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        full: "100%",
      },
    },
  },
  plugins: [],
};
