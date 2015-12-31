module.exports = {
  entry: {
      main: ['./main.js']
  },
  output: {
    filename: 'bundle.js',
    path: '/',
    publicPath: "http://127.0.0.1:8080/"
  },
  module: {
    loaders:[
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};
