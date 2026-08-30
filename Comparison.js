// strict check (===)
"use strict";

console.log("2"==2);  // true : type conversion hua , string to number 
console.log("2">2); // false
console.log("2">=2);// true:

console.log("2"===2);  // false: strict check , data type bhi check hua 


// equality and comparison me null works differntly 

console.log(null==0); // false : equality me null means empty value 
console.log(null>0);  // false :
console.log(null>=0);  // true : comparison me null is converted into 0 
console.log(null<=0);// true


// in case of undefined : each of the following is false:
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);
console.log(undefined<0);
console.log(undefined<=0);




