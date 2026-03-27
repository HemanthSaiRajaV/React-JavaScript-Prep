
function outer(count) {
    console.log("outer input", count)
    function inner() {
        console.log("inner increment", count)
        return count ++
    }
    return inner;
}

const myInner = outer(1);  // Returns the inner function
myInner(); 
myInner(); 
myInner(); 
myInner(); 
myInner(); 
