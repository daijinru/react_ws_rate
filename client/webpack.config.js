const Webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'default': './src/app.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js' // default.bundle.js
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loader: 'babel-loader',//babel-loader进行转码
            query: {
                presets: ['react', 'es2015']//转码规则
            }
        }, {
            test: /\.css$/,
            loaders: 'style-loader!css-loader?modules'
        }]
    },
    plugins: [
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
            	warnings:false
            }
        })
    ]
}
