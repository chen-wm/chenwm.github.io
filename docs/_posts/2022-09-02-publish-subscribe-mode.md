---
category: JavaScript
tags:
- 设计模式
date: 2022-09-02
title: 发布订阅模式
---
#### 简介
* 定义：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。

* 主要解决：一个对象状态改变给其他对象通知的问题，而且要考虑到易用和低耦合，保证高度的协作。

* 何时使用：一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。

* 如何解决：使用面向对象技术，可以将这种依赖关系弱化。

* 关键代码：对于某一个topci用数组存放订阅者.

* 应用实例： 1、拍卖的时候，拍卖师观察最高标价，然后通知给其他竞价者竞价。 2、西游记里面悟空请求菩萨降服红孩儿，菩萨洒了一地水招来一个老乌龟，这个乌龟就是观察者，他观察菩萨洒水这个动作。

* 优点： 1、观察者和被观察者是抽象耦合的。 2、建立一套触发机制。

* 缺点： 1、如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。 2、如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。 3、观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。

#### 使用场景：

1. 一个抽象模型有两个方面，其中一个方面依赖于另一个方面。将这些方面封装在独立的对象中使它们可以各自独立地改变和复用。
2. 一个对象的改变将导致其他一个或多个对象也发生改变，而不知道具体有多少对象将发生改变，可以降低对象之间的耦合度。
3. 一个对象必须通知其他对象，而并不知道这些对象是谁。
4. 需要在系统中创建一个触发链，A对象的行为将影响B对象，B对象的行为将影响C对象……，可以使用观察者模式创建一种链式触发机制。

::: tip
注意事项：  1、避免循环引用。 2、如果顺序执行，某一观察者错误会导致系统卡壳，一般采用异步方式。
:::

#### 代码实现
```js
/*
 *发布-订阅模式（观察者模式）
 */
function pubsub() {
  var _pubsub = {},//全局对象，即发布订阅对象
    _topics = {}, // 回调函数存放的数组
    _subUid = 0;

  // 发布方法
  _pubsub.publish = function (topic) {
    if (!_topics[topic]) {
      return false;
    }
    var args = [].slice.call(arguments, 1);
    setTimeout(function () {
      var subscribers = _topics[topic];
      for (var i = 0, j = subscribers.length; i < j; i++) {
        subscribers[i].callback.apply(null, args);
      }
    }, 0);
    return true;
  };
  //订阅方法
  _pubsub.subscribe = function (topic, callback) {
    if (!_topics[topic]) {
      _topics[topic] = [];
    }
    var token = (++_subUid).toString();
    _topics[topic].push({
      token: token,
      callback: callback
    });
    return token;
  };
  //退订方法
  _pubsub.unsubscribe = function (token) {
    for (var m in _topics) {
      if (_topics[m]) {
        for (var i = 0, j = _topics[m].length; i < j; i++) {
          if (_topics[m][i].token === token) {
            _topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return false;
  };

  return {
    subscribe: _pubsub.subscribe,
    publish: _pubsub.publish,
    unsubscribe: _pubsub.unsubscribe
  }
}
```
