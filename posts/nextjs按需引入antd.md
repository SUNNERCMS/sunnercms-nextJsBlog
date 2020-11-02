---
title: 'next.js按需引入antd'
date: '2020-10-27'
---

### babel:
     babel是一种js语法编译器，在前端开发过程中，由于浏览器的版本和兼容性问题，很多js的新方法和特性的使用都受到了限制。使用babel可以将代码中js代码编译成兼容绝大多数主流浏览器的代码。
简而言之，就是把不兼容的 JavaScript 代码转为可兼容，可以执行的 JavaScript 代码。

#### 功能：
　　语法转换 
　　添加一些兼容性的 polyfill 功能
　　源码转换等

(1) presets ：是某一类 plugin 的集合，包含了某一类插件的所有功能。
(2) plugin ： 将某一种需要转化的代码，转为浏览器可以执行代码。
https://www.cnblogs.com/jiebba/p/9613248.html


#### 编译的执行顺序：

　　　　1、执行 plugins 中所有的插件

　　　　2、plugins 的插件，按照顺序依赖编译

　　　　3、所有 plugins 的插件执行完成，在执行 presets 预设。

　　　　4、presets 预设，按照倒序的顺序执行。(从最后一个执行)

　　　　5、完成编译。


#### 主要插件介绍

1、 `babel-preset-es2015` ( ES2015/ES6插件集合 )   
将 ES2015(es6) 的 javascript 代码 转化 浏览器兼容 javascript 代码
eg：
arrow-functions：箭头函数
block-scoped-functions：函数命名的方式转话，改为赋值的形式
block-scoping：let转为var

2、`babel-preset-react` ( react 集合 )

react 的相关编译转化...,jsx 和 element 的一下转化,直接添加 react 的预设就可以了。@babel/preset-react

3、`babel-plugin-import`是一款babel插件,在编译过程中将import的写法自动转换成按需引入的方式.


### antd按需引入

1、安装antd `npm install --save antd`
2、安装`babel-plugin-import`
3、配置文件
- .babelrc文件中，引入需要需要通过babel转换的插件
```js
{
  "presets": [
    "next/babel", "@babel/preset-react" 
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        // true 的时候才会编译less
        "style": true
      }
    ]
  ]
}
```
"next/babel" Next.js的配置文件，相当于继承了它本身的所有配置
只加载项目中用到的模块，这就需要我们用到一个babel-plugin-import文件，配置好了 .babelrc 就不会把Ant Design打包到生产环境。

4、antd使用
组件中`import { message } from 'antd';`
编译之后报错：【 inline javascript is not enabled 】
- next.config.js配置
```js
  lessLoaderOptions: {
    javascriptEnabled: true
  },
```
再次编译报错：【 @import ./themes/index 】
- next.config.js配置
```js
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
```
再次编译不报错，但样式没有引进来，打开控制台可以看到，已经将antd的样式类名和文件中的类名（带有hash值）区分开来。
问题：打包出来的产物，next/static/css/styles.chunk.css中的antd样式名确带有hash值。
- next.config.js配置
```js
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
```
```js
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
```
[完整的next.config.js配置](https://github.com/SUNNERCMS/sunnercms-nextJsBlog)
[报错截图展示](https://sunzhaoxiang.blog.csdn.net/article/details/109319412)
