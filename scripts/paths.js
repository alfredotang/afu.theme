const appRootPath = require('app-root-path');

module.exports = {
    clientEntry: appRootPath.resolve('src/client/index.tsx'),
    serverEntry: appRootPath.resolve('src/server/index.ts'),
    sourceDir: appRootPath.resolve('src'),
    distDir: appRootPath.resolve('dist'),
    distStaticDir: appRootPath.resolve('dist/public'),
    devDir: appRootPath.resolve('public'),
    thirdPartyDir: appRootPath.resolve('node_modules'),
    baseDir: appRootPath.resolve('.'),
    templateDir: appRootPath.resolve('src/client/index.html'),
    devTemplateDir: appRootPath.resolve('public/index.html'),
    prodTemplateDir: appRootPath.resolve('dist/public/index.html'),
};
