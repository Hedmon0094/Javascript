// strings
 conts=" hello world".toUpperCase();
console.log(conts);

var t="hello world";
 var j= t + "\t I am Here";
console.log(j);

function myFunction(x, y) {
    return x + y;
}
console.log(myFunction(5, 6));

// conditional statements
var x = 5;
if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is less than 10");
}
//else if
var x = 85;
if (x > 10) {
    console.log("x is greater than 10");
}
else if (x == 5) {
    console.log("x is equal to 5");
}
else {
    console.log("x is less than 10");
}
// arrays
var cars = ["BMW", "Volvo", "Saab", "Ford"];
console.log(cars.length-1);
//arrays methods
cars.push("Toyota");
console.log(cars);
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("Audi");
console.log(cars);
cars.reverse();
console.log(cars);

//objects
var person = {firstName:"John",
     lastName:"Doe",
      age:50,
       eyeColor:"blue",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }

    };
console.log(person.fullName());
console.log(person.age);
console.log(person.firstName);
console.log(person["lastName"]);


let timer = setInterval(function() {
  if (/* condition to check if animation is complete */) {
    clearInterval(timer);
  } else {
    // code to increase style.left by 2px
  }
}, 20); // change by 2px every 20ms, about 50 frames per second
