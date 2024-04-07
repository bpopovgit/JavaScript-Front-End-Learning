const weddingpromise = new Promise((resolve, reject) => {
    if (Math.random() < 0.3) {
        return reject('Sorry, it\'s me');
    }
    setTimeout(() => {
        resolve('Just Married!');
    }, 5000);
});

console.log(weddingpromise);

weddingpromise
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message)
    })
    .finally(() => {
        console.log('Love always wins!')
    });

// Always rejecting promise
const rejectingPromise = Promise.reject('Sorry next time');
console.log(rejectingPromise);
rejectingPromise.catch((message) => console.log(message));

const createTimeoutPromise = function (message, time) {
    return timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, time);
    }) 
}

// Multiple parallel promises. If just one promise is rejected, all of them will be rejected. Promise.settled() allows for both resolved and rejected.
const groupPromise = Promise.all([
    Promise.resolve('First promise'),
    createTimeoutPromise('second promise', 3000),
    createTimeoutPromise('third promise', 1000),
]);

groupPromise
    .then(values => {
        console.log(values)
    })
    .catch((error) => {
        console.log(error);
    });