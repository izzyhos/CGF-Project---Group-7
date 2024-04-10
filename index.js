const apiKey = '72caa373e574c98ead2791c519b0c314';
const latitude = 28.963;
const longitude = -13.5477;
const weatherContainer = document.getElementById('arrecife-weather');

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const iconCode = data.weather[0].icon;
        const iconURL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const weatherHTML = `
            <h2 class="weatherTitle">Current Weather in Arrecife, Lanzarote</h2>
            <img src="${iconURL}" alt="Weather Icon"> 
            <h3 class="weatherText">Temperature:</h3>
            <p>${Math.round(data.main.temp)} °C</p>
            <h3 class="weatherText">Conditions:</h3>
            <p> ${data.weather[0].description}</p>
        `;
        weatherContainer.innerHTML = weatherHTML;
    })
    .catch(error => console.error('Error fetching weather data:', error));
