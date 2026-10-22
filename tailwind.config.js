module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7936A3",
          light: "#B877DA",
          soft: "#E2C5F2",
          deep: "#52236F",
        },
      },
    },
  },
  plugins: [],
}