---
category: JavaScript
tags:
- 设计模式
date: 2022-09-02
title: JavaScript设计模式 —— 单例模式
---
#### 简介
* 定义：1.只有一个实例。2.可以全局访问

* 主要解决：一个全局使用的类频繁地创建与销毁。

* 何时使用：当您想控制实例数目，节省系统资源的时候。

* 如何解决：判断系统是否已经有这个单例，如果有则返回，如果没有则创建。

* 优点： 1、在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理首页页面缓存）。 2、避免对资源的多重占用（比如写文件操作）。

* 缺点：没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。

* 使用场景： 1.全局缓存。2.弹窗

#### 单例模式
```js
const singleton = function(name) {
  this.name = name
  this.instance = null
}

singleton.prototype.getName = function() {
  console.log(this.name)
}

singleton.getInstance = function(name) {
  if (!this.instance) { // 关键语句
    this.instance = new singleton(name)
  }
  return this.instance
}

// test
const a = singleton.getInstance('a') // 通过 getInstance 来获取实例
const b = singleton.getInstance('b')
console.log(a === b)
```
#### 应用场景
实现弹框的一种做法是先创建好弹框，然后使之隐藏，这样子的话会浪费部分不必要的 DOM 开销，我们可以在需要弹框的时候再进行创建，同时结合单例模式实现只有一个实例，从而节省部分 DOM 开销。下列为登入框部分代码：
```js
//弹框层的实践
const createLoginLayer = function() {
    const myDiv = document.createElement('div')
    myDiv.innerHTML = '登入浮框'
    // myDiv.style.display = 'none'
    document.body.appendChild(myDiv);
    return myDiv
}

//使单例模式和创建弹框代码解耦
const getSingle = function(fn) {
  let result = null;
  return function() {
      if(!result){
          result = fn.apply(this, arguments);
      }
    return result;
  }
}

const createSingleLoginLayer = getSingle(createLoginLayer)

document.getElementById('loginBtn').onclick = function() {
    createSingleLoginLayer()
}
```
