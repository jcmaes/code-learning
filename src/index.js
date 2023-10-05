/* Asynchronous functions with async / await */

// Example 1
async function func() {
    // return 1;
    return new Promise((resolve, reject) => resolve(1));
}

// console.log(func()); // Promise

func()
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Example 2
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve p1");
        reject("reject p1");
    }, 1000);
});
async function func2() {
    try {
        const value = await p1;
        console.log(value);
    } catch (e) {
        console.log("error: ", e); // error: reject p1
    }
}
