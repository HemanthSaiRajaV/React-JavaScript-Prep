const nums = [1, 2, 3];

//map() → Creates a new array by transforming each element.
const doubled = nums.map(n => n * 2);
console.log("map Method",doubled); // [2, 4, 6]

//filter() → Creates a new array with elements that pass a condition.
const even = nums.filter(n => n % 2 === 0);
console.log("filter Method",even); // [2, 4]

//reduce() → Reduces the array to a single value by applying a function(sum, object, etc.).
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("reduce Method",sum); // 6

//forEach() → Executes a function for each element (does not return a new array).
nums.forEach(n => console.log("forEach Method",n)); // prints 1 2 3