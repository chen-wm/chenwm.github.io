---
category: JavaScript
tags:
- 设计模式
date: 2022-09-02
title: 策略模式
---
#### 简介
* 定义：根据不同参数可以命中不同的策略

* 主要解决：在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护。

* 何时使用：有许多种情况，而区分它们的只是他们直接的行为。

* 如何解决：通过一个hash对象，来映射不同的策略。

* 优点：1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性、复用性良好

* 缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。

* 使用场景： 1.需要动态地根据行为改变运行方法。2.为了减少代码，同时为了让代码具有更好的可读性。3.需要对策略进行统一管理。

#### 策略模式
根据不同参数获得不同策略方法(规则)
```js
const strategy = {
  'S': function(salary) {
    return salary * 4
  },
  'A': function(salary) {
    return salary * 3
  },
  'B': function(salary) {
    return salary * 2
  }
}

const calculateBonus = function(level, salary) {
  return strategy[level](salary)
}

calculateBonus('A', 10000) // 30000
```
#### 应用场景
常常隐藏在高阶函数中
```js
const S = function(salary) {
  return salary * 4
}

const A = function(salary) {
  return salary * 3
}

const B = function(salary) {
  return salary * 2
}

const calculateBonus = function(func, salary) {
  return func(salary)
}

calculateBonus(A, 10000) // 30000
```
