for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3 3 3 (because var is function-scoped)

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0 1 2 (because let is blockscoped)
// how things are diff for both of these?
// With `let`, each loop iteration gets its own `i` value, so setTimeout logs 0, 1, 2.
// With `var`, all callbacks share the same `i`, so setTimeout logs 3, 3, 3.

function delayedLogs() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log("Delay:", i), i * 1000);
  }
}
delayedLogs();
