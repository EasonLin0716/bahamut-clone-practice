module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bahamut: {
          green: "#04624f",
          gold: "#f39c12",
          blue: "#3e81c6",
          blueGreen: "#117e96",
          yellow: "#fff4cd",
          deepYellow: "#d4b878",
        },
        gray: {
          250: "#cccccc",
          350: "#5e5e5e",
        },
      },
      spacing: {
        0.75: "3px",
        1.25: "5px",
        2.25: "9px",
        2.5: "10px",
        3.25: "15px",
        4.5: "18px",
        5.5: "22px",
        22.5: "90px",
        25: "100px",
        37.5: "150px",
      },
      borderRadius: {
        DEFAULT: "4px",
        5: "5px",
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
      lineHeight: {
        27: "27px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
