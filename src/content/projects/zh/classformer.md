---
locale: "zh"
slug: "classformer"
translationKey: "classformer"
title: "ClassFormer"
summary: "面向英文授课场景的课堂辅助系统，结合 PDF 课件结构化解析、顺序页定位检索与双语字幕回看，支持课堂跟进与疑问复盘。"
draft: false
category: "course"
role: "个人主导"
kind: "课程项目"
order: 5
featuredOrder: 1
tags: ["Python", "PyMuPDF", "JavaScript", "检索与定位"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/ClassFormer-website"}]
source: "https://github.com/szm20060312/ClassFormer-website/blob/main/README.md"
---

## 项目概述

我个人主导、在三人团队协作背景下推进的软件工程课程项目。ClassFormer 面向全英文授课场景，探索如何将课堂音频、双语字幕、PDF 课件页码定位与疑问标记保留在同一上下文中，降低听课走神后的定位成本。

## 模块进展与交互原型

项目按前端交互原型与后端课件处理模块分阶段推进：

- **课件解析与页定位模块（课程持续开发）**：基于 Python 与 PyMuPDF 构建 `pdf_parser` 管线，将 PDF 课件解析为保留原生文本块、包围盒坐标、图像区域和缩略图的逐页 JSON；实现原生文字优先（`native-text-first`）的按需 OCR 回退策略以补齐少字图表页，并结合词项匹配、上下文顺序约束开展双通道检索与推荐确认定位实验。
- **课堂交互原型（公开仓库）**：使用预设英文讲课音频驱动双语字幕与课件页切换，支持听课途中一键标记未听懂时刻，并在课后按标记跳回对应音频位置、字幕段落与课件页。

## 我的工作

主导项目整体方案设计、公开交互原型实现，以及课件解析、顺序页跟踪与实验验证模块的研发和文档组织。

## 公开范围与边界

完整课程工程与实验代码在私有仓库中维护；此处链接的公开仓库（`ClassFormer-website`）提供静态课堂交互原型与需求说明。端到端实时语音流接入与学习型语义嵌入仍属于后续集成阶段。
