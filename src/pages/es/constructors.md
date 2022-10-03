---
title: Constructor
description: Definición resumida de constructor
layout: ../../layouts/MainLayout.astro
---

Un **constructor** es simplemente una función que se usa con una nueva palabra clave para crear un objeto. La ventaja de los constructores es que contienen las mismas propiedades y métodos. Cuando crea muchos objetos idénticos, puede crear un constructor con tipos de referencia. Después de definir el constructor, puede crear instancias utilizando la palabra clave _new_.

Las instancias son instancias de tiempo de ejecución del componente de clase. Se representan como objetos javascript en la memoria. Si las funciones están destinadas a usarse como constructores, la primera letra se escribe en mayúscula por convención para evitar confusiones. No hay diferencias sintácticas entre los constructores y las funciones normales.

```js
// Define Person constructor function to create more instances later

let Person = function(name) {
  this.name = name;
}

// Instantiate a Person object and store it in the person1 and person2 variables
let person1 = new Person('John'); // instance created
let person2 = new Person('James'); // instance created

console.log(person1); // logs Person { name: 'John', __proto__: { constructor: ƒ Person() }}
console.log(person2); // logs Person { name: 'James', __proto__: { constructor: ƒ Person() }}
```

_Fuente: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_