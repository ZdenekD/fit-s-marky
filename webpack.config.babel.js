import path from 'path';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

require('dotenv').config();

const config = require('./config.json');

const isProduction = process.env.NODE_ENV === 'production';
const favicons = {
    logo: './favicon.png',
    ...config.favicons,
};
const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin(favicons);
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
    filename: 'index.html',
    inject: 'body',
    minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
    },
});
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
});
const plugins = [
    MiniCssExtractPluginConfig,
    HtmlWebpackPluginConfig,
    FaviconsWebpackPluginConfig,
];

module.exports = () => ({
    entry: config.entry,
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, config.output.dir),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    plugins,
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devServer: {
        http2: true,
        contentBase: path.resolve(__dirname, config.output.dir),
        historyApiFallback: true,
        noInfo: true,
        port: 3000,
        stats: 'errors-only',
        hot: true,
    },
    devtool: !isProduction ? 'cheap-module-eval-source-map' : '',
    context: __dirname,
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules|bower_components|vendor/,
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory',
                    }, {
                        loader: 'eslint-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules|bower_components|vendor/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !isProduction,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: !isProduction ? '[name]-[local]--[hash:base64:6]' : '[hash:base64:8]',
                                context: path.resolve(__dirname, 'src'),
                            },
                            sourceMap: !isProduction,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline',
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                exclude: /node_modules|bower_components|vendor/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            digest: 'hex',
                            name: '[name].[hash].[ext]',
                        },
                    }, {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 90,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            webp: {
                                quality: 90,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2)/,
                exclude: /node_modules|bower_components|vendor/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            digest: 'hex',
                            name: '[name].[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});
