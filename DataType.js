// alert("hello");  this is a browser function not nodejs
let age=24;   // number data type , can include integers, decimal 
console.log(age,typeof(age));  // number 

let name="vishal";
console.log(name,typeof(name));  // string

let flag=false;
console.log(flag,typeof(flag));  // boolean

let arr;
console.log(arr,typeof(arr));  // undefined

let ans=null;
console.log(ans,typeof(ans));  // object 

let a=Symbol("id");   // Symbol creates uniqueness for each value,, 
let b=Symbol("id");
console.log(a==b);   // no two symbol is same ,,, like id here : two different object location 


console.log(typeof a);   // symbol
console.log(typeof Symbol);  // function 



