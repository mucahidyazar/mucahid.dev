---
title: "useRef"
date: "2020-07-20"
layout: post
link: ""
draft: false
platforms:
  - blog
tags:
  - javascript
  - react
  - hooks
---

#useRef

useRef ile inputlarimizin valuelerine veya focuslarina ulasip onlari manipule edebilir veya asagidaki gibi kullanabiliriz.
Asagida isChatOpen true olursa sayfa acilir acilmaz auto focus olmasini istiyoruz inputa.

```js
import React, { useContext, useEffect, useRef } from "react"

export default function Chat() {
  const isChatOpen = false
  const { isChatOpen } = useContext(StateContext)

  useEffect(() => {
    if (isChatOpen) {
      chatField.current.focus()
    }
  }, [isChatOpen])

  return (
    <div>
      <input ref={chatField} />
    </div>
  )
}
```

##### MESSAGE PENCERESININ SUREKLI YENI MESAJ GELDIKCE OTOMATIK OLARAK ASAGI SCROOL OLMASI

Asagida messajlarin oldugu div e ref vererek divi seciyoruz bir nevi.
Daha sonra bu ref’in current yani simdiki scrollTop degerini aliyoruz ve simdiki scrollHeight degerine esitliyoruz.
Boylece her yeni mesajda scrollumuz otomatikmen asagiya kayacakdir.

```js
  import React, { useContext, useEffect, useRef } from "react";
  …

  useEffect(() => {
    chatLog.current.scrollTop = chatLog.current.scrollHeight;
  }, [state.chatMessages]);

  export default function Chat() {
    const chatLog = useRef(null);

    return (
      <div>
        …
        <div id="chat" className="chat-log" ref={chatLog}>
          …
        </div>
        <form>
          …
        </form>
      </div>
    )}
```
