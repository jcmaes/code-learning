/* Make a POST request */

const user = {
    name: 'tintin',
    email: 'tintin@gmail.com'
}

const promise = fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
});

promise.then(async response => {
    try {
        console.log(response);
        const body = await response.json();
        console.log(body);
    } catch (e) {
        console.log(e);
    }
    console.log(response);
})
