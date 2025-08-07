// var a = 1;
// let b = 2;

// function test() {
//   var a = 10;
//   let b = 20;

//   {
//     let a = 100;
//     let b = 200;
//     console.log("Block a:", a);
//     console.log("Block b:", b);
//   }

//   console.log("Function a:", a);
//   console.log("Function b:", b);
// }

// test();
// console.log("Global a:", a);
// console.log("Global b:", b);

// function leakVar() {
//   if (true) {
//     var a = 50;
//     let b = 60;
//   }
//   console.log("a:", a);
//   console.log("b:", b);
// }


// leakVar();

// var m = 1;
// let n = 2;

// function modify() {
//   m = 10;// var is function-scoped, so this modifies the global m
//   n = 20;// let is block-scoped, so this modifies the global n

//   {
//     let m = 100;
//     let n = 200;
//     console.log("Block m:", m);
//     console.log("Block n:", n);
//   }

//   console.log("After Block m:", m);
//   console.log("After Block n:", n);
// }

// modify();

// console.log("Global m:", m);
// console.log("Global n:", n);
// function tricky() {
//   console.log("Before var a:", a);
//   console.log("Before let b:", b);

//   var a = 5;
//   let b = 10;
//   console.log("After var a:", a);
//   console.log("After let b:", b);
// }

// tricky();
var x = 1;

function test() {
  var y = 2;      // function scope
  if (true) {
    var z = 3;    // still function scoped (not block scoped!)
    let w = 4;    // block scoped
  }

  console.log(y); // ✅ 2
  console.log(z); // ✅ 3 (var is function scoped)
  console.log(w); // ❌ Error (let is block scoped)
}

test();

