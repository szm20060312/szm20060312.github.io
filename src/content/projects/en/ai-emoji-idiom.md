---
locale: "en"
slug: "ai-emoji-idiom"
translationKey: "ai-emoji-idiom"
title: "AI Emoji Idiom Game"
summary: "An interactive guessing game that turns model-generated emoji puzzles into four-character Chinese idioms, with hints, timing, and scoring."
draft: false
category: "personal"
role: "Personally led"
kind: "AI application · Game"
order: 3
tags: ["JavaScript", "Node.js", "Express", "LLM APIs"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/ai-emoji-idiom-game"}]
source: "https://github.com/szm20060312/ai-emoji-idiom-game/blob/main/README.md"
featuredOrder: 3
---

## Overview

A personally led web game in which players infer Chinese idioms from emoji combinations. A language-model backend generates puzzles, while the browser provides hints, timing, and score feedback.

## Implementation

A JavaScript frontend is paired with a Node.js and Express backend. Prompt construction describes the puzzle format, constrains the answer, and includes previous answers to discourage repetition. The backend contains integrations for DeepSeek, OpenAI, and Anthropic providers.

## My contribution

I led the project and used AI-assisted development to explore the complete path from a game idea to prompts, API integration, and browser interaction.

## Scope

This is an application of hosted language models, rather than a model-training project. Generating new puzzles requires a configured backend and provider. The source repository describes how to run the game locally.
