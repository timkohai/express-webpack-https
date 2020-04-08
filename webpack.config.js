const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        // filename: '[name].[chunkhash].js',
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },
    devtool: 'inline-source-map',
    devServer: {
        // host: '0.0.0.0',
        host: 'main.demoapp.com',
        contentBase: path.join(__dirname, 'build'),
        open: true,
        port: 3002,
        hot: true,
        overlay: true,
        https: {
            key: fs.readFileSync(path.resolve('certificates/keys/server.key')),
            cert: fs.readFileSync(path.resolve('certificates/keys/server.crt')),
            ca: fs.readFileSync(path.resolve('certificates/keys/rootCA.pem'))
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader"
            }
        }, {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: './src/templates/index.html'})
            
    ]

};