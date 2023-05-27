/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/newest-bg.jpg')",
      },
      colors: {
        primary: "#161616",
        secondary: "#015DFC",
      },
      fontFamily: {
        HemenixBold: ["Hemenix-bold", "sans-serif"],
        HemenixRegular: ["Hemenix-regular", "sans-serif"],
        HemenixExtrabols: ["Hemenix-extrabold", "sans-serif"],
        HemenixMedium: ["Hemenix-medium", "sans-serif"],
        HemenixSemibold: ["Hemenix-semibold", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        mds: "600px",
        md: "768px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
