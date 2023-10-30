// Example 1
try {
  const wrongjson = "{test:1}";
  JSON.parse(wrongjson);
} catch (e) {
  console.error(e);
} finally {
  console.log("in finally");
}

try {
  setTimeout(() => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e); // ReferenceError
    }
  }, 2000);
} catch (e) {
  console.error(e); // Uncaught
} finally {
}

console.log("Hello !");

// Example 2
window.addEventListener("error", (e) => {
  console.log(e);
});

getData();

// Example 3
function getTransaction() {
  const data = {
    name: "euro",
  };

  if (!data.amount) {
    // const e = new Error("need amount");
    // throw e;
    throw new Error("need amount");
  }
}

try {
  getTransaction();
} catch (e) {
  console.log(e);
  console.log(e.name);
  console.log(e.message);
  console.log(e.stack);
  console.error(e);
}
