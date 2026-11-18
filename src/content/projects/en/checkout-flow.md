---
locale: "en"
slug: "checkout-flow"
translationKey: "checkout-flow"
title: "Checkout Flow"
summary: "A static form and automated-testing exercise organizing grouped checkout fields and verifying HTTP submission parameters."
draft: false
category: "learning"
role: "Personally led"
kind: "Frontend practice"
order: 7
tags: ["HTML", "CSS", "JavaScript", "Testing"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/checkout-flow"}]
source: "https://github.com/szm20060312/checkout-flow/blob/main/README.md"
---

## Overview

A personally led frontend and automated-testing exercise structured around semantic form grouping, browser input controls, and parameter verification.

## Practice

The static page organizes 15 form controls across four `<fieldset>` sections (shipping, billing, card details, and contact preferences) with `GET` query-string submission and reset actions. It is paired with a zero-dependency Node.js verification script (`checkout-test.js`) that starts an ephemeral local HTTP server to assert status codes, DOM field completeness, card-type options, static assets, and URL-encoded submission parameters. It is presented strictly as a frontend and testing exercise rather than a live payment system.
