---
category: Vue
date: 2022-10-013
title: Vue3踩坑日记
top: true
tags:
  - Vue3踩坑日记
---

::: danger
技术栈 Vue3+ts+pinia,记录一下开发过程中遇到的坑。
:::

1. 引用类型指针不同

```ts
// antd表格配置项
export const columns: BasicColumn[] = [
  {
    title: t("teacher.resumeCollection.Name"),
    dataIndex: ["student", "name"],
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

antd 表格使用 string[]写法,一直获取不到 template 内容,最后发现原来是 2 个引用地址不同的问题 :sleepy:

```ts
// 正确代码
<template v-if="column.dataIndex && (column.dataIndex[1] === 'gender')">
  <span>{{ record.gender === 0 ? '女' : '男' }}</span>
</template>
```

2. 使用`mpvue-calendar`日历组件时，点击时间是根据正选反选判断，业务需求需要通过日历上高亮时间点击进入新页面，onSelect 事件需重置高亮，具体代码实现如下：

```ts
   <template>
     <Calendar
     :disabled="disabledDate"
     :language="language"
     :lunar="lunar"
     :select-date="publishDates"
     background-text
     class-name="select-mode"
     select-mode="multi"
     @on-month-change="onMonthChange"
     @on-select="onSelect"
     />
 </template>
 <script lang="ts" setup>
        // 有发布的日期
        const publishDates = ref<string[]>([]);
        // 设置当前月份的高亮
        const setPublishDate = (): string[] => {
         const publishDates: string[] = [];
         jobFairList.value.map((item) => {
         publishDates.push(dayjs(item.publishTime).format('YYYY-M-D'));
         });
         return uniq(publishDates);
        };
        const onSelect = async (val) => {
         const publishDate: string[] = setPublishDate();
         // publishDate为高亮时间
         publishDates.value = publishDate;
         console.log('publishDates', unref(publishDates));
         // 当前点击的时间
         let currentDate = difference(publishDate, uniq(val)).toString();
         await router.push({
           path: PageEnum.ANNOUNCTDETAILS_LIST_PAGE,
           query: {
             type: ConstData.JobFair,
             startTime: dayjs(`${currentDate} 00:00:00`).valueOf(),
             endTime: dayjs(`${currentDate} 23:59:59`).valueOf(),
           },
         });
         console.log(currentDate);
        };
 </script>

```
