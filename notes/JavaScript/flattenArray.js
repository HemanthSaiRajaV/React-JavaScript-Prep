const arr = [1, [2, [3]],[2, 3],5,6,7,"9",10,[11, 12, [13, 14, [15, 16]]]];

//"We use flat(Infinity) to convert nested arrays into a single array in a simple and efficient way."
const result = arr.flat(Infinity);
console.log(result); 

// using recursion to flatten the array

function flatten(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val)
      ? acc.concat(flatten(val)) // recursive call
      : acc.concat(val);         // push value
  }, []);
}

console.log(flatten(arr)); 