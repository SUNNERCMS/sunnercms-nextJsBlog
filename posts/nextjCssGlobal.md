---
title: '自定义组件引入样式'
date: '2020-01-02'
---

问题描述：自定义组件，在组件中引入同等目录下的样式文件
报错提示：
Global CSS cannot be imported from files other than your Custom <App>. Please move all global CSS imports to pages/_app.js. Or convert the import to Component-Level CSS (CSS Modules).
Read more: https://err.sh/next.js/css-global

问题：样式文件名定义错误
`index.module.scss`定义成为了 `index.moudles.css`


