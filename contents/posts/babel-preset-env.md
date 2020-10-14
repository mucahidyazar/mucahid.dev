---
title: "How to use import in a express rest api / @babel/preset-env"
date: "2020-10-14"
layout: post
link: ""
draft: false
platforms:
  - blog
tags:
  - javascript
  - nodejs
  - express
---

# @babel/preset-env

Bildigimiz gibi express rest api kurarken const ile bir degiskene require ile import islemlerini yapiyoruz. Example:

```js
const express = require("express")
```

Fakat babel ile yukleyecegimiz bir kac modul ve ayarla asagidaki gibi import islemlerimizi gerceklestirebiliriz

## Installation

npm install @babel/cli @babel/core @babel/node @babel/preset-env babel-preset-env --save-dev

Yukaridaki modulleri kurduktan sonra root dizinine .babelrc adinda bir dosya olusturup asagidaki satiri icine yapistiriyoruz ve artik import kullanabilecegiz.

```js
{ "presets": ["@babel/preset-env"] }
```
