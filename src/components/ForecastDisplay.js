import React from 'react';

const ForecastDisplay = ({ forecast }) => {
  if (!forecast.length) return null;

  return (
    <div className="forecast-row-container mt-4">
      {forecast.slice(0, 5).map((item, index) => (
        <div className="forecast-card" key={index}>
          <h5>{new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</h5>
          <img
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt={item.weather[0].description}
          />
          <p>{item.main.temp}°C</p>
          <p>{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastDisplay;
