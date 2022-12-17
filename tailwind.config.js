module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_400: "#b6b6b6",
        black_900_33: "#00000033",
        black_900_b2: "#000000b2",
        black_900: "#000000",
        gray_900: "#171616",
        deep_orange_A700: "#db2512",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
      },
      fontFamily: { poppins: "Poppins", rubik: "Rubik" },
      boxShadow: { bs: "0px 0px  15px 0px #0000003f" },
      letterSpacing: {
        ls1: "1px",
        ls2: "2px",
        ls3: "3px",
        ls6: "6px",
        ls45: "4.5px",
        ls225: "2.25px",
        ls345: "3.45px",
        ls4140000000000001: "4.140000000000001px",
        ls17999999999999998: "1.7999999999999998px",
        ls26999999999999997: "2.6999999999999997px",
        ls46000000000000005: "4.6000000000000005px",
      },
      borderRadius: { radius50: "50%" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
