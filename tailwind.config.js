module.exports = {
  mode: 'jit',
  purge: { content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ], },
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
