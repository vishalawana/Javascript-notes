function outer() {
  let x = 10;
  return function inner() {
    console.log(x); // x is remembered
  }
}
let fn = outer();
fn(); // Logs 10 (closure)