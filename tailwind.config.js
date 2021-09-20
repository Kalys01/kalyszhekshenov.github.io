module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or false or 'media'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      maxHeight: ['focus'],
      textColor: ['visited'],
      backgroundColor: ['active'],
      borderColor: ['focus', 'hover'],
      padding: ['hover'],

    },
  },
  plugins: [],
}
