const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

const mode = process.env.NODE_ENV || 'development';
 
module.exports = {
    entry: path.resolve(__dirname, 'index.js' ),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
    }), 
        new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'assets'),
                to: path.resolve(__dirname, 'dist', 'assets'),
            },
        ],
    }),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },
        ],
      },
}
 
