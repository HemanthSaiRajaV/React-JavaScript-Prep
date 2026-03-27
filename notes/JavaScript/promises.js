const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Done ✅");
    } else {
        reject("Error ❌");
    }
});

myPromise
    .then(res => console.log(res))   // success
    .catch(err => console.log(err)); // error


//A Promise is an object that represents the result of an asynchronous operation,
// with states like pending, fulfilled, and rejected, helping manage async flow cleanly.