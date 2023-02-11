import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Footer from "./Footer";
import WeatherData from "./WeatherData";
import CurrentTime from "./CurrentTime";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
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
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
              <WeatherForecast coordinates={weatherData.coordinates} />
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
