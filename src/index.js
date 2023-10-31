// console.log(document.cookie);

// document.cookie = "test=hello; path=/test";

// const expiration = new Date(Date.now() + 15 * 1000);

// document.cookie = `test3=hello3; expires=${expiration.toUTCString()}`;

// samesite has two values : strict or lax
// document.cookie = "samesite=lax";

// const location = {
//   country: "France",
//   city: "Nice",
// };
//
// document.cookie = `location=${JSON.stringify(location)}`;
//
// const cookies = extractCookies();
//
// function extractCookies() {
//   return document.cookie.split("; ").reduce((acc, iteration) => {
//     const pair = iteration.split("=");
//     acc[pair[0]] = pair[1][0] === "{" ? JSON.parse(pair[1]) : pair[1];
//     return acc;
//   }, {});
// }
//
// console.log(cookies);

// localStorage.setItem("theme", "dark");

// console.log(localStorage.getItem); // dark

// console.log(localStorage.key);

// Method 1
for (let key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
    console.log(key, ": ", localStorage.getItem(key));
  }
}

// Method 2
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key, ": ", localStorage.getItem(key));
}

// Method 3 with Object
localStorage.setItem(
  "location",
  JSON.stringify({ country: "France", city: "Nice" }),
);

console.log(JSON.parse(localStorage.getItem("location")));

localStorage.removeItem("theme");

localStorage.clear();
