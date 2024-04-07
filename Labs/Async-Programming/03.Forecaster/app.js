function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';

    const locationElement = document.getElementById('location');
    const submitButtonElement= document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');

    const weatherSymbol = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    submitButtonElement.addEventListener('click', () => {
        console.log(locationElement.value)
        fetch(`${baseUrl}/locations}`)
            .then(res => res.json())
            .then(locationData => {
                const { code } = locationData.find(location => location.name === locationElement.value);

                // return fetch(`${baseUrl}/today/${code}`)

                return Promise.all([
                    fetch(`${baseUrl}/today/${code}`),
                    fetch(`${baseUrl}/upcoming/${code}`),
                ]);
            })
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(([today, upcoming]) => {
                console.log(today);
                console.log(upcoming);
                forecastElement.style.display = 'block';

                const symbolSpanElement = document.createElement('span');
                symbolSpanElement.classList.add('condition');
                symbolSpanElement.classList.add('symbol');
                symbolSpanElement.textContent = weatherSymbol[today.forecast.condition];

                // Don't do this at home
                const anotherSpan = document.createElement('span');
                anotherSpan.innerHTML = `
                    <span class="condition">
                        <span class="forecast-data">${today.name}</span>
                        <span class="forecast-data">${today.forecast.low}°/${today.forecast.high}°</span>
                        <span class="forecast-data">${today.forecast.condition}</span>
                    </span>
                `;

                const foreCastsElement = document.createElement('div');
                forecastElement.classList.add('forecasts');
                forecastElement.appendChild(symbolSpanElement);
                forecastElement.appendChild(anotherSpan);

                currentElement.appendChild(foreCastsElement);
            })
    })
}

attachEvents();