module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or false or 'media'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
}
