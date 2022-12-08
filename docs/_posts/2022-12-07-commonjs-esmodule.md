---
category: JavaScript
date: 2022-12-07
title: CommonJS与EsModule

---
:::tip
### Javascript模块规范有两种：CommonJS,EsModule
:::
---
#### 1. 区别
* `语法:`  
  CommonJS模块使用require()引入模块，使用module.exports导出模块  
  EsModule模块使用import引入模块，使用export导出模块
```js
// CommonJs -------
// 引入模块
var path = require("path")
// 导出模块
const path = ()=>{}
module.exports = path

// EsModule ----------
// 引入模块
import path from "path"
import { doSomeThing } from "path"
// 导出模块
export const doSomeThing = ()=>{}
export default path
```
 ---

* `用法:`  
require()同步加载模块，js是单线程，会阻塞加载  
import是异步加载模块

node.js使用的是CommonJS模块规范。  
浏览器使用的是EsModule模块异步加载，因为如果使用CommonJS同步加载资源时会有卡顿现象。
#### 2. node.js环境
node.js环境中，.js后缀的文件默认使用的是CommonJS模块，如果想要使用ES6模块需要采用.mjs后缀的文件名。
如果想要不修改文件后缀名，但是又使用ES6模块，可以编辑项目的根目录package.json文件
```js
{
    "type":"module"
}
```
修改`package.json`文件后，`.js`脚本文件就会使用ES6模块解析  
如果修改`package.json`的同时想要使用CommonJS模块，需要将相应脚本文件后缀改成`.cjs`
#### 3. 两种模式互相加载
直接使用CommonJs的require加载EsModule模块会报错  
因为CommonJS是同步加载，可以使用async与await实现同步
```js
// 使用匿名函数闭包
(async()=>{
    await import('./test.mjs')
})()
```
---
#### EsModule加载CommonJs模块
EsModule可以使用import命令加载CommonJS，
但是因为CommonJs导出是使用module.export导出整个模块对象，不能直接输出单一项
如果想要输出单一项，可以使用对象的解构赋值
test.cjs文件
```js
const method1 = ()=>{}
const method2 = ()=>{}
module.exports = {
    method1,
    method2
}
```
```js
import Test from "./test.cjs"
//对象解构赋值
const { method1,method2 } from Test

// 会报错
import { method1,method2 } from './test.cjs'
```
#### 3. 同时兼容加载两种格式
`原始模块是CommonJS`
```js
import Test from "./test.cjs"
export const method1 = Test.method1
export const method2 = Test.method2
export default Test
```
`原始模块是EsModule`
提供一个统一输出接口export default  
CommonJS使用import()引入
