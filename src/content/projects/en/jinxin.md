---
locale: "en"
slug: "jinxin"
translationKey: "jinxin"
title: "Jin · Xin — Strategy Game"
summary: "A browser-based strategy game about running a historical merchant bank, balancing silver reserves, reputation, and relationships."
draft: false
category: "personal"
role: "Personally led"
kind: "Web game"
order: 2
tags: ["React", "TypeScript", "Vite", "State modelling"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/jinxin"}]
source: "https://github.com/szm20060312/jinxin/blob/main/README.md"
featuredOrder: 3
---

## Overview

Jin · Xin is a personally led text-based strategy game inspired by Qing-dynasty Shanxi merchant banking. Across multi-year cycles, the player balances head-office and branch silver reserves, public reputation, cipher anti-counterfeiting, and staff management under shifting market and political events.

## Architecture and implementation

Built with React, TypeScript, and Vite, the project decouples pure rule calculations (`engine/` modules for economic simulation, reputation updates, event resolution, and year-end accounting) from UI components, coordinating state transitions via `useReducer` and `Context` across 28 typed action kinds. Each year flows through morning briefings, quarterly silver/rate/staff decisions, settlement simulation, branching event narratives, a four-step annual audit and dividend review, and six distinct endings, linking branch networks, apprentice progression, loyalty-crisis risks, and reserve-depletion safeguards.

For persistence and full-stack support, per-account `localStorage` saves enforce schema versioning and hash-signature integrity checks; background music is synthesized procedurally in the browser using pentatonic Web Audio oscillators without external audio files; and cloud authentication runs on EdgeOne Edge Functions backed by KV storage (`PBKDF2-SHA256` salted password hashing and session tokens).

## My contribution

I led the game-system modelling, pure functional rule engine, React state architecture, scroll-inspired interface, save-integrity verification, and edge authentication endpoints.

## Scope and resources

This project focuses on strategy-game engineering and deterministic rule modelling. Full system documentation, module structure, and local build instructions are available in the source repository.
