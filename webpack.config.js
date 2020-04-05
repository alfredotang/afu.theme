/* eslint-disable node/no-missing-require */
const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./scripts/webpack.dev.config');
} else {
    module.exports = require('./scripts/webpack.prod.config');
}
