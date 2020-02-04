const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 複製靜態檔
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.config');
const paths = require('./paths');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [`webpack-hot-middleware/client?http://localhost:${process.env.HTTP_PORT}&reload=true`],
    output: {
        hotUpdateMainFilename: 'js/hot-update.[hash:6].json',
        hotUpdateChunkFilename: 'js/hot-update.[hash:6].js',
        filename: 'js/[name].bundle.js',
        path: paths.devDir,
        publicPath: '/', // run 站台時的根目錄
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../src', 'client', 'assets'),
                to: path.join(__dirname, '..', 'public', 'assets'),
                ignore: ['.*'],
            },
        ]),
        new HtmlWebpackPlugin({
            template: paths.templateDir,
            filename: 'index.html',
            hash: true,
        }),
        new webpack.HotModuleReplacementPlugin(), // HMR
        new webpack.NamedModulesPlugin(), // 顯示HMR 替換模組的名稱
    ],
});

module.exports = devWebpackConfig;
