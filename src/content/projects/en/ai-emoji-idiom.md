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
order: 4
tags: ["JavaScript", "Node.js", "Express", "LLM APIs"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/ai-emoji-idiom-game"}]
source: "https://github.com/szm20060312/ai-emoji-idiom-game/blob/main/README.md"
---

## Overview

A personally led browser guessing game in which a language-model backend generates emoji combinations on demand and players infer the corresponding four-character Chinese idioms under time pressure.

## Architecture and implementation

A vanilla JavaScript frontend communicates with a Node.js and Express proxy server that unifies DeepSeek, OpenAI, and Anthropic chat-completion endpoints behind a single puzzle-generation route. Each request builds a structured prompt that samples randomized seed idioms for variety, constrains answers to familiar four-character idioms depicted by 4–6 emojis in strict JSON format, and injects previously solved idioms into an explicit exclusion list alongside JSON extraction checks and retry handling to curb repetition.

On the client side, the game loop manages a 40-second per-round countdown, three-stage progressive character hints (revealing the first, last, and first two characters), combo score multipliers, and a `localStorage` high-score leaderboard deduplicated by player name.

## My contribution

I led the game design and used AI-assisted development to build the prompt constraints, multi-provider API adapters, anti-repetition logic, and browser interaction loop.

## Scope

This project is an application of hosted language-model APIs rather than a model-training project. Generating live puzzles requires a configured backend and provider API key; local setup steps are documented in the repository.
