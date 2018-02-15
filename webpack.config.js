const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            cache: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new WebpackNotifierPlugin({ title: 'Webpack' })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.sc?ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {}
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        fallback: 'file-loader'
                    }
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        stats: {
            cachedAssets: true,
            children: false,
            hash: false,
            modules: false,
            warnings: true
        }
    }
}
