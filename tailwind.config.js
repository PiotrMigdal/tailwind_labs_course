module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#d050d2",
          DEFAULT: "#d10ad4", //This must be DEFAULT so you can use just bg-brand
          dark: "#b400b7",
        },
      },
      fontFamily: {
        headline: "Tangerine, serif" //font-headline
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
