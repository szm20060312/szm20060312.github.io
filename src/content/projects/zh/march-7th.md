---
locale: "zh"
slug: "march-7th"
translationKey: "march-7th"
title: "三月七桌面陪伴应用"
summary: "基于 Tauri 2 的跨平台动画桌宠，支持系统鼠标注视、方向移动，以及透明、可拖动的桌面窗口。"
draft: false
category: "personal"
role: "个人主导"
kind: "桌面应用"
order: 1
tags: ["Tauri 2", "TypeScript", "Rust", "Desktop interaction"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/march-7th-desktop-pet"}]
source: "https://github.com/szm20060312/march-7th-desktop-pet/blob/main/README.md"
featuredOrder: 1
---

## 项目概述

我个人主导的桌面陪伴应用，面向 macOS 与 Windows。角色在透明、无边框窗口中呈现，并根据真实系统鼠标位置和窗口移动产生交互。

## 实现思路

项目结合 TypeScript 前端、Rust 与 Tauri 2。交互状态协调待机动画、16 个注视方向，以及拖动时的左右跑动动画，移动结束后恢复鼠标注视。

## 我的工作

主导项目开发，包括角色交互行为、平台适配，以及实现与验证文档的组织。

## 当前范围

仓库记录的功能包括待机、鼠标注视和拖动。多角色、情境短句与提醒是后续计划。仓库中有 macOS Apple Silicon 和 Windows x64 的平台验证记录，具体范围与证据以对应文档为准。
