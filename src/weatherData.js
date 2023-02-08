import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./weatherIcon";
import humadity from "./icon/humidity.svg";
import wind from "./icon/wind.svg";

export default function WeatherData(props) {
  return (
    <div>
      <div className="cityName text-capitalize">{props.data.city}</div>

      <div>
        <span className="currentlyText"> Currently </span>{" "}
        <span className="localTime">1122</span>
      </div>
      <div className="icon">
        <WeatherIcon code={props.data.icon} />
      </div>
      <span className="tempreture">{Math.round(props.data.temperature)}</span>
      <span className="CF">
        <sup>
          <span className="degreeIcon">°</span>
          <sup>
            <span className="celsius">C</span>
            <span className="fahrenheit m-1 p-1">F</span>
          </sup>
        </sup>
      </span>
      <div className="description text-capitalize">
        {props.data.description}
      </div>

      <span>
        <img src={humadity} className="humadityIcon" alt="humadityIcon" />
      </span>
      <span className="humadity">{props.data.humidity}</span>
      <span>
        <small>%</small>
      </span>

      <span>
        <img className="windIcon" src={wind} alt="windIcon" />
      </span>
      <span className="wind">{Math.round(props.data.wind)}</span>
      <span>
        <small>m/s</small>
      </span>
    </div>
  );
}
