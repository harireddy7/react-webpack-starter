const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // Entry to our react app (src/index.js)
    entry: path.join(__dirname, 'src', 'index.js'),
    // Where to put all the static bundles & those filenames
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'static/js/[name].[contenthash:8].js'
    },
    // specify local dev port 
    devServer: {
        port: 3000
    },
    // Specify rules to load webpack loaders
    module: {
        rules: [
            // babel loader to load ES6+ features & react features
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true // cache babel transforms in the local directory
                    }
                }
            },
            // css loader to resolve css imports
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            // file-loader to resolve image file imports
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/assets/[name].[contenthash:8].[ext]'
                    }
                }
            }
        ]
    },
    // specify plugins to add additional customization
    plugins: [
        // html-webpack-plugin generates a new HTML file from the specified template (public/index.html)
        // that html contains the static bundle js & css scripts
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        // mini-css-extract-plugin extract the css files to a new css bundle at build time
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css'
        })
    ]
}