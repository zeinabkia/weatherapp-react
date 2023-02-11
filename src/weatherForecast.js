import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./styles.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div>
        <div>
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div>
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div>
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div>
          <WeatherForecastDay data={forecast[4]} />
        </div>
        <div>
          <WeatherForecastDay data={forecast[5]} />
        </div>
        <div>
          <WeatherForecastDay data={forecast[6]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
