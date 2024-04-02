import React, { useState } from 'react';
import '../features/weather.css'; // Import CSS file

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
        alert(
          "enter vsllid city"
        )
        setError(true);
        setWeatherData(null);
      }else if(response.status===400){
        alert("Please enter city Name")
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
   

    <div className="card">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          spellCheck="false"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}><img src="weather/search.png" alt="" /></button>
      </div>
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
      {error && <div className="error"><p>Invalid City or Place Name</p></div>}
    </div>
   
  );
}

export default WeatherApp;
