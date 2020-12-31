---
title: '响应式布局'
date: '2020-10-29'
---
`npm install --save-dev @testing-library/react-native`
React Native测试库（RNTL）是用于测试React Native组件的轻量级解决方案。

demo:
```js
import React from "react";
import {render} from "@testing-library/react";
import Button from "./button";

test('our first react test case', ()=>{
  const wrapper = render(<Button>Hello</Button>)
  const el = wrapper.queryByText('Hello')
  expect(el).toBeTruthy()
})
````
这段代码意思很明确，渲染一个Button组件，然后找一下存不存在el，这里通过找寻文本节点“Hello”。
运行：yarn test

```js
Watch Usage: Press w to show more.
 PASS  src/components/Button/button.test.tsx
  √ our first react test case (43ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.703s
Ran all test suites related to changed files.

```

https://callstack.github.io/react-native-testing-library/docs/api/#render

https://www.cnblogs.com/SamWeb/p/11454923.html