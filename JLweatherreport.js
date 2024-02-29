let inputEl = document.getElementById('weatherInput');
let buttonEl = document.getElementById('button');
let cityWeatherEl = document.getElementById('cityWeather');
let descriptionEl = document.getElementById("description");
let windEl = document.getElementById("wind");
let temperatureEl = document.getElementById("temperature");

const apiKey = '92ab6302688bb99a959762953a34514f';

buttonEl.onclick = function() {
    if (inputEl.value === '') {
        alert('Please Enter City Name');
    } else {
        let city = inputEl.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        let options = {
            method: 'GET'
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(data => {
                cityWeatherEl.textContent = `City Name : ${city}`;
                if (data.weather && data.weather.length > 0) {
                    descriptionEl.textContent = `Sky Conditions : ${data.weather[0].description}`;
                } else {
                    descriptionEl.textContent = 'Weather data not available';
                }
                temperatureEl.textContent = `Temperature : ${Math.round(data.main.temp - 273.15)} °C`;
                windEl.textContent = ` Wind Speed : ${data.wind ? data.wind.speed + 18/5 + ' km/hr' : 'Wind data not available'}`;
            })

    }


}