module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
  ],
};
