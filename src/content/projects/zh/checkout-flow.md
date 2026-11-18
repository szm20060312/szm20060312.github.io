---
locale: "zh"
slug: "checkout-flow"
translationKey: "checkout-flow"
title: "Checkout Flow"
summary: "静态表单与自动化检查练习，围绕分组字段组织浏览器表单交互并验证提交参数。"
draft: false
category: "learning"
role: "个人主导"
kind: "前端练习"
order: 7
tags: ["HTML", "CSS", "JavaScript", "自动化测试"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/checkout-flow"}]
source: "https://github.com/szm20060312/checkout-flow/blob/main/README.md"
---

## 项目概述

我个人主导的前端基础与测试脚本练习，围绕语义化表单结构、字段分组与提交行为构建静态结账页面。

## 实践内容

页面使用四个 `<fieldset>` 分组组织收货地址、账单地址、卡种信息与联系方式共 15 个输入控件及提交、重置操作。仓库配套编写了零第三方依赖的 Node.js 自动化检查脚本（`checkout-test.js`），启动临时本地 HTTP 服务后依次校验响应状态、DOM 字段完整性、下拉选项、静态资源可达性与 `GET` 提交参数编码。本项目属于前端与自动化测试练习，不涉及真实支付处理。
