---
title: 'next.js按需引入antd'
date: '2020-10-27'
---

babel:
     babel是一种js语法编译器，在前端开发过程中，由于浏览器的版本和兼容性问题，很多js的新方法和特性的使用都受到了限制。使用babel可以将代码中js代码编译成兼容绝大多数主流浏览器的代码。
简而言之，就是把不兼容的 JavaScript 代码转为可兼容，可以执行的 JavaScript 代码。

　　功能：
　　　　语法转换 
　　　　添加一些兼容性的 polyfill 功能
　　　　源码转换等

　presets ：是某一类 plugin 的集合，包含了某一类插件的所有功能。

　plugin ： 将某一种需要转化的代码，转为浏览器可以执行代码。

https://www.cnblogs.com/jiebba/p/9613248.html


　　编译的执行顺序：

 

　　　　1、执行 plugins 中所有的插件

　　　　2、plugins 的插件，按照顺序依赖编译

　　　　3、所有 plugins 的插件执行完成，在执行 presets 预设。

　　　　4、presets 预设，按照倒序的顺序执行。(从最后一个执行)

　　　　5、完成编译。


　　1、主要插件介绍

　　　　babel-preset-es2015 ( ES2015 / ES6 插件集合 )
　　　　将 ES2015(es6) 的 javascript 代码 转化 浏览器兼容 javascript 代码
eg： 　arrow-functions　　：箭头函数

　　　　block-scoped-functions　　：函数命名的方式转话，改为赋值的形式

　　　　block-scoping　　：let  转为 var

2、　babel-preset-react ( react 集合 )

　　　　react 的相关编译转化...

　　　　jsx 和 element 的一下转化

　　　　直接添加 react 的预设就可以了。　　@babel/preset-react

1、babel-plugin-import是一款babel插件,在编译过程中将import的写法自动转换成按需引入的方式.
