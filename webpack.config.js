var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/');
// var DIST_DIR = path.join(__dirname, '/client/dist');
const nodeExternals = require('webpack-node-externals');

var clientConfig = {
  entry: path.join(__dirname, 'client', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client', 'dist')
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : path.join(__dirname, 'client'),
        exclude: /node_modules/,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }

    ]
  }
};

var serverConfig = {
  entry: path.join(__dirname, 'server', 'server-side-rendering.jsx'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.bundle.js',
    path: path.join(__dirname, 'server')
  },
  module : {
    rules : [
      {
        test : /\.js(x)$/,
        include : [path.join(__dirname, 'client'), path.join(__dirname, 'server')],
        exclude: /node_modules/,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}

module.exports = [clientConfig, serverConfig]
