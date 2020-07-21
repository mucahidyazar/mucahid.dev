---
title: "Markdown / react-markdown"
date: "2020-07-20"
layout: post
link: "https://medium.com"
draft: false
platforms:
  - blog
  - devto
tags:
  - javascript
  - react
---

# Markdown

Markdownlarla ilgili kaynaklari asagida bulabilirsiniz.
https://www.markdownguide.org/basic-syntax/
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## react-markdown

npm i react-markdown

Kullanimi oldukca basit ilk import ediyoruz ve markdownlu yazi kaynagimizi source olarak asagidaki gibi ReactMarkdown icine props olarak gonderiyoruz.
Istersek kullanilacak Markdownlari allowedTypes icine array olarak string lerle gonderebiliriz asagidaki gibi.

```js
import React, { useState, useEffect } from "react";
…
import ReactMarkdown from "react-markdown";

export default function ViewSinglePost() {

  return (
    <Page title={post.title}>
      …
      <div className="body-content">
        <ReactMarkdown
          source={post.body}
          allowedTypes={[
            "paragraph",
            "strong",
            "emphasis",
            "text",
            "heading",
            "list",
            "listItem",
          ]}
        />
      </div>
    </Page>
  )}
```
