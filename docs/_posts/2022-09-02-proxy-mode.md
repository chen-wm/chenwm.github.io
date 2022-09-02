---
category: JavaScript
tags:
- 设计模式
date: 2022-09-02
title: 代理模式
---
#### 简介
* 定义：根据不同参数可以命中不同的策略

* 主要解决：在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护。

* 何时使用：有许多种情况，而区分它们的只是他们直接的行为。

* 如何解决：通过一个hash对象，来映射不同的策略。

* 优点：1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性、复用性良好

* 缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。

* 使用场景： 1.需要动态地根据行为改变运行方法。2.为了减少代码，同时为了让代码具有更好的可读性。3.需要对策略进行统一管理。

#### 代理模式
虚拟代理实现图片预加载,通过代理模式将创建图片与预加载逻辑分离，不需要预加载，只要改成请求本体代替请求代理对象
```js
const myImage = (function() {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function(src) {
      imgNode.src = src
    }
  }
})()

const proxyImage = (function() {
  const img = new Image()
  img.onload = function() { // http 图片加载完毕后才会执行
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function(src) {
      myImage.setSrc('loading.jpg') // 本地 loading 图片
      img.src = src
    }
  }
})()

proxyImage.setSrc('http://loaded.jpg')
```
#### 应用场景
缓存代理实现乘积计算
```js
const mult = function() {
  let a = 1
  for (let i = 0, l; l = arguments[i++];) {
    a = a * l
  }
  return a
}

const proxyMult = (function() {
  const cache = {}
  return function() {
    const tag = Array.prototype.join.call(arguments, ',')
    if (cache[tag]) {
      return cache[tag]
    }
    cache[tag] = mult.apply(this, arguments)
    return cache[tag]
  }
})()

proxyMult(1, 2, 3, 4) // 24
```
