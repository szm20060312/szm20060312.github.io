---
locale: "en"
slug: "calendar-manager"
translationKey: "calendar-manager"
title: "Calendar Manager"
summary: "A C++ object-oriented programming course project combining calendar-event management with algorithm and data-structure practice."
draft: false
category: "course"
role: "Personally led"
kind: "Course project · C++"
order: 6
tags: ["C++", "Data structures", "File I/O"]
links: [{"kind": "code", "url": "https://github.com/szm20060312/Calendar-Manager"}]
source: "https://github.com/szm20060312/Calendar-Manager/blob/main/README.md"
---

## Overview

A personally led Object-Oriented Programming course project at Macau University of Science and Technology, organized into modular C++ header and source files across a calendar manager and an algorithm practice suite.

## Implementation

The calendar module implements a custom doubly linked list (`Node` / `List`) inside a dedicated namespace. Event records pair an `enum` discriminant (birthday, meeting, or general note) with a `union` payload and `std::string` details, supported by validated console input helpers, monthly calendar rendering, and plain-text file import/export. The companion algorithm module covers memoized Fibonacci search, six iterative and recursive summation variants (including tail recursion), and generic `my_max` and `vector_max` function templates with explicit struct specialization.

## Learning focus

The project connects composite data representation, manual memory lifecycle management, template specialization, file I/O, and console interaction as an early undergraduate C++ engineering exercise.
