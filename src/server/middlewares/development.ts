import { Application, Request, Response } from 'express';
import appRootPath from 'app-root-path';
import proxy from 'http-proxy-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const webpack = require('webpack');

const webpackConfig = require('../../../scripts/webpack.dev.config.js');

const compiler = webpack(webpackConfig);
const localApiDomain = 'https://sms.qa.91dev.tw';

const devMiddleware = (app: Application) => {
    app.use('/Api', proxy({ target: `${localApiDomain}`, changeOrigin: true }));
    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true,
            },
        })
    );
    app.use(webpackHotMiddleware(compiler));

    // all other requests be handled by UI itself
    app.get('*', async (req: Request, res: Response) => {
        res.sendFile(appRootPath.resolve('public/index.html'));
    });
};

export default devMiddleware;
