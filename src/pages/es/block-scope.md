---
title: Block scope
description: Definición resumida de block scope of var, let and const
layout: ../../layouts/MainLayout.astro
---

El block scope controla la visibilidad y la vida útil de las variables y los parámetros. Las variables declaradas usando var no tienen block scope, mientras que las variables declaradas usando let y const si lo tienen. Cualquier cosa entre llaves ({}) es un bloque. Una variable declarada en un bloque con let o const solo está disponible para usar dentro de este bloque.

```js
// no block scope with var

var myage = 1;

if (myage === 1) {
  var myage = 2;
}

console.log(myage); // expected value: 2

// block scope created by let

var myage2 = 10;

if (myage2 === 10) {
  let myage2 = 20;

  console.log(myage2); // expected output: 20
}

console.log(myage2); // expected output: 10
```

_Fuente: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_