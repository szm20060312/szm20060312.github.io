---
locale: "zh"
slug: "floatmonitor"
translationKey: "floatmonitor"
title: "FloatMonitor"
summary: "原生 macOS 系统监控工具，以紧凑菜单栏、弹出面板与桌面窗口展示 CPU、内存、GPU 和网络信息。"
draft: false
category: "personal"
role: "个人主导"
kind: "原生 macOS 应用"
order: 3
tags: ["Swift 6", "SwiftUI", "AppKit", "Swift Charts"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/FloatMonitor"}]
source: "https://github.com/szm20060312/FloatMonitor/blob/main/README.md"
featuredOrder: 4
---

## 项目概述

我个人主导的原生 macOS 系统状态监控工具，结合常驻菜单栏紧凑读数、点击弹出面板与独立可置顶桌面窗口，实时呈现核心硬件指标与趋势曲线。

## 架构与实现

界面层结合 AppKit（`NSStatusBar`、`NSPopover`）与 SwiftUI，并使用 Swift Charts（`LineMark` 与 `AreaMark`）绘制网络吞吐历史；菜单栏紧凑双行视图预先计算 `100%` 等宽占位，避免数值跳变引起状态栏图标抖动。

数据采集层直接调用 macOS 系统接口而非外部命令行工具：通过 Mach `host_processor_info` 计算总体及单核 CPU 负载，结合 `host_statistics64` 与 `sysctl` 读取内存占用及压力状态，遍历 `getifaddrs` 接口计数差值换算上下行实时速率，使用 IOKit `IOAccelerator` 获取 Apple Silicon GPU 利用率，并通过 AppleSMC 结构化调用配合多传感器均值与合理性过滤读取 CPU 温度。支持 0.5s–5s 刷新率切换、`SMAppService` 开机自启及自定义 `.app` / `.dmg` 构建打包。

## 我的工作

主导应用架构与开发，完成系统底层指标接入、菜单栏与多窗口原生交互、偏好设置持久化及 Swift Package Manager 打包脚本。

## 平台范围

本项目面向 macOS 开发，具体系统版本要求及不同芯片架构下的传感器可用性以仓库说明为准。
