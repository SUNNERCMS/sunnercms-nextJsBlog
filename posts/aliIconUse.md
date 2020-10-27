---
title: '阿里icon库的引入使用'
date: '2020-01-02'
---

[阿里icon库地址](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2151385)

引入方法：
1、font class引入
- 在我的项目myblog中，下载至本地
- 解压之后在`demo_index.html`文件中选择图标引入方式，blog中使用了font class的引入方法，即将`iconfont.css`文件，放到public中进行维护，同时在layout中引入,注意这个这里的href路径，使用的是根路径格式，相等路径不好使。
```html
<link rel="stylesheet" href="/aliIcon/iconfont.css"></link>
```
- 在需要使用icon图标的地方，通过如下方式，引入相对应的图标即可
```html
<i className="iconfont icon-icon-email"></i>
```
2、symbol引入

(1) 支持多色图标了，不再受单色限制。
(2) 通过一些技巧，支持像字体那样，通过 font-size, color 来调整样式。
(3) 兼容性较差，支持 IE9+，及现代浏览器。
(4) 浏览器渲染 SVG 的性能一般，还不如 png。

使用步骤如下：
- 引入项目下面生成的 symbol 代码,文件路径是图标库在项目中的位置
```html
<script src="/aliIcon/iconfont.js"></script>
```
- 加入通用 CSS 代码（引入一次就行），加在了全局样式文件中`globals.less`
```css
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
```
- 挑选相应图标并获取类名，应用于页面, 这里使用xlinkHref，官网的xlink:href不好使
```js
  <svg class="icon" aria-hidden="true">
    <use xlinkHref="#icon-daohangcaidan"></use>
  </svg>
```

