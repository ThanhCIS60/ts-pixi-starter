/**
 * Created by thanhpv on 6/19/17.
 */
var path = require('path'),
    webpack = require('webpack'),
    plugins = [],
    HtmlWebpackPlugin = require('html-webpack-plugin');

plugins.push(new HtmlWebpackPlugin());

module.exports = {

    entry: {
        main: path.resolve("src/Main.ts")
    },
    devtool: "#source-map",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /.ts$/, loader: 'awesome-typescript-loader'}
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
};
