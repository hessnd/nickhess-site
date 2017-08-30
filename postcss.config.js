module.exports = {
  plugins: [
    require('postcss-easy-import')({
      prefix: '_'
    }),
    require('autoprefixer')({
      browsers: ['last 3 versions']
    }),
  ]
}
