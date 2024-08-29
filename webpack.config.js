const path = require('path');

module.exports = {
  entry: './src/app.ts', // Đảm bảo bạn đang sử dụng file TypeScript chính
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // Sử dụng ts-loader để xử lý file TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
};
