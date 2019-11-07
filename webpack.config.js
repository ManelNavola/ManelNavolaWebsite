module.exports = {
  module: {
    rules: [
      {
        test: /.js/,
        use: [
          {
            loader: `expose-loader`,
            options: {...options}
          }
        ]
      }
    ]
  }
}