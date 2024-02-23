const apiKey = '5d1c474ea33a56bbc6a79adc3b6b3451';

const fetchWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchWeatherData;
