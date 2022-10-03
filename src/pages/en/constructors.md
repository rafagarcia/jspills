---
title: Constructor
description: Summarized definition of constructor
layout: ../../layouts/MainLayout.astro
---

A **constructor** is simply a function that is used with a new keyword to create an object. The advantage of constructors is that they contain the same properties and methods. When you create many identical objects, you can create a constructor with reference types.After the constructor is defined, you can create instances by using the _new_ keyword.

Instances are runtime instances of the class component. There are represented as javascript objects in memory. If the functions are intended to be used as constructors, the first letter is capitalized by convention to avoid confussion. There are no syntactic differences between constructors and normal functions. 

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

_Source: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_