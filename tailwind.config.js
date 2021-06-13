module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "6.9xl": "1250px",
      },
      gridTemplateColumns: {
        main: "180px 750px 300px",
      },
      gap: {
        2.5: "10px",
      },
      margin: {
        2.5: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
