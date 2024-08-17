document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([43.65107, -79.347015], 10); // Centered on Toronto

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const apiKey = '71a09d53fe1618ac338bda7325e7f5e1';
    let weatherLayer = 'precipitation_new'; // Default layer

    let weatherTileLayer = L.tileLayer(`https://tile.openweathermap.org/map/${weatherLayer}/{z}/{x}/{y}.png?appid=${apiKey}`, {
        attribution: '© <a href="https://openweathermap.org/">OpenWeatherMap</a>'
    }).addTo(map);

    document.getElementById('layerSelect').addEventListener('change', function (e) {
        map.removeLayer(weatherTileLayer);
        weatherLayer = e.target.value;
        weatherTileLayer = L.tileLayer(`https://tile.openweathermap.org/map/${weatherLayer}/{z}/{x}/{y}.png?appid=${apiKey}`, {
            attribution: '© <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        }).addTo(map);
    });
});
