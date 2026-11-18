---
locale: "zh"
slug: "jinxin"
translationKey: "jinxin"
title: "晋·信 — 文字策略游戏"
summary: "以晋商票号经营为背景的 Web 策略游戏，在季度决策中平衡白银、信誉与人脉，并推进分号经营和年度结算。"
draft: false
category: "personal"
role: "个人主导"
kind: "Web 游戏"
order: 2
tags: ["React", "TypeScript", "Vite", "状态建模"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/jinxin"}]
source: "https://github.com/szm20060312/jinxin/blob/main/README.md"
featuredOrder: 3
---

## 项目概述

《晋·信》是我个人主导的文字策略游戏，以清代晋商票号经营为背景。玩家在多年度经营周期中统筹总号与分号库银、信誉、密押防伪与伙友任用，应对商路与人事变局。

## 架构与实现

前端基于 React、TypeScript 与 Vite 构建，将核心规则计算（`engine/` 目录下的经济结算、信誉演化、事件判定与年终合账纯函数）与界面组件解耦，通过 `useReducer` 与 `Context` 组织 28 类状态动作。单局流程串联晨间简报、季度决策、后台结算、多分支事件剧情、四步年终合账（对账、分红留利、来年规划、人事评定）与 6 种差异化结局，并建立分号网络、学徒培养、忠诚危机与库银枯竭预警等联动规则。

持久化与工程配套方面，本地支持按账号隔离的 `localStorage` 存档、版本校验与哈希签名防篡改检查；背景配乐通过 Web Audio API 按五声音阶程序化合成，不依赖外部音频资源；服务端结合 EdgeOne Edge Functions 与 KV 存储实现用户注册登录（`PBKDF2-SHA256` 随机盐哈希与会话令牌）。

## 我的工作

主导游戏机制建模、纯函数规则引擎、React 状态流转、宣纸卷轴风格界面，以及本地存档校验与边缘函数鉴权接口的设计和实现。

## 范围与资料

本项目聚焦策略游戏工程与规则驱动的状态系统建模。源码仓库完整记录了系统设计、模块划分与本地构建运行方式。
