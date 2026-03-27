
//call, apply, and bind are used to control "this" keyword in JavaScript.

const person = {
  name: "Hemanth"
};

function greet(age, city) {
  console.log(`Hi, I'm ${this.name}, Age: ${age}, City: ${city}`);
}

// ✅ call (arguments one by one)
greet.call(person, 25, "Hyderabad");

// ✅ apply (arguments as array)
greet.apply(person, [25, "Hyderabad"]);

// ✅ bind (returns new function)
const newFunc = greet.bind(person, 25, "Hyderabad");
newFunc(); // call later