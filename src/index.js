/* Object properties */

const population = 7e7;
const satellite = 'Moon';
const temperature = {
    min: -70,
    max: 60
};
const pop = "population";
const earth = {
    [pop]: population,
    satellite,
    temperature,
    isOld: false,
};

earth[pop] = population;

console.log(earth);
