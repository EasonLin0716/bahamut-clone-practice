module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    lineHeight: {
      27: "27px",
    },
    extend: {
      colors: {
        bahamut: {
          green: "#04624f",
          gold: "#f39c12",
          blue: "#3e81c6",
          blueGreen: "#117e96",
        },
        gray: {
          250: "#cccccc",
          350: "#5e5e5e",
        },
      },
      spacing: {
        1.25: "5px",
        2.5: "10px",
        22.5: "90px",
        37.5: "150px",
      },
      borderRadius: {
        DEFAULT: "4px",
      },
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
      fontSize: {
        tiny: "13px",
        base: "15px",
      },
      letterSpacing: {
        default: "2px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
