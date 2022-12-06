/* Object arguments and use of the Rest operator */

// Example 1
function add() {
    let total = 0;
    for (let i = 0;i< arguments.length;i++) {
        total += arguments[i];
    }
    console.log(total);
}

add(1, 2, 3, 4);

// Example 2
function operation(operator, ...numbers) {
    let newTotal = 0;
    if (operator === "+") {
        for (let i = 0;i< numbers.length;i++) {
            newTotal += numbers[i];
        }
        console.log(newTotal);
    }
}

operation("+", 1, 2, 3, 4);
