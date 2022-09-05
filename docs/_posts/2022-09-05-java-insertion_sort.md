---
category: Java
date: 2022-09-05
title: Java排序算法 —— 插入排序
tags:
- 算法
lang: zh-CN
vssue: true
---
#### Java数组排序——插入排序（Insertion Sort）实现
::: tip
实现思路：第一轮将数组第二个元素与前一个元素对比，如果小于则置换位置；第二轮数组第三个元素与前一个对比，小于则置换，再与前一个对比，小于则置换；依次进行n-1轮对比
:::
```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {5,3,2,6,4};
        for (int i = 1; i < numbers.length; i++) { //控制循环轮数
            int temp = numbers[i]; //定义待交换元素
            int j; //定义待插入的位置
            for (j = i; j > 0 && temp < numbers[j - 1]; j --) {
                numbers[j] = numbers[j - 1];
            }
            numbers[j] = temp;
            System.out.println("第" + i + "轮的排序结果为：" + Arrays.toString(numbers));
        }
        System.out.println("排序后的结果为：" + Arrays.toString(numbers));
        /*
        第1轮的排序结果为：[3, 5, 2, 6, 4]
        第2轮的排序结果为：[2, 3, 5, 6, 4]
        第3轮的排序结果为：[2, 3, 5, 6, 4]
        第4轮的排序结果为：[2, 3, 4, 5, 6]
        排序后的结果为：[2, 3, 4, 5, 6]
        */
    }
}


```
