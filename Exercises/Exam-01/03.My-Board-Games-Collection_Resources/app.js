const baseUrl = 'http://localhost:3030/jsonstore/games'

const loadGamesButton = document.getElementById('load-games');
const addGameButton = document.getElementById('add-game');
const editGameButton = document.getElementById('edit-game');
const gamesListElement = document.getElementById('games-list');
const gameNameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');

let currentGameId = null;

const loadGames = async () => {
        //Fetch all games
        const response = await fetch(baseUrl);
        const data = await response.json();

        //Clear game element

        gamesListElement.innerHTML = '';

        for (const game of Object.values(data)) {
            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.textContent = 'Delete';
            deleteButtonElement.classList.add('delete-btn');

            const changeButtonElement = document.createElement('button');
            changeButtonElement.textContent = 'Change';
            changeButtonElement.classList.add('change-btn');

            const buttonsContainerDiv = document.createElement('div');
            buttonsContainerDiv.classList.add('buttons-container');
            buttonsContainerDiv.appendChild(deleteButtonElement);
            buttonsContainerDiv.appendChild(changeButtonElement);

            const namePElement = document.createElement('p');
            namePElement.textContent = game.name;

            const playersPElement = document.createElement('p');
            playersPElement.textContent = game.players;

            const typePElement = document.createElement('p');
            typePElement.textContent = game.type;

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('content');
            contentDiv.appendChild(namePElement);
            contentDiv.appendChild(playersPElement);
            contentDiv.appendChild(typePElement);

            const boardGameElement = document.createElement('div');
            boardGameElement.classList.add('board-game');
            boardGameElement.appendChild(buttonsContainerDiv);
            boardGameElement.appendChild(contentDiv);

            // Attach game to dom
            gamesListElement.appendChild(boardGameElement);

            // Attach on change
            changeButtonElement.addEventListener('click', () => {
                // save current game id
                currentGameId = game._id;
                // populate input
                gameNameInputElement.value = game.name;
                typeInputElement.value = game.type;
                playersInputElement.value = game.players;
                
                // activate edit button
                editGameButton.removeAttribute('disabled');
                
                // deactivate add button
                addGameButton.setAttribute('disabled', 'disabled');
                
                // remove from list
                boardGameElement.remove();
            
            });
            
            // Attach on delete
            deleteButtonElement.addEventListener('click', async () => {
                // delete http request
                const response = await fetch(`${baseUrl}/${game._id}`, {
                    method: 'DELETE'
                });
                
                // remove from list
                boardGameElement.remove();

            })

        }

};

loadGamesButton.addEventListener('click', loadGames);

addGameButton.addEventListener('click', async () => {
    // Get input data
    const newGame = getInputData();

    // Create POST request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newGame),
    });

    if (!response.ok) {
        return;
    }

     // Clear input fields
     clearInputData();

    // Load all meals
    loadGames();


});

editGameButton.addEventListener('click', async () => {
    // Get data from inputs
    const { gameName, gameType, players } = getInputData();

    // Put request
    const response = await fetch(`${baseUrl}/${currentGameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: currentGameId,
            gameName,
            gameType,
            players,
        })
    });

    if (!response.ok) {
        return;
    }
    // load meals
    loadGames();

    // deactivate edit button
    editGameButton.setAttribute('disabled', 'disabled');

    // activate add button
    addGameButton.removeAttribute('disabled');

    // clear currentMealId
    currentGameId = null;

    // clear input fields
    clearInputData();
})

function getInputData() {
    const gameName = gameNameInputElement.value;
    const gameType = typeInputElement.value;
    const players = playersInputElement.value;

    return {gameName, gameType, players};
}

function clearInputData() {
    gameNameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}

