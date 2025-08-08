// function outer(b){
//     let a = 10;
//     return function inner(){
//         console.log(a,b); // 10
//         a++;
//     }
// }
// outer(2)(); // 10
// hre is what i understanding:
// - The outer function creates a closure with variable `a`.
// - The inner function can access `a` even after the outer function has returned
// - The inner function forms a closure over a ;
// the b that we passed in inner funvtion ht it is not the same as the b that we passed in outer function

function counter() {
    let count = 0;
   this.increament = function() {
        count++;
        console.log(count);
    }
   this.decreament = function() {
        count--;
        console.log(count);
    }
}
const counter1 = counter();
console.log(counter1)
counter1.increament();
counter1.decreament();


