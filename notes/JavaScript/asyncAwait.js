async function getData() {
  try {
    const res = await fetch('https://api.example.com/users'); // API call
    const data = await res.json(); // parse JSON
    console.log(data); // print result
  } catch (err) {
    console.log(err); // handle error
  }
}
getData();