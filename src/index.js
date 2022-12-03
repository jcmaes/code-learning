/* Delete or discard properties */

const earth = {
    population: 7e7,
    satellite: "Moon",
    temperature: {
        min: -70,
        max: 60
    },
    isOld: false,
};

// Add properties
const living = "living";
earth.living = true;
earth["living"] = true;
earth[living] = true;

// Delete properties
delete earth.satellite;

// Set properties to null
earth.population = null;

// Decomposition
const { population, ...copyEarth } = earth; // Copy earth without population

console.log(earth);