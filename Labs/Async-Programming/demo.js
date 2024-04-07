//Async with callback




console.log('start')
delayStart(() => console.log('delayed start'));
console.log('finish')

function delayStart(callback) {
    setTimeout(() => {
        callback();
    }, 2000)
}