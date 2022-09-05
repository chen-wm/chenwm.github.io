---
category: JavaScript
tags:
  - JavaScript
date: 2022-07-28
title: JavaScript基础 —— 函数防抖与函数节流
lang: zh-CN
vssue: true
vssue-id: 4
---
### 函数防抖
`定义:指触发事件后，函数在 n 秒后只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数的执行时间。`
```
应用场景:
1. 搜索框搜索输入。只需用户最后一次输入完，再发送请求；
2. 用户名、手机号、邮箱输入验证；
```
```javascript
export function debouce(fn, delay){
	let timer = null
	return function() {
		clearTimeout(timer)
		let arg = argument
		timer = setTimeout(()=>{
			//指定this,否则指向fn()环境
			fn.apply(this, arg)
		}, delay)
	}
}
```
<br/>

***
### 函数节流
`定义:限制一个函数在一段时间内只能执行一次，过了这段时间，在下一段时间又可以执行一次。`
```
应用场景:
1.输入框模糊查询间隔,可每两秒联想一次;
2.表单验证；
3.按钮提交；
```
### 首节流
***
```javascript
export function throttle(fn, delay = 1000){
	let prev = null
	return function(){
		let args = arguments
		let date = Date.now()
		if(date - prex >= delay){
			fn.apply(this, args)
			prev = now
		}
	}
}
```
 ##### 触发事件时立即执行，以后每过delay秒之后才执行一次，并且最后一次触发事件若不满足要求不会被执行
<br/>

### 尾节流
***

```javascript
export function throttle(fn, delay){
	let timer = null
	return function(){
		let args = arguments
		if(!timer){
			timer = setTimeout(()=>{
				fn.apply(this, args)
				timer = null
			}, delay)
		}
	}
}
```
> ##### 第一次触发时不会执行，在delay秒之后才执行，当最后一次停止触发后，还会再执行一次函数。
<br/>

### 定时节流
***

```javascript
export function throttle(fn, delay) {
  let timer = null;
  let prev = null;
  return function () {
    let now = Date.now();
    let remaining = delay - (now - prev);
    const args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(this, args);
      prev = Date.now();
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay);
    }
  }
}

```
##### 第一次马上执行，最后一次也会执行
