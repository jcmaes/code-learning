const date = new Date("2020-01-07T09:50:02.208Z");
console.log(date.toISOString());

const today = Date.parse("2023-10-12T18:45:14.507Z"); // timestamp
console.log(today); // 1697136314507

const todayTimestamp = Date.now(); // timestamp

console.log(todayTimestamp - date); // 118745968859
console.log(todayTimestamp - date.getTime()); // 118745968859

// Convert to minutes
console.log((todayTimestamp - date) / 1000 / 60); // 1979101.0796166665

const date2 = new Date();
let date3;
setTimeout(() => {
    date3 = new Date();
    const diff = date2 - date;
    console.log(diff); // 3000
}, 3000);