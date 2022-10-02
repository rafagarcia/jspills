---
title: Template literals
description: Definición resumida de template literals
layout: ../../layouts/MainLayout.astro
---

Los template literals se distinguen por ser cadenas de texto delimitadas por comillas invertidas (``) y proveen de la capacidad de concatenar cadenas de texto, cadenas de texto multilinea y saltos de linea. Los template literals siguen siendo cadenas de texto que ayudan a mejorar la legibilidad.

```js
let data = {
  title: "Mr.",
  name: "David Bowie",
  amount: "100000" 
};

console.log(`Dear ${data.title} ${data.name},

Your sales for your album "Aladdin Sane" have reached the number of ${data.amount} copies.

Congratulations.`)
```

_Source: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_