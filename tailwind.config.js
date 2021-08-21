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
          selectedBlue: "#147eaf",
          linkBlue: "#0061c7",
          yellow: "#fff4cd",
          deepYellow: "#d4b878",
          red: "#f03434",
        },
        gray: {
          250: "#cccccc",
          350: "#5e5e5e",
          450: "#999",
          550: "#f6f6f6",
          650: "#aaaaaa",
          750: "#d6d6d6",
        },
      },
      spacing: {
        0.75: "3px",
        1.25: "5px",
        1.75: "7px",
        2.25: "9px",
        2.5: "10px",
        3.25: "15px",
        4.5: "18px",
        5.5: "22px",
        7.5: "30px",
        12.5: "50px",
        22.5: "90px",
        25: "100px",
        37.5: "150px",
        45: "180px",
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
        18: "18px",
        21: "21px",
        27: "27px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
