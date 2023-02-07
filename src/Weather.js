import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

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
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="containor col m-5">
        <div className="containor col mt-5 mb-3 p-3 border searchBox">
          <input
            className="search"
            type="search"
            placeholder="Type the City Name"
          />
          <input className="submit m-1" type="submit" value="Go" />
        </div>

        <div className="containor forecastBox flex row">
          <div className="currently p-3 col">
            <div className="cityName text-capitalize">{weatherData.city}</div>
            <div>
              <span className="currentlyText"> Currently </span>{" "}
              <span className="localTime">22:26</span>
            </div>
            <div className="p-2">
              <span className="icon">
                {" "}
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                />{" "}
              </span>
              <span className="tempreture">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="CF">
                <sup>
                  <span className="degreeIcon">°</span>
                  <sup>
                    <span className="celsius">C</span>
                    <span className="fahrenheit m-1 p-1">F</span>
                  </sup>
                </sup>
              </span>
            </div>
            <div className="description text-capitalize">
              {weatherData.description}
            </div>
            <div className="humadityText">
              <span> Humadity: </span>
              <span className="humadity">{weatherData.humidity}</span>
              <span>
                <small> %</small>
              </span>
            </div>
            <div className="windText">
              <span> Wind: </span>
              <span className="wind">{weatherData.wind}</span>
              <span>
                <small> m/s</small>
              </span>
            </div>
          </div>
          <div className="forecast col">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    let city = "Tehran";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=e3f5c70f0f06tb1d5a445afb715o7c01&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
