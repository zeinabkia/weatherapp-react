import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="row forecastTable">
      <div className="col-1 forecastDay">{day()}</div>
      <div className="col-5 forecastIcon ">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="col-1">
        <span className="maxTemp">{maxTemperature()}</span>
      </div>
      <div className="col-1">
        <span className="minTemp">{minTemperature()}</span>
      </div>
    </div>
  );
}
