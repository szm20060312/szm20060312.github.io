---
locale: "zh"
slug: "calendar-manager"
translationKey: "calendar-manager"
title: "Calendar Manager"
summary: "面向对象程序设计课程中的 C++ 控制台项目，将日历事件管理与算法、数据结构练习结合。"
draft: false
category: "course"
role: "个人主导"
kind: "课程项目 · C++"
order: 6
tags: ["C++", "数据结构", "文件读写"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/Calendar-Manager"}]
source: "https://github.com/szm20060312/Calendar-Manager/blob/main/README.md"
---

## 项目概述

澳门科技大学面向对象程序设计课程中的个人主导项目，采用模块化 C++ 头文件与源文件组织，包含日历事件管理与基础算法两个控制台模块。

## 实现思路

日历模块在自定义命名空间下实现双向链表（`Node` / `List`），事件结构结合枚举（生日、会议、其他）与 `union` 按类型紧凑存储载荷，并配合输入流校验、月历视图排版及文本文件导入导出完成增删查改闭环。算法模块覆盖记忆化 Fibonacci 搜索、六种循环与递归（含尾递归）求和实现，以及 `my_max`、`vector_max` 函数模板和针对自定义结构体的显式特化。

## 学习重点

项目串联自定义复合数据类型、动态内存分配与释放、模板特化、文件 I/O 及控制台交互流程，作为本科低年级编程基础实践记录保留。
