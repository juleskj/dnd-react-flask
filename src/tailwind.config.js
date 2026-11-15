module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1440px",
        tv: "2560px",
      },
      colors: {
        dark: {
          100: "#171717",
          200: "#272727",
          300: "#515151",
        },
        light: {
          100: "#F2F5F9",
          200: "#D6D6D6",
          300: "#6E6E73",
        },
        accent: {
          100: "#BE1030",
          200: "#650113",
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
