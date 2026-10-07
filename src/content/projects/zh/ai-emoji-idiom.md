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
order: 3
tags: ["JavaScript", "Node.js", "Express", "LLM APIs"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/ai-emoji-idiom-game"}]
source: "https://github.com/szm20060312/ai-emoji-idiom-game/blob/main/README.md"
featuredOrder: 3
---

## 项目概述

我个人主导的网页猜谜游戏。玩家根据 Emoji 组合推断四字成语，后端调用语言模型生成谜题，浏览器提供提示、倒计时与分数反馈。

## 实现思路

JavaScript 前端配合 Node.js 与 Express 后端。提示词约束谜题格式和答案，并加入已有答案以减少重复。后端实现了 DeepSeek、OpenAI 和 Anthropic 的调用路径。

## 我的工作

主导项目并使用 AI 辅助开发，从游戏需求、提示词设计到模型 API 集成和浏览器交互，探索 AI 与游戏的实际结合。

## 当前范围

这是调用已有语言模型的应用实践。生成新谜题需要配置后端和模型服务，不属于自行训练模型的项目。源码仓库提供本地运行说明。
