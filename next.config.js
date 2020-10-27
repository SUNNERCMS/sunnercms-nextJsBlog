/*
 * @Author: your name
 * @Date: 2020-10-26 23:35:39
 * @LastEditTime: 2020-10-27 16:19:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/next.config.js
 */

//使用 next-compose-plugins 实现多插件配置 https://www.npmjs.com/package/next-compose-plugins
//const withPlugins = require('next-compose-plugins');

const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const path = require('path');
const loaderUtils = require('loader-utils');
// const webpack = require('webpack');

function getLocalIdent(loaderContext, localIdentName, localName, options) {
  if (!options.context) {
    if (loaderContext.rootContext) {
      options.context = loaderContext.rootContext;
    } else if (loaderContext.options && typeof loaderContext.options.context === 'string') {
      options.context = loaderContext.options.context;
    } else {
      options.context = loaderContext.context;
    }
  }
  const request = path.relative(options.context, loaderContext.resourcePath);
  options.content = `${options.hashPrefix + request}+${localName}`;
  localIdentName = localIdentName.replace(/\[local\]/gi, localName);
  const hash = loaderUtils.interpolateName(loaderContext, localIdentName, options);
  return hash.replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-').replace(/^((-?[0-9])|--)/, '_$1');
}

module.exports = withPlugins([withLess], {
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true
  },

  cssLoaderOptions: {
    camelCase: true,
    localIdentName: '[local]___[hash:base64:5]',
    getLocalIdent: (context, localIdentName, localName, options) => {
      const hz = context.resourcePath.replace(context.rootContext, '');
      if (/node_modules/.test(hz)) {
        return localName;
      }
      return getLocalIdent(
        context,
        localIdentName,
        localName,
        options
      );
    }
  },

  webpack(config) {
    if (config.externals) {
      const includes = [/antd/];
      config.externals = config.externals.map((external) => {
        if (typeof external !== 'function') return external;
        return (ctx, req, cb) => (includes.find((include) => (req.startsWith('.')
          ? include.test(path.resolve(ctx, req))
          : include.test(req)))
          ? cb()
          : external(ctx, req, cb));
      });
    }
    return config;
  }
})