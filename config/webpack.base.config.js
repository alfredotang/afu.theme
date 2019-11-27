const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // CSS 文件單獨提取出來
const autoprefixer = require('autoprefixer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const paths = require('./paths');

const DEV = (process.env.NODE_ENV || 'development').trim() === 'development';

module.exports = {
    entry: ['@babel/polyfill', paths.clientEntry],
    context: paths.baseDir,
    resolve: {
        // 優化 module 查詢路徑
        modules: [
            paths.sourceDir,
            paths.thirdPartyDir, // 指定node_modules所在位置 當你import 第三方套件時 會直接從這個路徑去搜尋
        ],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json',
                baseUrl: '.',
            }),
        ],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'], // 指定搜索這些文件
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)?$/,
                include: paths.sourceDir,
                exclude: /node_modules/, // 用來限制打包範圍 優化打包速度
                loader: 'babel-loader',
            },
            {
                test: /\.(scss|css|sass)?$/,
                use: [
                    DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer({
                                    Browserslist: [
                                        'Chrome >= 52',
                                        'FireFox >= 44',
                                        'Safari >= 7',
                                        'Explorer >= 10',
                                        'last 2 Edge versions',
                                    ],
                                }),
                            ],
                        },
                    },
                ],
                include: paths.sourceDir,
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000, // 10KB 以下使用 base64,
                            // name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
};
