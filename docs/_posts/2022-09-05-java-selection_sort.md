---
category: Java
date: 2022-09-05
title: Java排序算法 —— 选择排序
tags:
- 算法
lang: zh-CN
vssue: true
---
#### Java数组排序——选择排序（Selection Sort）实现
::: tip
实现思路：遍历数组取最小值放在arr[0]，再在剩余中取最小放arr[1]，依次排序
:::
```java
public class Main {
    public static void main(String[] args) {
        int[] arr = new int[] { 5, 3, 6, 2, 10, 2, 1 };
        selectSort(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }

    }
    public static void selectSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i; // 用来记录最小值的索引位置，默认值为i
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j; // 遍历 i+1~length 的值，找到其中最小值的位置
                }
            }
            // 交换当前索引 i 和最小值索引 minIndex 两处的值
            if (i != minIndex) {
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
            // 执行完一次循环，当前索引 i 处的值为最小值，直到循环结束即可完成排序
        }
    }
}
```
