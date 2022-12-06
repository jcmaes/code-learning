/* Return value of the functions */

function operation(operator, ...numbers) {
    let total = 0;
    if (operator === "+") {
        for (let i = 0;i< numbers.length;i++) {
            total += numbers[i];
        }
        console.log(total);
    }
    return total;
}

const total = operation("+", 1, 2, 3, 4);
console.log(total);
