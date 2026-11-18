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
tags: ["Tauri 2", "TypeScript", "Rust", "桌面交互"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/march-7th-desktop-pet"}]
source: "https://github.com/szm20060312/march-7th-desktop-pet/blob/main/README.md"
featuredOrder: 2
---

## 项目概述

我个人主导的跨平台桌面陪伴应用，面向 macOS 与 Windows。角色呈现在透明、无边框且置顶的桌面窗口中，围绕真实系统光标位置与窗口拖动产生连续的交互反馈。

## 架构与实现

前端 TypeScript 与 Rust（Tauri 2）按职责分层：纯领域层（`PetModel` 与图集帧几何换算）与平台采样、DOM 渲染和时钟调度通过窄接口隔离，并在 CI 中通过 TypeScript AST 依赖检查（`check-architecture`）约束模块边界，避免动画时序与宿主 API 耦合。

macOS 与 Windows 的光标及窗口逻辑坐标换算封装在 Rust 平台层，采用上一次 IPC 完成后再间隔 33 ms 的串行轮询，防止调用堆积。动画状态机基于单调时钟（`performance.now()`）维护“移动 > 注视 > 待机”优先级：窗口拖动时切换左右跑动动画并屏蔽注视帧，停止移动 160 ms 后再恢复 16 方向鼠标注视以消除眼神抖动；视图层仅在目标帧变化时更新 DOM。

## 我的工作

主导项目架构重构与跨平台实现，设计动画状态机、系统坐标采样协议与结构守护脚本，并整理架构说明、单元测试与平台实机验证记录。

## 当前范围

当前稳定版本（`v0.2.0`）包含六帧待机、16 方向鼠标注视与拖动跑动交互，已完成 macOS Apple Silicon 及 Windows 10/11 x64（100% / 150% / 200% DPI）实机基线验证。多角色切换、情境短句，以及由 Rust 承载状态与持久化的日常提醒模块属于后续演进计划。
