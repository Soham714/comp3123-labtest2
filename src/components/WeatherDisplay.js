import React from 'react';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails, wind, sys } = weather;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}@4x.png`;

  return (
    <div className="weather-row-container">
      {/* Current Weather Card */}
      <div className="weather-card current-weather">
        <h2>
          {name}, {sys.country}
        </h2>
        <div className="icon-container">
          <img src={iconUrl} alt={weatherDetails[0].description} />
        </div>
        <h3>{main.temp}°C</h3>
        <p className="text-capitalize">{weatherDetails[0].description}</p>
      </div>

      {/* Weather Details Card */}
      <div className="weather-card">
        <p>
          <WiThermometer /> <strong>Max:</strong> {main.temp_max}°C | <strong>Min:</strong> {main.temp_min}°C
        </p>
        <p>
          <WiHumidity /> <strong>Humidity:</strong> {main.humidity}%
        </p>
        <p>
          <WiStrongWind /> <strong>Wind Speed:</strong> {wind.speed} km/h
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
