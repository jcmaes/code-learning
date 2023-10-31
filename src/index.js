console.log(document.cookie);

const location = {
  country: "France",
  city: "Nice",
};

document.cookie = `location=${JSON.stringify(location)}`;

const cookies = extractCookies();

function extractCookies() {
  return document.cookie.split("; ").reduce((acc, iteration) => {
    const pair = iteration.split("=");
    acc[pair[0]] = pair[1][0] === "{" ? JSON.parse(pair[1]) : pair[1];
    return acc;
  }, {});
}

console.log(cookies);
