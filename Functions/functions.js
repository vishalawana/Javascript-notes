// function statement aka function decleration
function a(){
    console.log("a called");
}
// function expresion
let b = function(){
    console.log("b called");
}
// so the only diff is with hoisting 
// b is any other variable but a is hoisted with its defination 

// anounymous function 
// function(){
//     console.log("anounuymous functions")
// }
// it is used where funtions are intended to use as values
// it has to be assigned to a variable 

// named function experations
const c = function xyz(){
    console.log('named function is called');
}
// xyz(); // this will give us an error becoz the xyz is not created in the outer scope but it is created as local variable we can access it in xyz itself 
// parameter vs arguments
//  params or labels or identifiers are local to that funvtion 
// arguments are those which we passed in our function tht we called


// First class functions 


// ability to use fingtion as values passed returned valled as first class function or citixens 


// Callback functions
// functions that we passed into abother functions are called as callback functions 
// these functions are helpfull for doung the async operations in js code as js is a single threaded language;
// ex.
setTimeout(() => {
    console.log('settimeput called')
}, 1000);
console.log("sync called")