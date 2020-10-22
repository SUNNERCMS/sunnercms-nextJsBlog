---
title: '阿里icon库的引入使用'
date: '2020-01-02'
---

[阿里icon库地址](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2151385)

引入方法：
- 在我的项目myblog中，下载至本地
- 解压之后在`demo_index.html`文件中选择图标引入方式，blog中使用了font class的引入方法，即将`iconfont.css`文件，放到public中进行维护，同时在layout中引入,注意这个这里的href路径，使用的是根路径格式，相等路径不好使。
```html
<link rel="stylesheet" href="/aliIcon/iconfont.css"></link>
```
- 在需要使用icon图标的地方，通过如下方式，引入相对应的图标即可
```html
<i className="iconfont icon-icon-email"></i>
```