/* Test the existence and value of a property */

const earth = {
    population: 7e7,
    satellite: "Moon",
    temperature: {
        min: -70,
        max: 60
    },
    isOld: false,
};

// Test 1
if (earth.population) {
    console.log("Ok !");
} else {
    console.log("Nok !");
}

// Test 2
if ("population" in earth) {
    console.log("Ok !");
} else {
    console.log("Nok !");
}

// Test 3
if (earth.hasOwnProperty("test")) {
    console.log("Ok !");
} else {
    console.log("Nok !");
}
