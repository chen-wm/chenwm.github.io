---
category: Vue
tags:
- 源码学习
date: 2022-08-29
title: Vue 响应式原理
vssue: true
---

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/2/8/1617554b425a3431~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
### `概念`
Vue数据响应式变化主要涉及 Observer, Watcher , Dep 这三个类
```js
/*初始化生命周期*/
initLifecycle(vm)
/*初始化事件*/
initEvents(vm)Object.defineProperty 
/*初始化render*/
initRender(vm)
/*调用beforeCreate钩子函数并且触发beforeCreate钩子事件*/
callHook(vm, 'beforeCreate')
initInjections(vm) // resolve injections before data/props
/*初始化props、methods、data、computed与watch*/
initState(vm)
initProvide(vm) // resolve provide after data/props
/*调用created钩子函数并且触发created钩子事件*/
callHook(vm, 'created')
```
上述中initState()为初始化props,methods,data,computed和watch;
### 一.initData
::: tip 
initData (初始化data),具体代码如下
:::
```ts
/*初始化data*/
function initData (vm: Component) {
  /*得到data数据*/
  let data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {}defi
  ...
  //遍历data中的数据
  while (i--) {
    /*保证data中的key不与props中的key重复，props优先，如果有冲突会产生warning*/
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn(
        `The data property "${keys[i]}" is already declared as a prop. ` +
        `Use prop default value instead.`,
        vm
      )
    } else if (!isReserved(keys[i])) {
      /*判断是否是保留字段*/
      /*这里是我们前面讲过的代理，将data上面的属性代理到了vm实例上*/
      proxy(vm, `_data`, keys[i])
    }
  }
  // observe data
  /*这里通过observe实例化Observe对象，开始对数据进行绑定，asRootData用来根数据，用来计算实例化根数据的个数，下面会进行递归observe进行对深层对象的绑定。则asRootData为非true*/
  observe(data, true /* asRootData */)
}
```
initData作用：
* 将初始化_data放置于vm上
* data中定义的属性递归执行observe,以实现后续监听
### 二.Observer类
Observer类作用：
* 将实例绑定在data的__ob__属性上,防止重复绑定
* 如果绑定对象是数组,实现Vue重写的7种array.prototype上原生方法,再遍历数组执行Observer
* 否则遍历data中其他数据,进行getter/setter操作,核心方法为`defineReative(obj, keys[i], obj[keys[i]])`
:::tip 
#### defineReative
:::
* 包含getter/setter,将为每个data声明Dep实例对象,被用于getter时执行dep.depend()进行收集相关的依赖;
* 根据Dep.target来判断是否收集依赖，还是普通取值。
##### getter：
* 先为每个data声明一个 Dep 实例对象，被用于getter时执行dep.depend()进行收集相关的依赖;
* 根据Dep.target来判断是否收集依赖，还是普通取值。
##### setter：
* 获取新的值并且进行observe，保证数据响应式；
* 通过dep对象通知所有观察者去更新数据，从而达到响应式效果。
  ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/2/8/1617554b5e866e59~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
### 三.Watcher类
Watcher是一个观察者对象。依赖收集以后Watcher对象会被保存在Dep的subs中，数据变动的时候Dep会通知Watcher实例，然后由Watcher实例回调cb进行视图的更新。
### 四.Dep类
被Observer的data在触发 getter 时，Dep 就会收集依赖的 Watcher ，其实 Dep 就像是一个书店，可以接受多个订阅者的订阅，当有新书时即在data变动时，就会通过 Dep 给 Watcher 发通知进行更新。
### 五.总结
1. 在 Vue 中模板编译过程中的指令或者数据绑定都会实例化一个 Watcher 实例，实例化过程中会触发 get() 将自身指向 Dep.target;
2. data在 Observer 时执行 getter 会触发 dep.depend() 进行依赖收集;依赖收集的结果：①、data在 Observer 时闭包的dep实例的subs添加观察它的 Watcher 实例；②. 
Watcher 的deps中添加观察对象Observer时的闭包dep；
3. 当data中被 Observer 的某个对象值变化后，触发subs中观察它的watcher执行 update() 方法，最后实际上是调用watcher的回调函数cb，进而更新视图。
