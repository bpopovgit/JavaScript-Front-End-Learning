const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadButtonElement = document.getElementById('load-meals');
const addButtonElement = document.getElementById('add-meal');
const editButtonElement = document.getElementById('edit-meal');
const mealListElement = document.getElementById('list');
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

let currentMealId = null;

const loadMeals = async () => {
        // Fetch all meals
        const response = await fetch(baseUrl)
        const data = await response.json();
    
        // Clear meal list element
        mealListElement.innerHTML = '';
    
        // Create meal element for each
        for (const meal of Object.values(data)) {
            const changeButtonElement = document.createElement('button');
            changeButtonElement.textContent = 'Change';
            changeButtonElement.classList.add('change-meal');
    
            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.textContent = 'Delete';
            deleteButtonElement.classList.add('delete-meal');
    
            const buttonContainerElement = document.createElement('div');
            buttonContainerElement.id = 'meal-buttons';
            buttonContainerElement.appendChild(changeButtonElement);
            buttonContainerElement.appendChild(deleteButtonElement);
    
            const foodH2Element = document.createElement('h2');
            foodH2Element.textContent = meal.food;
    
            const timeH3Element = document.createElement('h3');
            timeH3Element.textContent = meal.time;
    
            const caloryH3Element = document.createElement('h3');
            caloryH3Element.textContent = meal.calories;
    
            const mealElement = document.createElement('div');
            mealElement.classList.add('meal');
            mealElement.appendChild(foodH2Element);
            mealElement.appendChild(timeH3Element);
            mealElement.appendChild(caloryH3Element);
            mealElement.appendChild(buttonContainerElement);
    
            // Attach meal to dom
            mealListElement.appendChild(mealElement);

            // Attach on change
            changeButtonElement.addEventListener('click', () => {
                // save current meal id
                currentMealId = meal._id;
                // populate input
                foodInputElement.value = meal.food;
                timeInputElement.value = meal.time;
                caloriesInputElement.value = meal.calories;

                // activate edit button
                editButtonElement.removeAttribute('disabled');

                // deactivate add button
                addButtonElement.setAttribute('disabled', 'disabled');

                // remove from list
                mealElement.remove();

            });

            // Attach on delete
            deleteButtonElement.addEventListener('click', async () => {
                // delete http request
                const response = await fetch(`${baseUrl}/${meal._id}`, {
                    method: 'DELETE'
                });

                mealElement.remove();
                // remove from list
            })

        }

};

loadButtonElement.addEventListener('click', loadMeals);

editButtonElement.addEventListener('click', async () => {
    // Get data from inputs
    const { food, calories, time } = getInputData();

    // Put request
    const response = await fetch(`${baseUrl}/${currentMealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: currentMealId,
            food,
            calories,
            time,
        })
    });

    if (!response.ok) {
        return;
    }
    // load meals
    loadMeals();

    // deactivate edit button
    editButtonElement.setAttribute('disabled', 'disabled');

    // activate add button
    addButtonElement.removeAttribute('disabled');

    // clear currentMealId
    currentMealId = null;

    // clear input fields
    clearInputData();
})
http://localhost:3030/jsonstore/games
addButtonElement.addEventListener('click', async () => {
    // Get input data
    const newMeal = getInputData();

    // Create POST request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newMeal),
    });

    if (!response.ok) {
        return;
    }

     // Clear input fields
     clearInputData();

    // Load all meals
    loadMeals();


});

function getInputData() {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;

    return { food, time, calories };
};

function clearInputData() {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
}

