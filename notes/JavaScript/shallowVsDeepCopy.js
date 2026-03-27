// Original Object
//    ↓
// Shallow → copy top → nested same reference
// Deep    → copy all → new memory everywhere


const obj = { a: 1, b: { c: 2 } };

//Shallow copy using spread operator
const shallow = { ...obj };
shallow.b.c = 100;
console.log(obj.b.c); // 100 ❌ (affected)


//Deep copy using JSON methods
const deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 100;
console.log(obj.b.c); // 2 ✅ (not affected)