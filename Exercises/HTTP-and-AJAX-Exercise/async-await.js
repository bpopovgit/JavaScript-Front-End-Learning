//Create normal func that returns promise
function calculateMeaningOfLife(time) {
    if (Math.random() < 0.5) {
        throw new Error('Failed to calculate');
    }
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 5000);
    });

    return result;

}

async function getName() {
    return 'Pesho';
}

//Async func
async function solve() {
    const name = await getName();
    console.log(name);
    
    try {
        const meaningOfLife = await calculateMeaningOfLife();
        console.log(meaningOfLife);
    } catch(error) {
        console.log(error.message);
    }

}

solve();


// //Async function expression
// const solve = async function() {

// }

// //Async arrow function
// const solve = async () => {

// }