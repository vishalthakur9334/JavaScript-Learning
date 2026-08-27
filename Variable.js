const id=1234    // can not be changed and it is blocked scope 

let name="Vishal";  // can be changed or reassigned and it is also block scoped

var place="Bihar";   // older method to declare variable , in modern we use let 
// var is functionally scope ,,, so we should avoid using var from now 
//

okay="hello";

// id=23;  cannot assign value to const ,,ye fixed ho gaya ab 

console.log(id)   // one variable at a time print hoga
console.table([id,name,place,okay]);  // we can print multiple variable in a tabular format :)



let a;
console.log(a);   // output:- undefined 
// agar bina intialize kiye if we use let variable ,,, undefined aayega :)



