---
category: Java
date: 2022-09-15
title: Lombok 常用注解
---
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzNTA1MDkzLTEyMDcwNjAyNy5wbmc?x-oss-process=image/format,png)
::: tip
### 一、`@Getter/@Setter`:自动产生类 getter/setter
:::
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzNjA4Njc0LTg4MTAwODA3MC5wbmc?x-oss-process=image/format,png)
::: tip
### 二、`@ToString`:重写 toString() 方法，包含所有变量
::: 
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzNjIyNDIwLTM5NjQxMjE1LnBuZw?x-oss-process=image/format,png)
::: tip
### 三、`@EqualsAndHashCode`:自动生成 equals(Object other) 和 hashcode() 方法，包括所有非静态变量和非 transient 的变量
::: 
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzNjMyODAxLTE1Nzk0ODk2MjgucG5n?x-oss-process=image/format,png)
如果某些变量不想要加进判断，可以透过 exclude 排除，也可以使用 of 指定某些字段
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzNjQ0Njk3LTQyMjE0MDUxNS5wbmc?x-oss-process=image/format,png)
::: tip
### 四、`@NoArgsConstructor, @AllArgsConstructor, @RequiredArgsConstructor`:自动生成该类的构造器
:::
@NoArgsConstructor : 生成一个没有参数的构造器
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzNzA1MjcxLTIzOTEzMzk0Ni5wbmc?x-oss-process=image/format,png)
@AllArgsConstructor : 生成一个包含所有参数的构造器
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzNzEzNDY2LTE1MTU1Mzk4NzAucG5n?x-oss-process=image/format,png)
::: danger
没有指定构造器时，Java 编译器会自动生成一个没有任何参数的构造器给该类，但是如果写了构造器之后，Java 就不会自动补上那个无参数的构造器了,在加上 @AllArgsConstructor 时,要补上 
@NoArgsConstrcutor
:::
@RequiredArgsConstructor : 生成一个包含 "特定参数" 的构造器，特定参数指的是那些有加上 final 修饰词的变量们
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzODAyMTg0LTMwMTMxMzAxNC5wbmc?x-oss-process=image/format,png)
::: tip
### 五、`@Data` 等价于添加以下注解
* `@Getter/@Setter`
* `@ToString`
* `@EqualsAndHashCode`
* `@RequiredArgsConstructor`
:::
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzODIxODAzLTE4MDE5MDg5MjkucG5n?x-oss-process=image/format,png)
::: tip
### 六、`@Value`:等价于添加以下注解，会把所有的变量都设成 final 
* `@Getter`
* `@ToString`
* `@EqualsAndHashCode`
* `@RequiredArgsConstructor`
:::
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzODQ4NzcyLTE5Njc1NTYxMy5wbmc?x-oss-process=image/format,png)
::: tip
### 七、`@Builder`:自动生成流式 set 值写法
:::
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTIzOTA3NzU5LTU1NDE4MTMwMi5wbmc?x-oss-process=image/format,png)
::: tip
### 八、`@Slf4j`:自动生成该类的 log 静态常量，要打日志就可以直接打，不用再手动 new log 静态常量了
:::
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2ktYmV0YS8xMDAzODU2LzIwMjAwMy8xMDAzODU2LTIwMjAwMzA5MTI0MDI5ODkxLTExMTIyMTE1MDkucG5n?x-oss-process=image/format,png)
