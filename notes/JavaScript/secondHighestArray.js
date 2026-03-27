const arr = [10, 5, 8, 20, 20];

const result = [...new Set(arr)]  // remove duplicates
  .sort((a, b) => b - a)[1];     // sort desc & pick 2nd

console.log(result); // 10