---
locale: "en"
slug: "floatmonitor"
translationKey: "floatmonitor"
title: "FloatMonitor"
summary: "A native macOS monitoring utility with compact menu-bar information and detailed views of CPU, memory, GPU, and network activity."
draft: false
category: "personal"
role: "Personally led"
kind: "Native macOS application"
order: 3
tags: ["Swift 6", "SwiftUI", "AppKit", "Swift Charts"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/FloatMonitor"}]
source: "https://github.com/szm20060312/FloatMonitor/blob/main/README.md"
featuredOrder: 4
---

## Overview

A personally led native macOS utility for monitoring real-time system activity, pairing a compact menu-bar status item with an expandable popover and a pinnable desktop dashboard window.

## Architecture and implementation

The interface combines AppKit (`NSStatusBar` and `NSPopover`) with SwiftUI views and Swift Charts (`LineMark` and `AreaMark`) for live network history. In compact two-line mode, the menu-bar item pre-computes fixed `100%` placeholder widths so fluctuating readings never cause neighboring menu-bar icons to shift.

Telemetry services query macOS system interfaces directly without spawning shell subprocesses: Mach `host_processor_info` (`PROCESSOR_CPU_LOAD_INFO`) for aggregate and per-core CPU load, `host_statistics64` and `sysctl` for memory usage and pressure, `getifaddrs` interface counters for delta upload and download rates, IOKit `IOAccelerator` performance statistics for Apple Silicon GPU utilization, and AppleSMC struct calls with multi-sensor averaging and sanity filtering for CPU temperature. Preferences support 0.5s–5s refresh intervals, unit toggling, `SMAppService` launch-at-login, and custom `.app` and `.dmg` packaging via Swift Package Manager.

## My contribution

I led the application architecture and implementation, including low-level macOS telemetry integration, native menu-bar and multi-window UI behavior, settings persistence, and packaging scripts.

## Platform scope

FloatMonitor targets macOS; supported OS versions and hardware-specific sensor availability across Apple Silicon and Intel Macs are documented in the source repository.
