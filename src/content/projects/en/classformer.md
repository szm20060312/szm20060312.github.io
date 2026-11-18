---
locale: "en"
slug: "classformer"
translationKey: "classformer"
title: "ClassFormer"
summary: "A lecture-assistance project for English-taught courses, combining structured PDF slide parsing, sequential page tracking, and synchronized bilingual review."
draft: false
category: "course"
role: "Personally led"
kind: "Course project"
order: 5
featuredOrder: 1
tags: ["Python", "PyMuPDF", "JavaScript", "Slide retrieval"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/ClassFormer-website"}]
source: "https://github.com/szm20060312/ClassFormer-website/blob/main/README.md"
---

## Overview

A personally led Software Engineering course project developed in a three-person team context. ClassFormer targets English-taught university lectures, exploring how lecture audio, bilingual subtitles, PDF slide tracking, and student review bookmarks can stay anchored in a single context.

## Module progress and prototype

Development is organized across a backend slide-processing pipeline and a public classroom interaction prototype:

- **Slide parsing and page-tracking pipeline (ongoing course development)**: built a Python and PyMuPDF (`pdf_parser`) module that converts lecture PDFs into structured per-page JSON preserving native text blocks, bounding coordinates, image regions, and page thumbnails. It applies a `native-text-first` selective OCR fallback only on text-sparse diagram pages, and supports sequential context-aware page tracking alongside offline experiments on dual-channel retrieval and recommendation confirmation.
- **Classroom interaction prototype (public repository)**: uses a prepared English lecture audio sample to drive synchronized bilingual subtitles and slide transitions, allowing listeners to bookmark unclear moments during class and jump back to the exact audio timestamp, transcript segment, and slide afterward.

## My contribution

I led the overall system design, the public web prototype, and the implementation and evaluation documentation for the PDF parsing and sequential slide-tracking modules.

## Public scope and boundary

Full course engineering and experimental code are maintained in a private repository; the linked public repository (`ClassFormer-website`) hosts the static interactive classroom prototype and project specification. End-to-end live speech streaming and learned semantic embeddings remain planned integration steps.
