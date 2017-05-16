const express = require('express');
const winston = require('winston');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);
const indexHTML = require('./views/index.html');

module.exports = {
  getApp: (app) => {
    if (process.env.NODE_ENV !== 'test') {
      app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
      }));
    }

    app.use(express.static('public'));

    app.get('/', (req, res) => {
      res.send(indexHTML({ greeting: 'World' }));
    });

    return app;
  },
  start: (port, app) => {
    app.listen(port, () => {
      winston.info(`Server started on port: ${port}`);
    });
  },
};