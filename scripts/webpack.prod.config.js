const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 複製靜態檔
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const baseWebpackConfig = require('./webpack.base.config');
const paths = require('./paths');

const cleintWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: paths.distStaticDir,
        publicPath: '/', // run 站台時的根目錄
        filename: 'js/[name].min.js',
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     {
        //         from: path.join(__dirname, '../src', 'client', 'assets'),
        //         to: path.join(__dirname, '..', 'dist', 'public', 'assets'),
        //         ignore: ['.*'],
        //     },
        // ]),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].min.css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: paths.templateDir,
            filename: 'index.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true, // 去除引號
                collapseWhitespace: true, // 去除空格
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: { safe: true },
        }),
    ],
});

const serverWebpackConfig = {
    mode: 'production',
    target: 'node',
    entry: [paths.serverEntry],
    output: {
        path: paths.distDir,
        publicPath: '/', // run 站台時的根目錄
        libraryTarget: 'commonjs',
        filename: 'server/bundle.min.js',
    },
    resolve: { ...baseWebpackConfig.resolve },
    module: { ...baseWebpackConfig.module },

    externals: [nodeExternals()],

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
        ],
    },
};

module.exports = [cleintWebpackConfig, serverWebpackConfig];
