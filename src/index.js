/* Object properties */

const earth = {
    population: 7e7,
    satellite: 'Moon',
    temperature : {
        min: -70,
        max: 60
    },
    isOld: false,
    getTemperature: function() {
        console.log("15");
    },
    getNewTemperature() {
        console.log("20");
    }
};

const copy = earth;
copy.isOld = true;

const prop = "temperature";

console.log(earth);
console.log(earth.population);
console.log(earth['satellite']);
console.log(earth[prop]);
earth.getTemperature();
earth.getNewTemperature();
