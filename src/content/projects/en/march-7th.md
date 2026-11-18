---
locale: "en"
slug: "march-7th"
translationKey: "march-7th"
title: "March 7th Desktop Companion"
summary: "A cross-platform animated desktop companion with mouse tracking, directional movement, and a transparent, draggable window."
draft: false
category: "personal"
role: "Personally led"
kind: "Desktop application"
order: 1
tags: ["Tauri 2", "TypeScript", "Rust", "Desktop interaction"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/march-7th-desktop-pet"}]
source: "https://github.com/szm20060312/march-7th-desktop-pet/blob/main/README.md"
featuredOrder: 2
---

## Overview

A personally led cross-platform desktop companion for macOS and Windows. The character runs inside a transparent, frameless, always-on-top window and responds continuously to real system cursor positions and window dragging.

## Architecture and implementation

The codebase separates pure domain logic (`PetModel` and sprite-atlas coordinate math) from runtime scheduling, Tauri IPC calls, and DOM updates behind narrow interfaces. A TypeScript AST boundary checker (`check-architecture`) runs in CI to prevent host globals or circular dependencies from leaking into the domain layer.

OS-specific cursor and logical window coordinate conversion is isolated in the Rust platform layer and polled sequentially with a 33 ms delay after each IPC round-trip so calls never pile up. Driven by an injected monotonic clock (`performance.now()`), the state machine enforces `moving > gaze > idle` priority: dragging triggers directional running animations while suppressing cursor-gaze updates, and holds a 160 ms post-movement cooldown before resuming 16-direction gaze tracking to prevent eye jitter. The DOM view updates sprite coordinates only when the active frame index changes.

## My contribution

I led the architectural refactoring and cross-platform implementation, designing the animation state machine, cursor-sampling IPC contract, AST boundary checks, unit tests, and platform validation records.

## Current scope

The current stable release (`v0.2.0`) covers six-frame idle playback, 16-direction cursor gaze, and drag running animations, validated on macOS Apple Silicon and Windows 10/11 x64 across 100%, 150%, and 200% DPI scaling. Multi-character switching, contextual lines, and a Rust-owned reminder and persistence engine are documented as planned modules.
