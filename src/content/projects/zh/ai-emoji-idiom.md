---
locale: "zh"
slug: "ai-emoji-idiom"
translationKey: "ai-emoji-idiom"
title: "AI 表情猜成语"
summary: "通过模型生成 Emoji 谜题，玩家猜出对应的四字成语，结合提示、倒计时与连击计分形成完整的交互体验。"
draft: false
category: "personal"
role: "个人主导"
kind: "AI 应用 · 游戏"
order: 4
tags: ["JavaScript", "Node.js", "Express", "大模型 API"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/ai-emoji-idiom-game"}]
source: "https://github.com/szm20060312/ai-emoji-idiom-game/blob/main/README.md"
---

## 项目概述

我个人主导的网页猜谜游戏。后端实时调用大语言模型生成由 Emoji 组成的谜面，玩家在限时内推断对应的常用四字成语。

## 架构与实现

项目采用原生 JavaScript 前端配合 Node.js 与 Express 服务端代理，在统一出题接口下封装了 DeepSeek、OpenAI 与 Anthropic 三条模型调用路径。提示词构建模块每次随机抽取种子成语引导多样性，约束模型输出 4–6 个表意 Emoji、常用四字成语谜底及严格 JSON 结构，并将当前会话已出题目写入硬性排除列表，配合 JSON 提取校验与重试逻辑降低重复出题率。

浏览器交互层实现每题 40 秒倒计时、三级渐进文字提示（依次揭示首字、末字、前两字）、连击加分，以及基于 `localStorage` 按玩家保留最高分的本地排行榜。

## 我的工作

主导项目需求与交互设计，采用 AI 辅助编程完成提示词约束、多模型 API 适配、防重复出题逻辑及前端游戏循环开发。

## 当前范围

本项目属于调用托管大语言模型 API 的应用实践，不涉及自行训练模型。生成新谜题需在本地或服务端配置对应的模型密钥，运行说明见源码仓库。
