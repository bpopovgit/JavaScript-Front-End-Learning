const url = 'https://swapi.dev/api';

// // Promise chaining
// fetch(`${url}/people/1`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log('Something went wrong');
//     });


 // Using server to get books
 const booksUrl = 'http://localhost:3030/jsonstore/books'
fetch(booksUrl)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// Create book
fetch(booksUrl, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Chronicles of Narnia',
        author: 'CS Lewis'
    })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Edit book
// fetch(`${booksUrl}/0cae11a2-6ef6-45b3-9a7d-5d8270863a2e`, {
//     method: 'PUT',
//     headers: {
//         'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
//         "author": "CS Lewis",
//         "_id": "0cae11a2-6ef6-45b3-9a7d-5d8270863a2e"
//     })
// })

// Delete book
fetch(`${booksUrl}/abac6654-0162-49bf-8bea-b7ba8dfe987a`, {
    method: 'DELETE',

})
    .fetch(res => console.log(res))
    .catch(error => console.log(error));