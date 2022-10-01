---
title: Hoisting
description: Summarized definition of Hoisting
layout: ../../layouts/MainLayout.astro
---

En JavaScript, las declaraciones (por ejemplo, de variables o funciones) se mueven al principio de su scope o ámbito. Este comportamiento se conoce como hoisting y es muy importante tenerlo en cuenta a la hora de programar para prevenir posibles errores.

Teniendo en cuenta cómo funciona el hoisting, podemos llamar a una función y definirla más abajo, porque automáticamente JS la “elevará”. Así, este código funciona correctamente:

```js
  add();
  function add() {
   var myNumber = 4;
   console.log(myNumber + myNumber);
  }
```

dado que JS lo convierte en:

```js
  function add() {
    var myNumber;
    myNumber = 4;
    console.log(myNumber + myNumber);
  }
  add();
```

En el caso de las variables, es muy importante tener en cuenta que el hoisting solo se aplica a la declaración, y no a su asignación.

Por lo tanto, **NO** podríamos escribir esto:

```js
  //Error
  add();
  function add() {
    console.log(myNumber + myNumber);
  }
  var myNumber = 4;
```

_Fuente: [¿Qué es el hoisting? - Medium post](https://anamartinezaguilar.medium.com/qu%C3%A9-es-el-hoisting-327870f67b36)_