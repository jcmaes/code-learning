/* Closures */

function powerBy(power) {
    return function(number) {
        return number ** power
    }
}

// Example 1
powerBy(2)(3);
console.log(powerBy(2)(3)); // 9

// Example 2
const powerBy2 = powerBy(2);
console.log(powerBy2(3));

// Example 3
const a = () => {
    let array = [];
    for(var i = 0; i < 3; i++) {
        array.push(function () {
            console.log(i);
        })
    }
    return array;
}

const table = a();

table[0](); // 3
table[1](); // 3
table[2](); // 3
