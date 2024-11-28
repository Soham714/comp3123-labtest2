import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const apiKey = "d6b13d4c109c24607bbb3d343211e33e";

  const fetchWeather = async (city) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const weatherResponse = await axios.get(weatherUrl);
      const forecastResponse = await axios.get(forecastUrl);

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data.list);
      setError('');
    } catch (err) {
      setWeather(null);
      setForecast([]);
      setError('City not found. Please try again.');
    }
  };

  useEffect(() => {
    fetchWeather('Toronto');
  }, []);

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="app-title">Weather App</h1>
        <SearchBar onSearch={fetchWeather} />
      </div>
      {error && <p className="text-danger text-center">{error}</p>}
      <WeatherDisplay weather={weather} />
      <ForecastDisplay forecast={forecast} />
      <footer>Powered by OpenWeatherMap API</footer>
    </div>
  );
}

export default App;
