---
category: Vue
date: 2022-10-013
title: Vue3踩坑日记
top: true
tags:
- Vue3踩坑日记
---
::: danger
技术栈Vue3+ts+pinia,记录一下开发过程中遇到的坑。
:::
### 一、Vue
1. 引用类型指针不同
```ts
// antd表格配置项
export const columns: BasicColumn[] = [
  {
    title: t('teacher.resumeCollection.Name'),
    dataIndex: ['student', 'name'],
  },
];
```
```ts
// vben模板内容
<BasicTable>
  <template #bodyCell="{ column, text, record }">
      <template v-if="column.key === ['student', 'name']">
      <span>{{ record.gender === 0 ? '女' : '男' }}</span>
    </template>
  </template>
</BasicTable>
```
antd表格使用string[]写法,一直获取不到template内容,最后发现原来是2个引用地址不同的问题 :sleepy:
```ts
// 正确代码
<template v-if="column.dataIndex && (column.dataIndex[1] === 'gender')">
  <span>{{ record.gender === 0 ? '女' : '男' }}</span>
</template>
```
