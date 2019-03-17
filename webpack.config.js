const path = require('path')

module.exports = {
    entry: {
        js: ['babel-polyfill', './src/app.js']
      },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
}