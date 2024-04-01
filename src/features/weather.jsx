import React, { useState } from 'react';


function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const apiKey = "95f838fea3e27972e40e7b11618bc4ce";
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const handleSearch = async () => {
    try {
      const response = await fetch(`${apiURL}${city}&appid=${apiKey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-purple-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 py-6">
        <div className="search mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            spellCheck="false"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors duration-200 w-full py-2 px-4"
          />
          <button onClick={handleSearch} className="ml-2">
            <img src="weather/search.png" alt="" />
          </button>
        </div>
        {error && <div className="error mb-4 text-red-500"><p>Invalid City or Place Name</p></div>}
        {weatherData && (
          <div className="weather">
            <h3 className="weather-details">Weather is {weatherData.weather[0].main}</h3>
            <img src={`weather/${weatherData.weather[0].main.toLowerCase()}.png`} alt="" className="weather-icon" />
            <h1 className="temp">{weatherData.main.temp}°C</h1>
            <h2 className="city">{weatherData.name}</h2>
            <div className="details">
              <div className="col">
                <img src="weather/humidity.png" alt="" />
                <div>
                  <p className="humidity">{weatherData.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src="weather/wind.png" alt="" />
                <div>
                  <p className="wind">{weatherData.wind.speed} km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
        }
        export default WeatherApp  