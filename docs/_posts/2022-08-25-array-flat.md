---
category: JavaScipt
date: 2022-08-25
title: 数组扁平化flat方法实现
lang: zh-CN
vssue: true
aside: true
header-title: true
---

![](https://img-blog.csdnimg.cn/20210326010003607.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdpbmVfdGlvbg==,size_16,color_FFFFFF,t_70#pic_center)

#### Array.prototype.flat() 特性总结
```js
const animals = ["🐷", ["🐶", "🐂"], ["🐎", ["🐑", ["🐲"]], "🐛"]];

// 不传参数时，默认“拉平”一层
animals.flat();
// ["🐷", "🐶", "🐂", "🐎", ["🐑", ["🐲"]], "🐛"]

// 传入一个整数参数，整数即“拉平”的层数
animals.flat(2);
// ["🐷", "🐶", "🐂", "🐎", "🐑", ["🐲"], "🐛"]

// Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
animals.flat(Infinity);
// ["🐷", "🐶", "🐂", "🐎", "🐑", "🐲", "🐛"]

// 传入 <=0 的整数将返回原数组，不“拉平”
animals.flat(0);
animals.flat(-10);
// ["🐷", ["🐶", "🐂"], ["🐎", ["🐑", ["🐲"]], "🐛"]];

// 如果原数组有空位，flat()方法会跳过空位。
["🐷", "🐶", "🐂", "🐎",,].flat();
// ["🐷", "🐶", "🐂", "🐎"]

```
### 概念
* `Array.prototype.flat()` 用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
* 不传参数时，默认“拉平”一层，可以传入一个整数，表示想要“拉平”的层数。
* 传入 <=0 的整数将返回原数组，不“拉平”。
* Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组。
* 如果原数组有空位，Array.prototype.flat() 会跳过空位。

#### 思路
* 第一个要解决的就是遍历数组的每一个元素；
* 第二个要解决的就是判断元素是否是数组；
* 第三个要解决的就是将数组的元素展开一层；
````js
// 遍历数组的方法
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
// for 循环
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// for...of
for (let value of arr) {
  console.log(value);
}
// for...in
for (let i in arr) {
  console.log(arr[i]);
}
// forEach 循环
arr.forEach(value => {
  console.log(value);
});
// entries（）
for (let [index, value] of arr.entries()) {
  console.log(value);
}
// keys()
for (let index of arr.keys()) {
  console.log(arr[index]);
}
// values()
for (let value of arr.values()) {
  console.log(value);
}
// reduce()
arr.reduce((pre, cur) => {
  console.log(cur);
}, []);
// map()
arr.map(value => console.log(value));
````
#### 判断元素是数组的方案
* instanceof
* constructor
* Object.prototype.toString
* isArray
```js
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
arr instanceof Array
// true
arr.constructor === Array
// true
Object.prototype.toString.call(arr) === '[object Array]'
// true
Array.isArray(arr)
// true
```
### flat 拍平实现
```js
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
// concat + 递归
function flat(arr) {
  let arrResult = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      arrResult = arrResult.concat(arguments.callee(item));   // 递归
      // 或者用扩展运算符
      // arrResult.push(...arguments.callee(item));
    } else {
      arrResult.push(item);
    }
  });
  return arrResult;
}
flat(arr)
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
```
### reduce 实现 flat
```js
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]

// 首先使用 reduce 展开一层
arr.reduce((pre, cur) => pre.concat(cur), []);
// [1, 2, 3, 4, 1, 2, 3, [1, 2, 3, [1, 2, 3]], 5, "string", { name: "弹铁蛋同学" }];

// 用 reduce 展开一层 + 递归
const flat = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
};
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
```
### 栈实现 flat
```js
// 栈思想
function flat(arr) {
  const result = []; 
  const stack = [].concat(arr);  // 将数组元素拷贝至栈，直接赋值会改变原数组
  //如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop(); 
    if (Array.isArray(val)) {
      stack.push(...val); //如果是数组再次入栈，并且展开了一层
    } else {
      result.unshift(val); //如果不是数组就将其取出来放入结果数组中
    }
  }
  return result;
}
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
flat(arr)
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
```
