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
          skyBlue: "#e6f1f6",
          tagBlue: "#446ba2",
          numberTagBlue: "#79afd4",
          selectedBlue: "#147eaf",
          percentageBlue: "#189696",
          linkBlue: "#0061c7",
          yellow: "#fff4cd",
          deepYellow: "#d4b878",
          red: "#f03434",
          halaGray: "#a6c3da",
          numberGreen: "#189696",
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
        2.75: "11px",
        3.25: "13px",
        3.5: "14px",
        3.75: "15px",
        4.5: "18px",
        5.5: "22px",
        7.5: "30px",
        11.5: "46px",
        12.5: "50px",
        17.5: "70px",
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
        0.5: "2px",
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
