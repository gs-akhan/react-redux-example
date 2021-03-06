var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './public/javascripts/components/main.jsx',
    output: { path: __dirname, filename: './public/dist/bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test : /.css$/,
                loader : 'style!css!'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};