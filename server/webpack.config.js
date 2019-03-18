const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isProduction = env === "production"

    return {
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
                test: /\.s?css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    "css-loader",
                    "sass-loader"
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "styles.css",
                chunkFilename: "styles-chunk.css"
              })
        ],
        devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public")
        }
    }
}