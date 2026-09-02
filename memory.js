// memory- 1. stack(primitive) 2. heap(non-primitive)

// stack- primitive- only copy is passed not the actual reference
let name="vishal";
let namesecond=name;
namesecond="Adarsh";
console.log(name); // original will be remain as it is ;vishal
console.log(namesecond);  // copy will change ; Adarsh


// heap-non primitive: referece is passed 
// changes made in one reflect other as both points to the same memory references

let obj1={
  role:"digital",
  id:2026
}
let obj2=obj1;
obj2.role="Prime";  // changes will be reflected in original one too , as its reference is passed , both points to same address
console.log(obj1);
console.log(obj2);