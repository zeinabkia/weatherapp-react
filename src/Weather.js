import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Footer from "./Footer";
import WeatherData from "./weatherData";
import CurrentTime from "./currentTime";
import WeatherForecast from "./weatherForecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=e3f5c70f0f06tb1d5a445afb715o7c01&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="body">
        <div className="box1">
          <div className="currentTime">
            <CurrentTime />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="search"
              type="search"
              placeholder="Type the City Name"
              onChange={handleCityChange}
            />
            <input className="submit m-1" type="submit" value="Go" />
          </form>
        </div>
        <div className="text-center box2 containor">
          <span className="forecastBox">
            <div className="currently">
              <WeatherData data={weatherData} />
            </div>
            <div className="forecast">
              <WeatherForecast data={weatherData} />
            </div>
          </span>
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
