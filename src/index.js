/* Merging objects */

const earth1 = {
    population: 7e7,
    satellite: "Moon"
};

const earth2 = {
    temperature: {
        min: -70,
        max: 60
    },
    isOld: false
};

// Example 1
const earth = Object.assign({}, earth1, earth2);
console.log(earth === earth1);

// Example 2
const newEarth = { ...earth1, ...earth2 };
console.log(newEarth);
