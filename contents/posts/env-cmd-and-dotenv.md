---
title: "Enviroment Variables Tanımlamak / env-cmd / dotenv"
date: "2020-10-14"
layout: post
link: ""
draft: false
platforms:
  - blog
tags:
  - javascript
  - nodejs
---

# ENVIROMENT VARIABLES

Açık kaynak projelerimizde bazı verileri açık olarak paylaşmak ve github'a yüklemek istemeyiz. İşte bu açık olarak paylaşma kistemediğimiz verileri environment variable olarak tanımlamamız gerekmektedir. Örneğin: databasemize erişim için kullandığımız bir key veya Google'dan aldığımız aylık ücret ödediğimiz ve 2000 request yapabileceğimiz bir key gibi...

## .env Files

Ben root'da config adında bir dosya oluşturup içindede dev.env ve test.env adında 2 dosya oluşturuyorum. dev.env örnek olması açısından aşağıdaki gibi.

```js
OPEN_WEATHER_API = aSdsads1d52das1d
```

## ENV-CMD

### Installation

npm i env-cmd --save -dev

Yukarıdakı kod ile paketimizi yükledikten sonra package.json'a gelip "env-cmd -f ./config/dev.env" asağıdaki satırı ekliyoruz. (Ben envritonment variables'larımı root'daki config içinde tuttuğum için yol bu şekilde siz kendinize göre ayarlayın.)

Daha sonra package.json içinde scripts aşağıdaki gibi olacaktır.

```js
  "dev": "env-cmd -f ./config/dev.env nodemon src/index.js"
```

Ve artık projemiz dev de çalışırken process.env.OPEN_WEATHER_API ile gizli tutulan bu keyimizi kullanabiliriz.

### Test için ayrı environment kullanımı

Bildiğiniz gibi test aşamasında aynı variable'lar yerine farklı fake API'lar tutmak isteyebiliriz. Örneğin DATABASE için dev'de farklı, test aşamasında farklı adresler tutmak isteyebiliriz. Bunun içinse dev.env deki gibi test.env adındaki dosyamızdada API'larımızı tanımlıyoruz.

Daha sonra package.json içinde scripts aşağıdaki gibi olacaktır.

```js
  "dev": "env-cmd -f ./config/dev.env nodemon src/index.js"
  "test": "env-cmd -f ./config/test.env jest --watch"
```

Ve eger jest ile test yapiyorsak package.json’da scriptsler altina burayida eklemeyi unutmuyoruz. Anlami src altindaki kullanilan node environmentlerini jest ile test yaparken jest’in kullanmasini saglamak.

```js
  "jest": {
    "testEnvironment": "node"
  },
```

## DOTENV

### Installation

npm i dotenv --save -dev

Enviroment variables'larımızı yine aynı şekilde yukarıda ki gibi oluşturup aynı şekilde dosyalıyoruz.

Ve index.js veya app.js gibi main çalışmaya başlayan dosyaya gelip en üst satır'da dotenv yi aktif aşağıdaki gibi ekleyerek ediyoruz.

```js
require("dotenv").config()
```

### Test için ayrı environment kullanımı

Test için ayrı environment kullanımı burada daha farklı aşağıdaki gibi yine ana klasöre gelip testi çalıştırmadan önce yukarıda eklediğimiz dotenv satırına path göstererek vereceğiz ve bu işlemi test yaparken bu şekilde dev'de çalıştırırken eskisi şeklinde sürekli değiştirmeniz gerekiyor.

```js
require("dotenv").config({ path: __dirname + "../../config/dev.env" })
```

Ve yine tabi birde jest için environment variablesları tanımması için aşağıdaki satırlar var tabi.

```js
  "jest": {
    "testEnvironment": "node"
  },

```
