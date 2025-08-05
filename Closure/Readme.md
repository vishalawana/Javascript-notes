
# 🔒 JavaScript Closure Interview Questions & Concepts

---

## ❓ What is a Closure?

> A closure is a function that **remembers its lexical scope**, even when executed outside its original context.

---

## 🤔 Why Are Closures Useful?

Closures allow:

* ✅ Data privacy (encapsulation of variables)
* ✅ Function factories
* ✅ Memoization / caching
* ✅ Currying and partial application

---

## ❓ Q: What will be the output?

```js
function test() {
  var a = 5;
  return function () {
    console.log(a);
  };
}
const res = test();
res(); // ?
```

✔️ Output: `5` — Because the inner function closes over `a`

---

## ❓ Q: How can closures emulate private variables?

```js
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}
const c = counter();
c.increment();
c.getCount(); // 1
```

✔️ Only the returned functions have access to `count`

---

## ❓ Q: Common bug with closures in loops?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3 3 3 (because var is function-scoped)
```

✅ Fix with `let` or IIFE:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

---

## ❓ Q: Can closures cause memory leaks?

✔️ Yes — if a closure holds reference to large unused data or DOM nodes.
✅ Best Practice: Avoid unnecessary retention.

---

## ❓ Q: Is every function a closure?

✔️ Technically yes — every JS function has access to its lexical scope.
But not every function uses it.

---

## 🚀 Advanced Use Cases

### 1. Memoization

```js
function memoize(fn) {
  const cache = {};
  return function (key) {
    if (cache[key]) return cache[key];
    const result = fn(key);
    cache[key] = result;
    return result;
  };
}

const square = memoize(x => x * x);
console.log(square(4)); // 16
console.log(square(4)); // 16 (cached)
```

---

### 2. Currying

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const double = multiply(2);
console.log(double(5)); // 10
```

---

✅ **Interview Tip:** Practice rewriting functions using closures. It helps with scope understanding, async behavior, and higher-order functions.

---
