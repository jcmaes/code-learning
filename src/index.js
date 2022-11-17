/* Conditional statements */

const conditionalBoolean = 0; // 0 = false && 1 = true
console.log(!!conditionalBoolean);

// If
if (conditionalBoolean) {
    console.log("boolean");
}


const conditionalString = "something"; // empty string = false && string with character = true
console.log(!!conditionalString);

// Else
if (conditionalString) {
    console.log("string");
} else {
    console.log("Write something");
}


const name = "Jean";
// Elseif
if (name === "Jean") {
    console.log("Hello Jean");
} else if (name === "Paul") {
    console.log("Hello Paul");
} else {
    console.log("Hello");
}


// Write without curly bracket
if (name === "Jean") console.log("Hello Jean");
else if (name === "Paul") console.log("Hello Paul");
else console.log("Hello");
