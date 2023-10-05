/* Web API URL */

const url = new URL('https://wikipedia.fr/napoleon?key1=value1&key2=value2');

url.searchParams.append('key3', 'value3');
url.searchParams.set('key4', 'tom&jerry');

console.log(URL.toString());
