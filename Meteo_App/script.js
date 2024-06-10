document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const city = document.getElementById('city').value;
    const apiKey = '1a2b32bc7896bbb5acf6a80fe406c347'; // Remplacez par votre clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherData = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
                document.getElementById('weatherResult').innerHTML = weatherData;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
