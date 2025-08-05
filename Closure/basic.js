function outer() {
  let x = 10;
  return function inner() {
    console.log(x); // x is remembered
  }
}
let fn = outer();
fn(); // Logs 10 (closure)

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
