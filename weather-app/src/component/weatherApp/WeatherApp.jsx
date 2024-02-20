import './WeatherApp.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import clearIcon from '../assets/clear.png';
import cloudIcon from '../assets/cloud.png';
import rainIcon from '../assets/rain.png';
import snowIcon from '../assets/snow.png';
import drizzleIcon from '../assets/drizzle.png';

const WeatherApp = () => {
  const apiKey = '5d1c474ea33a56bbc6a79adc3b6b3451';

  const [wicon, setwicon] = useState(cloudIcon);
  const search = async () => {
    const element = document.getElementsByClassName('CityInput');
    if (element[0].value === '') {
      return 0;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    const humidity = document.getElementsByClassName('humidity');
    const wind = document.getElementsByClassName('wind');
    const temperature = document.getElementsByClassName('temperature');
    const location = document.getElementsByClassName('city');

    humidity[0].innerHTML = `${data.main.humidity} %`;
    wind[0].innerHTML = `${Math.floor(data.wind.speed)} km/h`;
    temperature[0].innerHTML = `${Math.floor(data.main.temp)}°C`;
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
      setwicon(clearIcon);
    } else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
      setwicon(cloudIcon);
    } else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
      setwicon(drizzleIcon);
    } else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
      setwicon(drizzleIcon);
    } else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
      setwicon(rainIcon);
    } else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
      setwicon(rainIcon);
    } else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
      setwicon(snowIcon);
    } else {
      setwicon(clearIcon);
    }
    return data;
  };
  return (
    <div className="container">
      <SearchBar onSearch={search} />
      <div className="weather-icon">
        <img src={wicon} alt="cloudIcon" />
      </div>
      <div className="temperature">25°C</div>
      <div className="city">New York</div>
      <WeatherCard humidity="64" wind="18" />
    </div>
  );
};

export default WeatherApp;
