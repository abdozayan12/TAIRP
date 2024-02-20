import React from 'react';
import PropTypes from 'prop-types';
import humidityIcon from '../assets/humidity.png';
import windIcon from '../assets/wind.png';

const WeatherCard = ({ humidity, wind }) => (
  <div className="data-container">
    <div className="element">
      <img src={humidityIcon} alt="" className="Icon" />
      <div className="data">
        <div className="humidity">
          {humidity}
          %
        </div>
        <div className="text">Humidity</div>
      </div>
    </div>
    <div className="element">
      <img src={windIcon} alt="" className="Icon" />
      <div className="data">
        <div className="wind">
          {wind}
          {' '}
          km/h
        </div>
        <div className="text">Wind speed</div>
      </div>
    </div>
  </div>
);

WeatherCard.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherCard;
