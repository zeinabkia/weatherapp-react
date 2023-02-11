import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./styles.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

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
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=e3f5c70f0f06tb1d5a445afb715o7c01&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
