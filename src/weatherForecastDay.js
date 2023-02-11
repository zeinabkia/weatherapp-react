import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="row forecastTable">
      <div className="col-1 forecastDay">{day()}</div>
      <div className="col-5 forecastIcon ">
        <WeatherIcon code={props.data.condition.icon} />
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
