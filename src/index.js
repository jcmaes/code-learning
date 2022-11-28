/* Conditional statements */

const wheel = 4;
let vehicleType;

switch (wheel) {
    // Simple case
    case 2 : {
        vehicleType = "moto";
        break;
    }
    // Multiple case
    case "4" :
    case 4 : {
        vehicleType = "auto";
        break;
    }
    // Default case
    default : {
        vehicleType = "truck";
        break;
    }
}

console.log(vehicleType);
