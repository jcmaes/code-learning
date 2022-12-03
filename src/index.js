/* Object properties */

const population = 50;

const earth = {
    population: 7e7,
    satellite: "Moon",
    temperature: {
        min: -70,
        max: 60
    },
    isOld: false,
};

const { population: populationEarth, satellite, temperature, ...rest } = earth;

console.log(population, populationEarth, satellite, temperature);
console.log(rest);
