
console.log("Start hoisting in call stack");

setTimeout(() => {
    console.log("Running Macro task");
}, 500);

Promise.resolve().then(() => {
    console.log("Running Micro task");
});

console.log("checking call satck");

// node  src/JavaScript/eventLoop.js